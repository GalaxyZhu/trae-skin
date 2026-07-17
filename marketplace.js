// ============================================
// TRAE Skins Marketplace - Theme Data & Logic
// ============================================

const THEMES = [
  {
    id: 'ocean', name: '深海', nameEn: 'Ocean',
    desc: '幽蓝深海，水波荡漾。潜入海底两万里。',
    tags: ['深色', '动画', '冷色'], category: 'free', type: 'dark',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #060d16, #0c1623)', sidebar: 'rgba(34, 211, 238, 0.06)', title: 'linear-gradient(90deg, #22d3ee, #60a5fa)', line: 'rgba(34, 211, 238, 0.15)', input: 'rgba(34, 211, 238, 0.05)', accent: '#22d3ee' }
  },
  {
    id: 'sakura', name: '樱花', nameEn: 'Sakura',
    desc: '粉色浅色系，春日花瓣飘落。这是最温柔的一个主题。',
    tags: ['浅色', '动画', '粉色'], category: 'free', type: 'light',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #fdf6f8, #fff0f3)', sidebar: 'rgba(244, 114, 182, 0.08)', title: 'linear-gradient(90deg, #ec4899, #f472b6)', line: 'rgba(244, 114, 182, 0.2)', input: 'rgba(244, 114, 182, 0.06)', accent: '#ec4899' }
  },
  {
    id: 'default', name: '默认', nameEn: 'Default',
    desc: 'TRAE 官方原版界面，纯粹不加修饰。',
    tags: ['官方', '简洁'], category: 'free', type: 'light',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #f5f5f5, #ffffff)', sidebar: 'rgba(0, 0, 0, 0.04)', title: 'rgba(0, 0, 0, 0.8)', line: 'rgba(0, 0, 0, 0.1)', input: 'rgba(0, 0, 0, 0.05)', accent: '#333' }
  },
  {
    id: 'handsome', name: '帅哥', nameEn: 'Handsome',
    desc: '冷调人像摄影，毛玻璃质感面板。蓝色与紫色的光影交织。',
    tags: ['图片', '深色', '毛玻璃', '人像'], category: 'premium', type: 'image',
    price: '¥1.8',
    image: 'themes/images/handsome.jpg',
    preview: { bg: 'linear-gradient(135deg, rgba(8,12,24,0.82), rgba(12,18,32,0.5))', sidebar: 'rgba(10,14,28,0.7)', title: 'linear-gradient(90deg, #5b9fff, #a78bfa)', line: 'rgba(91,159,255,0.2)', input: 'rgba(14,20,36,0.6)', accent: '#5b9fff', image: 'themes/images/handsome.jpg' }
  },
  {
    id: 'beauty', name: '美女', nameEn: 'Beauty',
    desc: '暖色霓虹人像，粉色与橙色的梦幻氛围。',
    tags: ['图片', '深色', '毛玻璃', '人像'], category: 'premium', type: 'image',
    price: '¥1.8',
    image: 'themes/images/beauty.jpg',
    preview: { bg: 'linear-gradient(135deg, rgba(20,8,16,0.8), rgba(28,12,20,0.5))', sidebar: 'rgba(22,10,18,0.7)', title: 'linear-gradient(90deg, #f472b6, #fb923c)', line: 'rgba(244,114,182,0.2)', input: 'rgba(28,14,24,0.6)', accent: '#f472b6', image: 'themes/images/beauty.jpg' }
  },
  {
    id: 'cat', name: '猫咪', nameEn: 'Cat',
    desc: '萌宠特写，琥珀色瞳孔。谁能拒绝一双猫眼的注视。',
    tags: ['图片', '深色', '毛玻璃', '萌宠'], category: 'premium', type: 'image',
    price: '¥1.8',
    image: 'themes/images/cat.jpg',
    preview: { bg: 'linear-gradient(135deg, rgba(12,10,6,0.8), rgba(18,14,8,0.5))', sidebar: 'rgba(14,12,8,0.7)', title: 'linear-gradient(90deg, #fbbf24, #34d399)', line: 'rgba(251,191,36,0.2)', input: 'rgba(20,16,10,0.6)', accent: '#fbbf24', image: 'themes/images/cat.jpg' }
  },
  {
    id: 'cyberpunk', name: '赛博朋克', nameEn: 'Cyberpunk',
    desc: '霓虹扫描线，深色科技感。青色与品红的碰撞，在暗夜中闪烁。',
    tags: ['深色', '动画', '科技感'], category: 'free', type: 'dark',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #050a10, #0a0a14)', sidebar: 'rgba(0, 240, 255, 0.08)', title: 'linear-gradient(90deg, #00f0ff, #ff00aa)', line: 'rgba(0, 240, 255, 0.2)', input: 'rgba(0, 240, 255, 0.06)', accent: '#00f0ff' }
  },
  {
    id: 'forest', name: '森林', nameEn: 'Forest',
    desc: '幽暗绿意，萤火虫微光。仿佛置身于雨夜的密林深处。',
    tags: ['深色', '动画', '自然'], category: 'free', type: 'dark',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #0a1410, #0f1a12)', sidebar: 'rgba(74, 222, 128, 0.06)', title: 'linear-gradient(90deg, #4ade80, #86efac)', line: 'rgba(74, 222, 128, 0.15)', input: 'rgba(74, 222, 128, 0.05)', accent: '#4ade80' }
  },
  {
    id: 'sunset', name: '日落', nameEn: 'Sunset',
    desc: '暖橙余晖，温暖沉浸。天边最后一抹夕阳的颜色。',
    tags: ['深色', '暖色', '自然'], category: 'free', type: 'dark',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #1a0e0a, #241410)', sidebar: 'rgba(255, 107, 53, 0.06)', title: 'linear-gradient(90deg, #f59e0b, #ff6b35)', line: 'rgba(255, 107, 53, 0.15)', input: 'rgba(255, 107, 53, 0.05)', accent: '#ff6b35' }
  },
  {
    id: 'midnight', name: '暗夜紫', nameEn: 'Midnight',
    desc: '紫粉星空，梦幻深邃。星河在指尖流转。',
    tags: ['深色', '动画', '梦幻'], category: 'free', type: 'dark',
    price: '免费',
    preview: { bg: 'linear-gradient(145deg, #0c0a14, #14111f)', sidebar: 'rgba(167, 139, 250, 0.06)', title: 'linear-gradient(90deg, #a78bfa, #f472b6)', line: 'rgba(167, 139, 250, 0.15)', input: 'rgba(167, 139, 250, 0.05)', accent: '#a78bfa' }
  },
];

