// TRAE Skins - License Verification Module
// 激活码验证：HMAC-SHA256 签名校验
// 被 popup.js 和 content.js 共用

const LICENSE_SECRET = 'trae-skins-8f3a2b7c9e1d4f6a-2024';
const PREMIUM_KEY = 'trae_skin_premium_unlocked';

// 付费主题列表
const PREMIUM_THEMES = ['handsome', 'beauty', 'cat'];

/**
 * 验证激活码
 * @param {string} code - 格式: payload-signature (16hex-8hex)
 * @returns {Promise<boolean>}
 */
async function verifyLicenseCode(code) {
  if (!code) return false;
  const parts = code.trim().split('-');
  if (parts.length !== 2) return false;
  const payload = parts[0];
  const signature = parts[1];
  // 格式校验
  if (!/^[0-9a-f]{16}$/.test(payload)) return false;
  if (!/^[0-9a-f]{8}$/.test(signature)) return false;
  try {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw', enc.encode(LICENSE_SECRET),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
    const expected = Array.from(new Uint8Array(sig))
      .map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 8);
    return signature === expected;
  } catch (e) {
    console.error('[TRAE Skins] 激活码验证异常:', e);
    return false;
  }
}

/**
 * 检查是否已解锁付费主题
 * @param {function} callback - (unlocked: boolean) => void
 */
function isPremiumUnlocked(callback) {
  chrome.storage.local.get(PREMIUM_KEY, (data) => {
    callback(!!data[PREMIUM_KEY]);
  });
}

/**
 * 设置付费主题解锁状态
 * @param {boolean} unlocked
 * @param {function} [callback]
 */
function setPremiumUnlocked(unlocked, callback) {
  chrome.storage.local.set({ [PREMIUM_KEY]: unlocked }, () => {
    if (callback) callback();
  });
}
