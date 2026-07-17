// TRAE Work Skins - Content Script
// 在 work.trae.cn 页面注入主题 CSS

const STORAGE_KEY = 'trae_skin_active';

// 预加载所有主题
const THEMES = ['cyberpunk', 'forest', 'sunset', 'midnight', 'ocean', 'sakura', 'handsome', 'beauty', 'cat'];
const themeCache = {};

// 图片主题配置：映射主题名到图片文件路径
const IMAGE_THEMES = {
  'handsome': { image: 'themes/images/handsome.jpg' },
  'beauty':   { image: 'themes/images/beauty.jpg' },
  'cat':      { image: 'themes/images/cat.jpg' },
};

// 缓存已创建的 Blob URL，避免重复加载
const blobUrlCache = {};

async function getImageBlobUrl(themeName) {
  if (blobUrlCache[themeName]) return blobUrlCache[themeName];

  const config = IMAGE_THEMES[themeName];
  if (!config) return null;

  try {
    const imageUrl = chrome.runtime.getURL(config.image);
    const resp = await fetch(imageUrl);
    if (!resp.ok) {
      console.error(`[TRAE Skins] 图片主题 "${themeName}" 背景图加载失败: HTTP ${resp.status}`);
      return null;
    }
    const blob = await resp.blob();
    const blobUrl = URL.createObjectURL(blob);
    blobUrlCache[themeName] = blobUrl;
    return blobUrl;
  } catch (err) {
    console.error(`[TRAE Skins] 图片主题 "${themeName}" 背景图加载异常:`, err);
    return null;
  }
}

async function loadTheme(name) {
  if (themeCache[name]) return themeCache[name];
  try {
    const url = chrome.runtime.getURL(`themes/${name}.css`);
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error(`[TRAE Skins] 主题 "${name}" 加载失败: HTTP ${resp.status}`);
      return null;
    }
    const css = await resp.text();
    themeCache[name] = css;
    return css;
  } catch (err) {
    console.error(`[TRAE Skins] 主题 "${name}" 加载异常:`, err);
    return null;
  }
}

let currentStyleEl = null;

async function applyTheme(themeName) {
  // 移除旧主题
  if (currentStyleEl) {
    currentStyleEl.remove();
    currentStyleEl = null;
  }

  // 清理图片主题的 CSS 变量（切换到非图片主题时必须清理）
  document.documentElement.style.removeProperty('--dream-skin-art');

  if (!themeName || themeName === 'default') return;

  // 限免期间：付费主题直接可用，无需检查解锁状态
  // 如果是图片主题，先获取 Blob URL 并注入 CSS 变量
  if (IMAGE_THEMES[themeName]) {
    const blobUrl = await getImageBlobUrl(themeName);
    if (!blobUrl) {
      console.error(`[TRAE Skins] 图片主题 "${themeName}" 无法加载背景图，放弃应用`);
      return;
    }
    document.documentElement.style.setProperty(
      '--dream-skin-art',
      `url("${blobUrl}")`
    );
  }

  const css = await loadTheme(themeName);
  if (!css) return; // 加载失败，保持当前状态

  const el = document.createElement('style');
  el.id = 'trae-skin-injected';
  el.textContent = css;

  // 尽早插入
  (document.head || document.documentElement).appendChild(el);
  currentStyleEl = el;
}

// 监听来自 popup 的消息
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'apply-theme') {
    applyTheme(msg.theme).then(() => sendResponse({ ok: true }));
    return true; // 异步响应
  }
  if (msg.type === 'get-current-theme') {
    chrome.storage.local.get(STORAGE_KEY, (data) => {
      sendResponse({ theme: data[STORAGE_KEY] || 'default' });
    });
    return true;
  }
});

// 监听存储变化（popup 切换时同步）
chrome.storage.onChanged.addListener((changes) => {
  if (changes[STORAGE_KEY]) {
    applyTheme(changes[STORAGE_KEY].newValue);
  }
});

// 页面加载时恢复主题
chrome.storage.local.get(STORAGE_KEY, (data) => {
  const theme = data[STORAGE_KEY];
  if (theme && theme !== 'default') {
    // 如果 head 还没准备好，用 MutationObserver 等待
    if (document.head) {
      applyTheme(theme);
    } else {
      const observer = new MutationObserver(() => {
        if (document.head) {
          observer.disconnect();
          applyTheme(theme);
        }
      });
      observer.observe(document.documentElement, { childList: true });
    }
  }
});