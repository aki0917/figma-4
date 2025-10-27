# Travel Platform

Figmaデザインから実装した旅行・観光プラットフォームのWebサイトです。

## 最新の更新
- 日本語コメントを削除
- ハンバーガーメニューを修正
- 矢印サイズを調整（20px → 24px）

## 概要

このプロジェクトは、Figmaでデザインされた旅行プラットフォームのランディングページを、モバイルファーストのアプローチで実装したものです。

## 特徴

- **モバイルファースト**: レスポンシブデザインで、モバイルからデスクトップまで対応
- **FLOCSS構成**: 保守性の高いCSS設計手法を採用
- **BEM記法**: クラス名の命名規則としてBEM記法を使用
- **GSAPアニメーション**: 滑らかで魅力的なアニメーション効果
- **パーフェクトピクセル**: Figmaデザインを忠実に再現

## 技術スタック

- HTML5
- SCSS (Sass)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)

## ディレクトリ構成

```
figma#4/
├── assets/
│   ├── images/          # 画像ファイル
│   └── fonts/           # フォントファイル
├── css/
│   └── style.css        # コンパイルされたCSS
├── js/
│   └── main.js          # メインJavaScriptファイル
├── scss/
│   ├── foundation/      # 基盤レイヤー
│   │   ├── _variables.scss
│   │   ├── _base.scss
│   │   └── _index.scss
│   ├── layout/          # レイアウトレイヤー
│   │   ├── _container.scss
│   │   ├── _header.scss
│   │   ├── _main.scss
│   │   ├── _hero.scss
│   │   ├── _section.scss
│   │   ├── _footer.scss
│   │   └── _index.scss
│   ├── object/
│   │   ├── component/   # コンポーネントレイヤー
│   │   │   ├── _button.scss
│   │   │   ├── _input.scss
│   │   │   ├── _rating.scss
│   │   │   └── _index.scss
│   │   ├── project/     # プロジェクトレイヤー
│   │   │   ├── _header.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _section.scss
│   │   │   ├── _footer.scss
│   │   │   └── _index.scss
│   │   ├── utility/     # ユーティリティレイヤー
│   │   │   └── _index.scss
│   │   └── _index.scss
│   └── style.scss       # メインSCSSファイル
├── index.html           # メインHTMLファイル
├── package.json         # npm設定ファイル
└── README.md           # このファイル
```

## セットアップ

1. リポジトリをクローンまたはダウンロード
2. 依存関係をインストール:
   ```bash
   npm install
   ```
3. 開発サーバーを起動:
   ```bash
   npm run dev
   ```
4. ブラウザで `index.html` を開く

## ビルド

本番用にCSSをコンパイル:
```bash
npm run build
```

## 主な機能

### レスポンシブデザイン
- モバイル（320px〜）
- タブレット（768px〜）
- デスクトップ（1024px〜）

### アニメーション
- ページ読み込み時のフェードインアニメーション
- スクロール連動アニメーション（ScrollTrigger）
- ホバーエフェクト
- パララックス効果

### インタラクティブ要素
- モバイルメニュー
- 検索フォーム
- スムーススクロール

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

このプロジェクトはISCライセンスの下で公開されています。

## 作成者

Figmaデザインから実装したTravel Platformプロジェクト