// ============================================
// Render Theme Cards
// ============================================
function renderPreview(theme) {
  const p = theme.preview;

  // 图片主题：直接用整张背景图做预览，不画迷你浏览器窗口
  if (theme.type === 'image' && p.image) {
    return '' +
      '<div class="theme-preview" style="background-image: url(\'' + p.image + '\'); background-size: cover; background-position: center;">' +
        '<div class="theme-badge ' + theme.category + '">' +
          (theme.category === 'free' ? '免费' : '限免') +
        '</div>' +
      '</div>';
  }

  // 纯色主题：迷你浏览器窗口预览
  return '' +
    '<div class="theme-preview" style="background: ' + p.bg + ';">' +
      '<div class="theme-badge ' + theme.category + '">' +
        (theme.category === 'free' ? '免费' : '限免') +
      '</div>' +
      '<div class="theme-preview-sidebar" style="background: ' + p.sidebar + ';">' +
        '<span style="background: ' + p.accent + ';"></span>' +
        '<span style="background: ' + p.line + ';"></span>' +
        '<span style="background: ' + p.line + ';"></span>' +
        '<span style="background: ' + p.line + ';"></span>' +
      '</div>' +
      '<div class="theme-preview-content">' +
        '<div class="theme-preview-title" style="background: ' + p.title + ';"></div>' +
        '<div class="theme-preview-line" style="background: ' + p.accent + ';"></div>' +
        '<div class="theme-preview-line" style="background: ' + p.accent + ';"></div>' +
        '<div class="theme-preview-input" style="background: ' + p.input + '; border: 1px solid ' + p.line + ';"></div>' +
      '</div>' +
    '</div>';
}

