# textlint-rule-preset-x7ddf74479jn5

x7ddf744979j5のtextlintプリセット

## インストール

```sh
pnpm add -D @x7ddf74479jn5/textlint-preset-x7ddf74479jn5
```

## 使い方

すべてのルールを有効化して使う場合は、次のように設定してください。

```json
{
  "rules": {
    "preset-x7ddf74479jn5": true
  }
}
```

## デフォルト設定

デフォルトでは、次のような設定になっています。個別にルールを有効・無効化することも可能です。

```json
{
  "rules": {
    "@proofdict/proofdict": {
      dictURL: "https://azu.github.io/proof-dictionary/",
    },
    "ja-hiragana-daimeishi": true,
    "ja-hiragana-fukushi": true,
    "ja-hiragana-hojodoushi": true,
    "ja-keishikimeishi": {
      detection_hou_kata: false,
      detection_ue: false,
    },
    "ja-nakaguro-or-halfwidth-space-between-katakana": true,
    "ja-no-abusage": true,
    "ja-no-mixed-period": {
      allowPeriodMarks: [":", "…"],
      allowEmojiAtEnd: true,
    },
    "ja-no-space-around-parentheses": true,
    "ja-no-space-between-full-width": true,
    "ja-no-successive-word": false,
    "ja-no-redundant-expression": true,
    "ja-no-weak-phrase": false,
    "ja-space-between-half-and-full-width": {
      space: "never",
    },
    "ja-space-after-exclamation": true,
    "ja-space-after-question": true,
    "ja-space-around-code": false,
    "ja-space-around-link": false,
    "ja-unnatural-alphabet": true,
    "max-comma": {
      max: 3,
    },
    "max-ten": {
      max: 3,
    },
    "max-kanji-continuous-len": {
      max: 6,
    },
    "no-doubled-conjunction": true,
    "no-doubled-conjunctive-particle-ga": true,
    "no-doubled-joshi": {
      strict: false,
      min_interval: 1,
      allow: ["か", "が", "に"],
    },
    "no-double-negative-ja": true,
    "no-dropping-the-ra": true,
    "no-hankaku-kana": true,
    "no-invalid-control-character": true,
    "no-mix-dearu-desumasu": true,
    "no-mixed-zenkaku-and-hankaku-alphabet": true,
    "no-unmatched-pair": true,
    "sentence-length": {
      max: 150,
    },  
  },
}


```

## 辞書

表記ゆれ修正用の辞書の設定にはazuさんの`https://azu.github.io/proof-dictionary/`を使っています。

## 設定ルール一覧

- 一般的な文書で利用するための形式的なルール（二重否定、ら抜き表現、一文の文字数ほか）
  - <https://github.com/textlint-ja/textlint-rule-preset-japanese>
    - 一文で使える"、"の数
      - <https://github.com/textlint-ja/textlint-rule-max-ten>
    - 一文で使える","の数
      - <https://github.com/textlint/textlint-rule-max-comma>
    - 連続する漢字の数を制限する
      - <https://github.com/textlint-ja/textlint-rule-max-kanji-continuous-len>
    - 逆接の接続助詞「が」が、同一文中に複数回出現していないかどうか
      - <https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga>
    - 同じ接続詞で開始されていることを検出
      - <https://github.com/takahashim/textlint-rule-no-doubled-conjunction>
    - 二重否定の検出
      - <https://github.com/textlint-ja/textlint-rule-no-double-negative-ja>
    - 二重助詞の検出
      - <https://github.com/textlint-ja/textlint-rule-no-doubled-joshi>
    - 一文の最大の長さ
      - <https://github.com/azu/textlint-rule-sentence-length>
    - ら抜き言葉を使用しない
      - <https://github.com/azu/textlint-rule-no-dropping-the-ra>
    - 文の敬体（ですます調）、常体（である調）の混合をチェック
      - <https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu>
    - 制御文字の検出
      - <https://github.com/textlint-rule/textlint-rule-no-invalid-control-character>
    - 半角カタカナの検出
      - <https://github.com/textlint-ja/textlint-rule-no-hankaku-kana>
    - 文末の句点（。）の統一と抜けをチェックする
      - <https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period>
    - 全角と半角アルファベットの混在をチェックする
      - <https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet>
    - 対のカッコがあることをチェック
      - <https://github.com/textlint-rule/textlint-rule-no-unmatched-pair>
- 表記ルール（ひらく漢字）
  - <https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi>
  - <https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi>
  - <https://github.com/lostandfound/textlint-rule-ja-hiragana-hojodoushi>
- スペース周り
  - 半角文字と全角文字の間にスペースを入れるかどうか
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-space-between-half-and-full-width>
  - インラインコードの周りにスペースを入れるかを決めるルール
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-space-around-code>
  - 全角文字同士の間のスペース
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-no-space-between-full-width>
  - カタカナ語間の区切り文字について
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-nakaguro-or-halfwidth-space-between-katakana>
  - かっこの外側、内側ともにスペースを入れないようにするルール
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-no-space-around-parentheses>
  - 感嘆符の後のスペースについて
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-space-after-exclamation>
  - 疑問符の後のスペースについて
    - <https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/blob/master/packages/textlint-rule-ja-space-after-question>
- 日本語表現上の問題をチェックするルール
  - よくある日本語の誤用をチェック
    - <https://github.com/textlint-ja/textlint-rule-ja-no-abusage>
  - 冗長な表現
    - <https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression>
  - 同一の単語を間違えて連続しているのを見つける
    - <https://github.com/textlint-ja/textlint-rule-ja-no-successive-word>
  - 不自然なアルファベットを検知
    - <https://github.com/textlint-ja/textlint-rule-ja-unnatural-alphabet>
  - 弱い表現の利用を禁止する
    - <https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase>
