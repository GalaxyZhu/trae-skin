# TRAE Work Skins

给 TRAE Work 网页版（work.trae.cn）换上好看的皮肤主题。

## 功能

- 10+ 精选主题（深色 / 浅色 / 图片背景）
- 一键切换，纯 CSS 注入，不修改页面功能
- 图片主题采用 Blob URL 技术 + 毛玻璃质感面板
- 内置主题市场，支持限免活动
- 激活码本地验证（HMAC-SHA256）

## 安装

1. 下载本仓库代码
2. 打开 Chrome / Edge → 地址栏输入 `chrome://extensions/`
3. 右上角打开「开发者模式」
4. 点击「加载已解压的扩展程序」，选择本文件夹
5. 打开 [work.trae.cn](https://work.trae.cn)，点击扩展图标选择主题

## 主题预览

| 主题 | 类型 | 说明 |
|------|------|------|
| 赛博朋克 | 深色 | 霓虹扫描线，青色与品红碰撞 |
| 森林 | 深色 | 幽暗绿意，萤火虫微光 |
| 日落 | 深色 | 暖橙余晖，温暖沉浸 |
| 暗夜紫 | 深色 | 紫粉星空，梦幻深邃 |
| 深海 | 深色 | 幽蓝深海，水波荡漾 |
| 樱花 | 浅色 | 粉色花瓣飘落 |
| 帅哥 | 图片 | 冷调人像，毛玻璃质感 |
| 美女 | 图片 | 暖色霓虹人像 |
| 猫咪 | 图片 | 萌宠特写，琥珀瞳色 |

## 技术栈

- Chrome Extension Manifest V3
- 纯 CSS 主题注入
- Blob URL + CSS 变量实现图片背景
- Web Crypto API (HMAC-SHA256) 激活码验证
- backdrop-filter 毛玻璃效果

## 作者

Galaxy Zhu · [@galaxyzhu](https://x.com/galaxyzhu)

## 声明

本项目是非官方的第三方扩展，与 TRAE / 字节跳动无关联，仅供个人学习与技术交流使用。详见 [关于页面](marketplace.html#about)。

## License

MIT