function renderCard(theme, index) {
  var actionText, actionClass, priceDisplay;
  if (theme.category === 'free') {
    actionText = '免费获取';
    actionClass = 'free';
    priceDisplay = '免费';
  } else {
    actionText = '限时免费';
    actionClass = 'premium';
    priceDisplay = '<span class="theme-price premium">¥1.8</span><span class="theme-price-free">免费</span>';
  }

  return '' +
    '<div class="theme-card" data-category="' + theme.category + '" data-type="' + theme.type + '" data-name="' + theme.name + theme.nameEn + '" data-theme-id="' + theme.id + '" style="animation-delay: ' + (index * 0.06) + 's;">' +
      renderPreview(theme) +
      '<div class="theme-info">' +
        '<div class="theme-name">' +
          theme.name +
          '<span class="theme-name-en">' + theme.nameEn + '</span>' +
        '</div>' +
        '<div class="theme-desc">' + theme.desc + '</div>' +
        '<div class="theme-tags">' +
          theme.tags.map(function(t) { return '<span class="theme-tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<div class="theme-footer">' +
          '<div class="theme-price ' + theme.category + '">' + priceDisplay + '</div>' +
          '<button class="theme-action ' + actionClass + '" data-theme-id="' + theme.id + '">' + actionText + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
}

var grid = document.getElementById('themeGrid');
grid.innerHTML = THEMES.map(function(t, i) { return renderCard(t, i); }).join('');

// ============================================
// Premium Unlock Status
// ============================================
var premiumUnlocked = true; // 限免期间全部解锁

isPremiumUnlocked(function(unlocked) {
  premiumUnlocked = true; // 强制解锁
  if (!unlocked) {
    setPremiumUnlocked(true); // 持久化
  }
  updatePremiumCards();
});

function updatePremiumCards() {
  document.querySelectorAll('.theme-action.premium').forEach(function(btn) {
    btn.textContent = '限时免费';
    btn.classList.remove('unlocked');
    btn.disabled = false;
  });
}

// 点击付费主题按钮 → 限免期间直接安装
document.querySelectorAll('.theme-action.premium').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var themeId = btn.dataset.themeId;
    applyThemeToExtension(themeId);
  });
});

// 点击免费主题按钮 → 直接应用主题
document.querySelectorAll('.theme-action.free').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var themeId = btn.dataset.themeId;
    applyThemeToExtension(themeId);
  });
});

// 应用主题到扩展：设置 active theme + 通知 content script + 记录已获取
function applyThemeToExtension(themeId) {
  // 非扩展环境（网站预览）只更新按钮状态
  if (typeof chrome === 'undefined' || !chrome.storage) {
    var btn0 = document.querySelector('.theme-action[data-theme-id="' + themeId + '"]');
    if (btn0) {
      var orig0 = btn0.textContent;
      btn0.textContent = '已应用';
      btn0.style.opacity = '0.6';
      setTimeout(function() { btn0.textContent = orig0; btn0.style.opacity = ''; }, 1500);
    }
    return;
  }
  // 1. 设置当前激活主题
  chrome.storage.local.set({ 'trae_skin_active': themeId }, function() {
    // 2. 记录到已获取主题列表（弹窗会读取这个列表显示额外主题）
    chrome.storage.local.get('trae_skin_acquired', function(data) {
      var acquired = data.trae_skin_acquired || [];
      if (!acquired.includes(themeId)) {
        acquired.push(themeId);
        chrome.storage.local.set({ 'trae_skin_acquired': acquired });
      }
    });
    // 3. 通知 work.trae.cn 页面切换主题
    chrome.tabs.query({ url: 'https://work.trae.cn/*' }, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, { type: 'apply-theme', theme: themeId });
      });
    });
    // 4. 更新按钮状态
    var btn = document.querySelector('.theme-action[data-theme-id="' + themeId + '"]');
    if (btn) {
      var originalText = btn.textContent;
      btn.textContent = '已应用';
      btn.style.opacity = '0.6';
      setTimeout(function() {
        btn.textContent = originalText;
        btn.style.opacity = '';
      }, 1500);
    }
  });
}

