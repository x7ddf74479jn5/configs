# @x7ddf74479jn5/renovate-config

Renovate [共有 preset](https://docs.renovatebot.com/config-presets/) です。

## 使い方

`renovate.json`に下記を記載する

以下のファイルを `renovate.json` という名前でリポジトリ直下に置くと、

`x7ddf74479jn5/renovate-config` は一般的なプロジェクト向けの preset である [`default.json5`](https://github.com/x7ddf74479jn5/configs/packages/renovate/blob/main/default.json5) と、その他いくつかの optional な preset を提供しています。基本的に `default.json5` を extends して、必要に応じて optional な preset を extends するような運用を想定しています。

`default.json5` を extends するには、ご利用のプロジェクトのルートに `renovate.json` を作成し、以下のように記述します。

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>x7ddf74479jn5/configs//packages/renovate:default.json5"]
}
```

続けて optional な preset を extends するには、`renovate.json` を以下のように記述します。

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>x7ddf74479jn5/configs//packages/renovate:default.json5",
    "github>x7ddf74479jn5/configs//packages/renovate:+lib.json5"
  ]
}
```

## 拡張例

[examples](https://github.com/x7ddf74479jn5/configs/tree/main/packages/renovate/examples)に拡張例を載せています。

## Optional presets

### [`+lib`](https://github.com/x7ddf74479jn5/configs/blob/main/packages/renovate/+lib.json5)

ライブラリ向けの preset です。`@x7ddf74479jn5/renovate-config` はデフォルトでアプリケーション向けに設定がカスタマイズされているため、ライブラリで利用する場合はこの preset を継承するようにしてください。

### [`+react`](https://github.com/x7ddf74479jn5/configs/blob/main/packages/renovate/+react.json5)

React アプリケーション向けの preset です。React 関連のライブラリの更新をひとまとめにします。

## LICENSE

MIT
