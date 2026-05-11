# アクセス解析 要件定義

作成日: 2026-05-11

## 1. 目的

このポートフォリオにアクセスした人の傾向を、無料かつ安全な方法で把握できるようにする。

## 2. 必須要件

1. GitHub Pages のような静的サイトで動作すること
2. 無料で始められること
3. アクセス回数を確認できること
4. 参照元を確認できること
5. 地域情報を確認できること
6. API キーやシークレットをクライアントコードへ埋め込まないこと
7. 既存の HTML/CSS 構成を大きく壊さずに導入できること

## 3. 望ましい要件

1. 運用のために独自サーバーを用意しなくてよいこと
2. 実装後に無効化しやすいこと
3. 利用者へアクセス解析の実施を明示できること
4. 広告用途のシグナルを極力使わないこと

## 4. 制約・注意点

1. 都道府県相当の位置情報は IP アドレス由来の概算であり、完全な正確性は保証されない
2. 広告ブロッカーやブラウザ設定により、実際のアクセス数より少なく計測される場合がある
3. Google Analytics 4 を使うため、Google アカウント作成とプロパティ作成が必要
4. GA4 の Measurement ID は公開前提の識別子であり、API シークレットではない

## 5. 採用方針

無料、静的サイト対応、地域情報、参照元、アクセス回数の要件を満たしやすいため、
このサイトでは Google Analytics 4 を採用する。

## 6. 実装内容

1. `analytics-config.js`
   GA4 の有効化スイッチと Measurement ID を持つ設定ファイル
2. `analytics.js`
   設定が有効なときだけ Google tag を読み込む初期化コード
3. `index.html`
   設定ファイルと解析スクリプトの読み込み、およびアクセス解析に関する注記を追加

## 7. 有効化手順

1. Google Analytics 4 で Web データストリームを作成する
2. `analytics-config.js` の `measurementId` を実際の `G-...` に置き換える
3. `analytics-config.js` の `enabled` を `true` に変更する
4. GitHub Pages にデプロイする

## 8. 確認できる主な情報

1. ページビュー数
2. ユーザー数
3. 参照元
4. 国 / 地域 / 市区町村相当の地理情報

## 9. 参考

- GA4 Measurement ID:
  https://support.google.com/analytics/answer/12270356
- GA4 geographic data:
  https://support.google.com/analytics/answer/11598602
- GA4 dimensions and metrics:
  https://support.google.com/analytics/answer/13947485