// ============================================
// Filter Logic
// ============================================
const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.theme-card');
const searchInput = document.getElementById('searchInput');

let activeFilter = 'all';
let searchTerm = '';

function applyFilters() {
  cards.forEach(function(card) {
    const category = card.dataset.category;
    const type = card.dataset.type;
    const name = card.dataset.name.toLowerCase();

    const matchCategory = activeFilter === 'all' ||
      (activeFilter === 'free' && category === 'free') ||
      (activeFilter === 'premium' && category === 'premium') ||
      (activeFilter === 'dark' && type === 'dark') ||
      (activeFilter === 'light' && type === 'light') ||
      (activeFilter === 'image' && type === 'image');

    const matchSearch = !searchTerm || name.includes(searchTerm);

    if (matchCategory && matchSearch) {
      card.style.display = '';
      card.style.animation = 'cardReveal 0.4s ease both';
    } else {
      card.style.display = 'none';
    }
  });
}

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    tabs.forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    activeFilter = tab.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', function(e) {
  searchTerm = e.target.value.toLowerCase();
  applyFilters();
});

// ============================================
// Showcase: Live Theme Preview Carousel
// ============================================
const SHOWCASE_THEMES = [
  THEMES.find(function(t) { return t.id === 'cyberpunk'; }),
  THEMES.find(function(t) { return t.id === 'handsome'; }),
  THEMES.find(function(t) { return t.id === 'sakura'; }),
  THEMES.find(function(t) { return t.id === 'midnight'; }),
  THEMES.find(function(t) { return t.id === 'cat'; }),
];

var showcaseIndex = 0;
var showcaseTimer = null;

var elBody = document.getElementById('showcaseBody');
var elSidebar = document.getElementById('showcaseSidebar');
var elMain = document.getElementById('showcaseMain');
var elTitle = document.getElementById('showcaseTitle');
var elSubtitle = document.getElementById('showcaseSubtitle');
var elInput = document.getElementById('showcaseInput');
var elPlaceholder = document.getElementById('showcasePlaceholder');
var elSend = document.getElementById('showcaseSend');
var elLabel = document.getElementById('showcaseLabel');
var elControls = document.getElementById('showcaseControls');
var elTabs = document.getElementById('showcaseTabs');
var sidebarItems = elSidebar.querySelectorAll('.showcase-sidebar-item');
var sidebarSections = elSidebar.querySelectorAll('.showcase-sidebar-section');
var tabItems = elTabs.querySelectorAll('.showcase-tab');
var inputBtns = elInput.querySelectorAll('.showcase-input-btn');

function applyShowcase(theme) {
  var p = theme.preview;

  // Body background
  if (theme.type === 'image' && p.image) {
    elBody.style.background = p.bg + ', url(\'' + p.image + '\') center / cover no-repeat';
  } else {
    elBody.style.background = p.bg;
  }

  // Sidebar
  elSidebar.style.background = p.sidebar;
  sidebarSections.forEach(function(s) { s.style.color = p.line; });
  sidebarItems.forEach(function(item, i) {
    var icon = item.querySelector('.showcase-sidebar-item-icon');
    var text = item.querySelector('.showcase-sidebar-item-text');
    if (item.classList.contains('active')) {
      item.style.background = p.line;
      icon.style.background = p.accent;
      text.style.background = p.accent;
      item.querySelector('.showcase-sidebar-item-text').style.width = '80%';
      // active indicator bar
      var bar = item;
      bar.style.setProperty('--bar-color', p.accent);
    } else {
      item.style.background = 'transparent';
      icon.style.background = p.line;
      text.style.background = p.line;
    }
  });
  // Set active bar color via style override
  var activeBar = elSidebar.querySelector('.showcase-sidebar-item.active::before');
  // Use a data attribute trick for the ::before color
  elSidebar.style.setProperty('--active-bar', p.accent);

  // Main content
  elMain.style.background = 'transparent';
  elTitle.style.background = p.title;
  elTitle.style.webkitBackgroundClip = 'text';
  elTitle.style.webkitTextFillColor = 'transparent';
  elTitle.style.backgroundClip = 'text';
  elSubtitle.style.color = p.line;

  // Tabs
  tabItems.forEach(function(tab) {
    if (tab.classList.contains('active')) {
      tab.style.color = p.accent;
      tab.style.borderBottomColor = p.accent;
    } else {
      tab.style.color = p.line;
      tab.style.borderBottomColor = 'transparent';
    }
  });

  // Input box
  elInput.style.background = p.input;
  elInput.style.border = '1px solid ' + p.line;
  elPlaceholder.style.color = p.line;
  inputBtns.forEach(function(btn) { btn.style.background = p.line; });
  elSend.style.background = p.accent;

  // Label
  elLabel.textContent = theme.name + ' · ' + theme.nameEn;
  elLabel.classList.add('show');
  elLabel.style.color = p.accent;
  elLabel.style.borderColor = p.line;
}

