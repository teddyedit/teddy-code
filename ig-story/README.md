# 朝聖之路 IG 限動版型（1080×1920）

- `a-journal.html`：手帳／拍立得拼貼（米色紙、膠帶、手寫字、底片日期戳）
- `b-film.html`：深色底片條（Kodak 底片邊、橘色日期戳）
- `c-ig.html`：IG 原生風格 1：純色底拼貼、白底字、地點貼紙
- `c2-dump.html`：IG 原生風格 2：photo dump，大圖＋四宮格＋投票貼紙
- `c3-fullbleed.html`：IG 原生風格 3：一張照片滿版，小照片貼紙＋表情滑桿貼紙
- `d1-editorial.html`：雜誌風，大圖＋英文襯線字＋三張小圖
- `d2-split.html`：上下兩張滿版，中間一個標題
- `d3-rain.html`：一張雨衣照滿版＋一句話
- `c4-dark.html`：IG 原生風格 4：黑底、白邊照片、粗斜體 WEEK 1

## 換成原圖
把原始照片放進 `photos/`，檔名照舊覆蓋：
`1002-paris.jpg`、`1003-sjpp.jpg`、`1004-orisson.jpg`、`1005-pyrenees.jpg`、`1006-zubiri.jpg`

目前的照片是從舊版截圖裁下來的（解析度低，也為了避開舊文字把下半部裁掉了），換原圖會清楚很多。
想調整裁切位置，改 `<img>` 上的 `object-position`。

## 輸出 PNG
```
NODE_PATH=$(npm root -g) node render.js $PWD/a-journal.html $PWD/b-film.html
```
（需要 Playwright + Chromium，字型從 Google Fonts 載入）
