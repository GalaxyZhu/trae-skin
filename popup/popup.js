// 初始主题（内置）
const BASE_THEMES = [
  { id: 'cyberpunk', name: '赛博朋克', desc: '霓虹扫描线，深色科技感' },
  { id: 'forest',    name: '森林',     desc: '幽暗绿意，萤火虫微光' },
  { id: 'sunset',    name: '日落',     desc: '暖橙余晖，温暖沉浸' },
  { id: 'midnight',  name: '暗夜紫',   desc: '紫粉星空，梦幻深邃' },
];

// 从市场可以获取的额外主题
const EXTRA_THEMES = {
  'ocean':   { id: 'ocean',   name: '深海', desc: '幽蓝深海，水波荡漾' },
  'sakura':  { id: 'sakura',  name: '樱花', desc: '粉色浅色系，春日花瓣' },
  'default': { id: 'default', name: '默认', desc: 'TRAE 官方原版界面' },
  'handsome':{ id: 'handsome',name: '帅哥', desc: '冷调人像，毛玻璃质感', image: true },
  'beauty':  { id: 'beauty',  name: '美女', desc: '暖色人像，霓虹氛围', image: true },
  'cat':     { id: 'cat',     name: '猫咪', desc: '萌宠特写，琥珀瞳色', image: true },
};

const STORAGE_KEY = 'trae_skin_active';
const ACQUIRED_KEY = 'trae_skin_acquired';

const checkSvg = `<svg viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="2.5 6 5 8.5 9.5 3.5"/>
</svg>`;

function render() {
  const list = document.getElementById('themeList');

  // 读取已获取的额外主题，合并到列表中
  chrome.storage.local.get([ACQUIRED_KEY, 'trae_skin_premium_unlocked'], (data) => {
    const acquired = data[ACQUIRED_KEY] || [];
    const premiumUnlocked = data['trae_skin_premium_unlocked'] || false;

    // 合并基础主题 + 已获取的额外主题
    let themes = [...BASE_THEMES];
    acquired.forEach(id => {
      if (EXTRA_THEMES[id]) {
        // 限免期间：付费主题直接显示
        themes.push(EXTRA_THEMES[id]);
      }
    });

    list.innerHTML = themes.map(t => {
      const previewStyle = t.image
        ? `style="background-image: url('${chrome.runtime.getURL(`themes/images/${t.id}.jpg`)}'); background-size: cover; background-position: center;"`
        : '';
      const badge = t.image ? '<span class="theme-badge">图片</span>' : '';
      return `
      <div class="theme-card" data-theme="${t.id}">
        <div class="theme-preview" ${previewStyle}></div>
        <div class="theme-info">
          <div class="theme-name">${t.name}${badge}</div>
          <div class="theme-desc">${t.desc}</div>
        </div>
        <div class="check-icon">${checkSvg}</div>
      </div>
      `;
    }).join('');

    // 加载当前选中状态
    chrome.storage.local.get(STORAGE_KEY, (data) => {
      const current = data[STORAGE_KEY] || 'default';
      updateActiveCard(current);
    });

    // 绑定点击
    list.querySelectorAll('.theme-card').forEach(card => {
      card.addEventListener('click', () => {
        const theme = card.dataset.theme;
        chrome.storage.local.set({ [STORAGE_KEY]: theme }, () => {
          updateActiveCard(theme);
          // 通知 content script 切换主题
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.url?.includes('work.trae.cn')) {
              chrome.tabs.sendMessage(tabs[0].id, {
                type: 'apply-theme',
                theme: theme
              });
            }
          });
        });
      });
    });
  });
}

function updateActiveCard(activeTheme) {
  document.querySelectorAll('.theme-card').forEach(card => {
    card.classList.toggle('active', card.dataset.theme === activeTheme);
  });
}

render();

// 主题市场按钮：在新标签页打开
document.getElementById('marketplaceBtn').addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL('marketplace.html') });
});

// ============================================
// 激活码验证
// ============================================
const licenseToggle = document.getElementById('licenseToggle');
const licenseInputRow = document.getElementById('licenseInputRow');
const licenseInput = document.getElementById('licenseInput');
const licenseSubmit = document.getElementById('licenseSubmit');
const licenseMsg = document.getElementById('licenseMsg');
const licenseStatus = document.getElementById('licenseStatus');

// 检查已解锁状态
isPremiumUnlocked((unlocked) => {
  if (unlocked) {
    licenseStatus.style.display = 'block';
    licenseToggle.style.display = 'none';
  }
});

licenseToggle.addEventListener('click', () => {
  licenseInputRow.classList.toggle('show');
  if (licenseInputRow.classList.contains('show')) {
    licenseInput.focus();
  }
});

licenseSubmit.addEventListener('click', async () => {
  const code = licenseInput.value.trim();
  if (!code) {
    showLicenseMsg('请输入激活码', 'error');
    return;
  }
  licenseSubmit.textContent = '验证中...';
  licenseSubmit.disabled = true;
  const valid = await verifyLicenseCode(code);
  licenseSubmit.textContent = '验证';
  licenseSubmit.disabled = false;
  if (valid) {
    setPremiumUnlocked(true, () => {
      showLicenseMsg('激活成功！付费主题已全部解锁', 'success');
      licenseInputRow.classList.remove('show');
      licenseStatus.style.display = 'block';
      licenseToggle.style.display = 'none';
    });
  } else {
    showLicenseMsg('激活码无效，请检查后重试', 'error');
  }
});

licenseInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') licenseSubmit.click();
});

function showLicenseMsg(text, type) {
  licenseMsg.textContent = text;
  licenseMsg.className = 'license-msg show ' + type;
  if (type === 'success') {
    setTimeout(() => { licenseMsg.classList.remove('show'); }, 3000);
  }
}
