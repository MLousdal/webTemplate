# 🌐 webTemplate
## 👓 Overview

webTemplate serves as a spring board to use when diving in to a new project 🏊
- Setup with parcel for compiling 
- SASS structure in place for easy development
- Pre styled versions of the most common html tags
- modules available with html, a partial scss file and js
- It's a starting point, not a framework

## 💻 Browser support

webTemplate utilizes [Autoprefixer](https://github.com/postcss/autoprefixer) as part of Parcel, and thus ensures that most styles are as cross compatible as possible. All styles are also resat with [Eric Meyer's reset](https://meyerweb.com/eric/tools/css/reset/). For best compatibility, these browsers are recommended:

- Chrome latest
- Firefox latest
- Opera latest
- Safari latest

## 🗄️ Files included

When opening the repo you will find an almost clean index.html, and a showcase.html for all the styled elements. The scss folder is organized according to the principles described in [SMACSS](http://smacss.com/).
```
webTemplate/src/
├── index.html
├── showcase.html
└── assets/
    ├── components
    ├── images
    ├── js
    └── scss
        ├── base
        ├── layout
        ├── mixins
        ├── module
        ├── themes
        └── main.scss
```

## ⚙️ Compiling

```bash
🚀 Initialize node 
$ npm i

👨‍💻 Development
$ npm run dev

📯 Distribution
$ npm run build 
```

## 🎫 License

All parts of webTemplate are free to tinkering under the [open-source MIT license](https://github.com/MLousdal/webTemplate/blob/main/LICENSE).

## 🙏 Acknowledgement

webTemplate was created by [Mads Lousdal](https://github.com/MLousdal), with inspiration from both the [Skeleton project](https://github.com/dhg/Skeleton), and [spectre.css](https://github.com/picturepan2/spectre)