function renderShowcaseControls() {
  elControls.innerHTML = SHOWCASE_THEMES.map(function(t, i) {
    return '<button class="showcase-dot' + (i === showcaseIndex ? ' active' : '') + '" data-index="' + i + '" title="' + t.name + '"></button>';
  }).join('');

  elControls.querySelectorAll('.showcase-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      showcaseIndex = parseInt(dot.dataset.index);
      switchShowcase();
      resetTimer();
    });
  });
}

function switchShowcase() {
  var theme = SHOWCASE_THEMES[showcaseIndex];
  applyShowcase(theme);
  elControls.querySelectorAll('.showcase-dot').forEach(function(dot, i) {
    dot.classList.toggle('active', i === showcaseIndex);
  });
}

function nextShowcase() {
  showcaseIndex = (showcaseIndex + 1) % SHOWCASE_THEMES.length;
  switchShowcase();
}

function resetTimer() {
  if (showcaseTimer) clearInterval(showcaseTimer);
  showcaseTimer = setInterval(nextShowcase, 4000);
}

// Add active bar color via CSS injection
var barStyle = document.createElement('style');
barStyle.textContent = '.showcase-sidebar-item.active::before { background: var(--active-bar, #fff); }';
document.head.appendChild(barStyle);

// Init
renderShowcaseControls();
switchShowcase();
resetTimer();

// Pause on hover
elBody.parentElement.addEventListener('mouseenter', function() {
  if (showcaseTimer) clearInterval(showcaseTimer);
});
elBody.parentElement.addEventListener('mouseleave', resetTimer);

// ============================================
// License Modal
// ============================================
var modalOverlay = document.getElementById('licenseModalOverlay');
var modalInput = document.getElementById('licenseModalInput');
var modalBtn = document.getElementById('licenseModalBtn');
var modalMsg = document.getElementById('licenseModalMsg');
var modalClose = document.getElementById('licenseModalClose');

function openLicenseModal() {
  modalOverlay.classList.add('show');
  setTimeout(function() { modalInput.focus(); }, 200);
}

function closeLicenseModal() {
  modalOverlay.classList.remove('show');
  modalInput.value = '';
  modalMsg.className = 'license-modal-msg';
  modalMsg.textContent = '';
}

modalClose.addEventListener('click', closeLicenseModal);
modalOverlay.addEventListener('click', function(e) {
  if (e.target === modalOverlay) closeLicenseModal();
});

modalBtn.addEventListener('click', async function() {
  var code = modalInput.value.trim();
  if (!code) {
    modalMsg.className = 'license-modal-msg error';
    modalMsg.textContent = '请输入激活码';
    return;
  }
  modalBtn.textContent = '验证中...';
  modalBtn.disabled = true;
  var valid = await verifyLicenseCode(code);
  modalBtn.textContent = '验证并解锁';
  modalBtn.disabled = false;
  if (valid) {
    setPremiumUnlocked(true, function() {
      premiumUnlocked = true;
      updatePremiumCards();
      modalMsg.className = 'license-modal-msg success';
      modalMsg.textContent = '激活成功！付费主题已全部解锁';
      setTimeout(closeLicenseModal, 1500);
    });
  } else {
    modalMsg.className = 'license-modal-msg error';
    modalMsg.textContent = '激活码无效，请检查后重试';
  }
});

modalInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') modalBtn.click();
});
