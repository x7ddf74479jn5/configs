# @x7ddf74479jn5/stylelint-config

## インストール

```sh
pnpm add -D @x7ddf74479jn5/stylelint-config
```

## 使い方

`.stylelintrc.json`

```json
{
  "extends": ["@x7ddf74479jn5/stylelint-config"]
}
```

`package.json`

```json
  "scripts": {
    "lint": "next lint --ignore-path .gitignore",
    "lint:fix": "next lint --ignore-path .gitignore --fix",
    "lint:style": "stylelint --ignore-path .gitignore './**/*.{css,scss}'",
    "lint:style:fix": "stylelint --ignore-path .gitignore --fix './**/*.{css,scss}'",
    "format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css,scss}'",
  },
```

`.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  //StyleLintはcssとscssファイルのみ
  "stylelint.validate": ["css", "scss"],  
  // VS Codeデフォルトのフォーマットは無効
  "css.validate": false,
  "scss.validate": false,
  // css, scssファイルはPrettierによるフォーマットを回避
  "[css]": {
    "editor.formatOnSave": false
  },
  "[scss]": {
    "editor.formatOnSave": false
  }
}
```

## 参考

- [stylelint/stylelint: A mighty CSS linter that helps you avoid errors and enforce conventions\.](https://github.com/stylelint/stylelint)
- [Home \| Stylelint](https://stylelint.io/)
