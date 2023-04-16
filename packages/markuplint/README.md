# @x7ddf74479jn5/markuplint-config

## インストール

```shell
pnpm dlx markuplint --init
pnpm add -D @markuplint/react-spec @markuplint/jsx-parser
```

## 使い方

`package.json`

```json
"markuplint": "markuplint \"./src/**/*.{jsx,tsx}\""
```

[Rules \| Markuplint](https://markuplint.dev/ja/docs/rules)

Next.jsでemotionを使いたい場合、css属性が必要になるので以下のルールを追記など。

`.markuplintrc.js`

```js
// ...
  rules: {
    "invalid-attr": {
      "options": {
        "ignoreAttrNamePrefix": "css"
      }
    },
  },
```

[ガイド \| Markuplint](https://markuplint.dev/ja/docs/guides)
