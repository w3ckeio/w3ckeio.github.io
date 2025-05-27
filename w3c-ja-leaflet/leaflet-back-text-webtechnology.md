# Web技術全般について

入れる予定内容、ビジネスドメインの分割で技術(もしくはWG)をリストする。

## 関連WGリスト (27)

WG DBでbrowser=yesになっているWGの(生)リスト。

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
    - GPU for the Web Working Group
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
数式をブラウザ上で表示するためのMathMLについても、基本的な機能に限定したMathML CoreとMathML第4版に分割した形でMath WGにおいて開発が続いています。

## Web Application

2010年前後の"Browser as a Platform"の概念の急速な普及以来、WebへOSを代替するべくさまざまなアプリケーションプラットフォーム機能が追加され、
また次々に登場するハードウェア機能への対応や快適な動作に向けたパフォーマンス解析への対応など幅広い新機能が取り込まれています。
近年でも、機械学習の発展によりGPUのみならず専用チップのWebからの活用など、新領域への不断なき対応が続いています。

### Performance

快適なウェブサービスの利用のためには、パフォーマンスを測定し改善すべき点を検出することが不可欠です。
Web Performance WGではブラウザでのウェブページの読み込みやユーザ操作について処理に要した時間などを解析するための時間データを取得する仕様を開発しています。
また、近年ではCDNなどを含めた多数のサービスを連携させて構築する分散システムでのウェブサービスが広く普及しており、
OpenTelemetryなどのサービス間をつないでパフォーマンスデータを収集しオブザーバビリティシステムで解析することの重要性がますます増大しています。
Distributed Tracing WGではこのトレース情報の伝播の標準仕様を提供しています。
これらの検証を自動的に行えるようにするため、ブラウザ上のユーザの操作をシミュレートする仕様であるWebDriverをBrowser Testing and Tools WGで開発しています。
ブラウザとのやり取りを双方向で行うためのWebDriver BiDiの策定も進行中です。

### Hardware support

スマートフォンの普及とともにそれまで画面表示の処理がメインだったブラウザにもさまざまなデバイス・センサーからのデータ取得機能が搭載されるようになり、また近年ではデータ処理をCPU以外のチップでも行うようになってきており、
かつ3次元データの活用やカメラと合わせたARなども普及してきました。
GPU for the Web WGではブラウザから直接GPUに処理をさせて3D経産を行うWebGPUや画面表示を作るためのシェーディング言語WebGPU Shading Language (WGSL)を開発しており、
ARやVRを包含するXR向けにはImmersive Web WGがブラウザ上でDOMといったHTML機能を活用しつつXRを実現するWebXRを開発しています。
また、最近の機械学習の発展によりGPU以外にTPUと呼ばれる機械学習専用プロセッサが搭載されるようになり、Web Machine Learning WGではGPUとTPUの双方を活用できるWeb Neural Network APIを開発中です。
デバイスにあるセンサーからのデータ取得については、fingerprintingの悪用が広がるとともに、デバイス機能アクセスへのユーザ承認の権限プロンプトの整備や、
USB経由などでの悪意のあるデバイスの接続などの懸念が広がり、Privacy WGなどとともに権限プロンプト機構の抜本的更新のための議論も進んでいます。
また、各種センサーの値を取得するGeneric Sensor API仕様やその拡張仕様を開発しているDevices and Sensors WGでは、読取値にランダムノイズを載せるなどといったfingerprinting対策の仕様更新を行っています。

### Extended interfaces

ブラウザがアプリケーションプラットフォーム化するとともに、より高機能なUIを作りたい要求が出てきました。
Pointer Events WGではマウス・ペンの詳細な情報取得やイベントへの対応、Second Screen WGでは全画面表示や2画面以上の画面に対応する仕様、
これらとともにアプリケーションを実現するためのUI Events、Push API、Service Workers、File APIなど多数のAPIがWeb Applications WGで開発され続けています。
また、自由にフォントを利用するためにオンラインでフォントを供給・利用するために特化したWOFF形式、より効率的にグリフデータを供給するIncremental Font Transferの仕様をWeb Fonts WGで開発中です。
文字入力についても、Web Editing WGで表示上の文章の選択、クリップボードや仮想キーボードの扱いのための仕様が開発されています。
これらの動作パフォーマンスの向上のため、JavaScriptではなく機械語で直接効率化されたCPU処理を行うWebAssembly仕様も提供しています。

