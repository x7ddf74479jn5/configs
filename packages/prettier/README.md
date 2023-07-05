# @x7ddf74479jn5/prettier-config-x7ddf74479jn5

x7ddf744979j5 の prettier プリセット。

## インストール

```bash
pnpm add -D @x7ddf74479jn5/prettier-config-x7ddf74479jn5 prettier
```

## 使い方

`package.json`内に設定する:

```json
{
  "name": "your-app",
  "version": "0.0.1",
  "prettier": "@x7ddf74479jn5/prettier-config-x7ddf74479jn5"
}
```

`.prettierrc.json`内に設定する:

```json
"@x7ddf74479jn5/prettier-config-x7ddf74479jn5"
```

`.prettierrc.js`内に設定する:

```js
module.exports = {
  ...require('@x7ddf74479jn5/prettier-config-x7ddf74479jn5'),
  // shard configurationをオーバーライドする
  semi: false,
};
```
