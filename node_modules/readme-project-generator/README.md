<h1 align="center">Welcome to readme-project-generator 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/readme-project-generator.svg?orange=blue" />
  <a href="https://www.npmjs.com/package/readme-project-generator">
    <img alt="downloads" src="https://img.shields.io/npm/dm/readme-project-generator.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/estevam5s/readme-project-generator/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://codecov.io/gh/estevam5s/readme-project-generator">
    <img src="https://codecov.io/gh/estevam5s/readme-project-generator/branch/master/graph/badge.svg" />
  </a>
  <a href="https://github.com/frinyvonnick/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
</p>

> CLI that generates beautiful README.md files.<br /> `readme-project-generator` will suggest you default answers by reading your `package.json` and `git` configuration.

## ✨ Demo

`readme-project-generator` is able to read your environment (package.json, git config...) to suggest you default answers during the `README.md` creation process:

Example of `package.json` with good meta data:

```json
// The package.json is not required to run readme-project-generator
{
  "name": "readme-project-generator",
  "version": "1.0.0",
  "description": "CLI that generates beautiful README.md files.",
  "author": "Estevam Souza",
  "license": "MIT",
  "homepage": "https://github.com/estevam5s/readme-project-generator#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/estevam5s/readme-project-generator.git"
  },
  "bugs": {
    "url": "https://github.com/estevam5s/readme-project-generator/issues"
  },
  "engines": {
    "npm": ">=5.5.0",
    "node": ">=9.3.0"
  }
}
```

## 🚀 Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since npm `5.2.0`)

Just run the following command at the root of your project and answer questions:

```sh
npx readme-project-generator
```

Or use default values for all questions (`-y`):

```sh
npx readme-project-generator -y
```

Use your own `ejs` README template (`-p`):

```sh
npx readme-project-generator -p path/to/my/own/template.md
```

You can find [ejs README template examples here](https://github.com/estevam5s/readme-md-generator/tree/master/templates).

## Code Contributors

## Financial Contributors

### Individuals

### Organizations

## 🤝 Contributing

## Author

👤 **Estevam Souza**

- Github: [@estevam5s](https://github.com/estevam5s)

## Show your support

Please ⭐️ this repository if this project helped you!

## 📝 License

Copyright © 2019 [Estevam Souza](https://github.com/estevam5s).<br />
This project is [MIT](https://github.com/estevam5s/readme-md-generator/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/estevam5s/readme-md-generator)_
