# Web技術全般について

入れる予定内容、ビジネスドメインの分割で技術(もしくはWG)をリストする。

## 関連WGリスト (27)

- Audio Working Group
- Browser Testing and Tools Working Group
- Cascading Style Sheets (CSS) Working Group
- Devices and Sensors Working Group
- Distributed Tracing Working Group
- Federated Identity Working Group
- GPU for the Web Working Group
- HTML Working Group
- Immersive Web Working Group
- Math Working Group
- Media Working Group
- Pointer Events Working Group
- Portable Network Graphics (PNG) Working Group
- Private Advertising Technology Working Group
- Second Screen Working Group
- SVG Working Group
- Web Application Security Working Group
- Web Applications Working Group
- Web Authentication Working Group
- Web Editing Working Group
- Web Fonts Working Group
- Web Machine Learning Working Group
- Web Payments Working Group
- Web Performance Working Group
- Web Real-Time Communications Working Group
- WebAssembly Working Group
- WebTransport Working Group

## ビジネスドメイン分類

2025 Interopの壁面パネルに合わせる、か？ただ、入れてみたらWG該当がない(WHATWG仕様分)ものもあるので、大分類で文章化する？

- Core Web
  - HTML
    - HTML WG
  - CSS
    - CSS WG
  - MathML
    - Math WG
- Web Application
  - Storage
  - Performance
    - Browser Testing and Tools WG
    - Distributed Tracing WG
    - Web Performance WG
  - Hardware support
    - Devices and Sensors WG
    - Immersive Web WG
    - WebML WG
  - Extended interfaces
    - Pointer Events WG
    - Second Screen WG
    - Web Applications WG
    - Web Editing WG
    - Web Fonts WG
    - WebAssembly WG
- Media and Entertainment
  - Image
    - PNG WG
    - SVG WG
  - Movie
    - Audio WG
    - Media WG
  - Streaming
    - Web RTC WG
    - Web Transport WG
  - Games
- Trust
  - Web Application Security WG
  - Ad
    - PAT WG
  - ID
    - Federated Identity WG
  - Authentication
    - Web Authentication WG
  - Payments
    - Web Payments WG

10pt文字で2000字程度(?)、図版入れる場合は少し少なめに。

# 本文

## Core Web

Webのコア技術はいまなお進化し続けています。
CSS WGでは90を超える領域について、130個を超える仕様書を開発・維持しており、いまなお新しいデザイン上の概念のCSSへの実装や、実利用での不便性から要請された新機能の追加を活発に行っています。
また、W3CのコミュニティーグループであるWeb Incubator CG (WICG)やOpen UI CGでは、HTML仕様を所管するWHATWGやCSS WGと協働してWebに新規追加すべき新しいAPIのインキュベーションや、
既存の多数のUIライブラリで共通して実装されているUI機能を抽出し概念化することでHTMLやCSSに新しい機能・概念を導入する活動が行われています。

## Web Application

2010年前後の"Browser as a Platform"の概念の急速な普及以来、WebへOSを代替するべくさまざまなアプリケーションプラットフォーム機能が追加され、
また次々に登場するハードウェア機能への対応や快適な動作に向けたパフォーマンス解析への対応など幅広い新機能が取り込まれています。
近年でも、機械学習の発展によりGPUのみならず専用チップのWebからの活用など、新領域への不断なき対応が続いています。

### Performance

快適なウェブサービスの利用のためには、パフォーマンスを測定し改善すべき点を検出することが不可欠です。
Web Performance WGでは

## Media and Entertainment


## Trust