## Media and Entertainment

高度なUIを形成するには画像・動画といったメディア対応が必須になります。
また、近年の急速な社会のオンライン化により、効率的なオンライン通信への要求も高まっています。
多様な画像・動画形式が利用されていますが、W3CではPNG WGにてPNG形式の刷新や、XMLベースのベクター画像形式であるSVG仕様のメンテナンスをSVG WGにて行っています。

### Movie

動画、音声処理については、Audio WGにて、シンセサイザーを実現するような、音声グラフ、音源、エフェクト、立体音響など豊富な機能を持つWeb Audio APIの初版勧告仕様を2021年に公開して以来、
より使いやすい仕様にするための更新を続けています。
また、Media WGではビデオ表示のためのMSE/EMEの公開以降も、他のアプリの稼働時に画面上にビデオを表示し続けるためのPicture-in-Pictureや、再生制御などを表示するためのMedia Session、
メディアデータを処理するコーデックを利用するためのWebCodecsなどの仕様を継続して開発し続けています。

### Streaming

ブラウザ上でオンラインビデオ通話を実現するWebRTCの公開草案初版が2011年にWeb Real-Time Communications (WebRTC) WGから公表されて以来、ブラウザでの動画生成を含めたメディア通信機能が拡張され続けてきました。
WebRTC WGではWebRTCの開発に並行して、画面キャプチャのScreen Capture、カメラ動画などをブラウザで扱えるようにするMedia Capture and Streamsや動画データそのものを編集するためのMediaStreamの各種仕様を開発しています。
そしてWebRTCの利用が進化する中で、より効率的にかつさまざまな機能を併用してオンライン通信を行う要請が強くなったことから、WebCodecsなどWebRTCの多数の構成要素を分割したそれぞれについての仕様策定が進められています。
WebTransport WGではその中でもHTTP/3上で双方向通信を実現するためのWebTransport仕様をIETFと協働して開発しています。

## Trust

オンライン通販や金融サービスなど、日々の生活がオンラインサービスに依存するようになってきている中、日常のさまざまな場面でIDと認証を利用しており、安全なWebの重要性が高まっています。
Web Application Security WGでは、多数のサービスの連携によるウェブサービスにおいてコンテンツを読み込むかどうかのポリシーを定義するためのCSPや、
ウェブ開発者がブラウザの機能をサイトで利用するときにユーザの許可を得るためのPermissions Policyなどを策定しています。

認証の領域では、パスワードをネットワーク上に送信せずに認証を行う機構を標準化するFIDOと協働でWeb Authentication WGがブラウザ上でFIDO方式の認証を実現するWeb Authentication仕様を開発しており、
IDプロバイダー(IdP)を利用した認証をサービスが利用する際に、ブラウザ側でOIDCやSAMLと互換性のある手法による認証・認可情報のやり取りを行うようにするためのFederated Credential Management (FedCM) API
がFederated Identity WGにて議論されています。後者は一旦外部サイトに移動し認証してから、認可情報を3rd party cookieなどを利用し戻ってくるような機構を置き換えるものです。

決済領域ではWeb Payments WGが決済自体やその情報の扱いをブラウザが行うための仕様であるPayment Request APIを開発しており、
加えて決済認証においてはPSD2などの強固な顧客認証の規制にも準拠するWeb Authenticationをベースとした強固な認証方法となるSecure Payment Confirmation (SPC)を開発中です。

3rd party cookieなどのユーザ追跡の利用などで課題が提示されることが多い広告領域については、2024年11月にPrivate Advertising Technology WG (PATWG)が設立され、
プライバシーに配慮した形でどのような機構が考えられるのかを含めた検討が進められています。
また、ユーザによるデータ主権に関連して、ユーザが管理権限を持つ領域にあるユーザデータをオンラインサービスが利用するための新しいプロトコルの策定がLinked Web Storage WGで始まっています。
