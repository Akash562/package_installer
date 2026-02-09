# 🚀 RN Package Installer

An interactive CLI tool to quickly install commonly used **React** and **React Native** packages with ease.

No more remembering package names or running multiple install commands — just select and install 🎯

## Disclaimer

This tool does not claim ownership of any installed packages.  
All third-party packages belong to their respective authors and licenses.

---

## ✨ Features

- ✅ Interactive package selection (checkbox UI)
- ✅ Auto-detects `npm` and `yarn`
- ✅ Lets you choose package manager if both exist
- ✅ Works with React & React Native projects
- ✅ Simple, fast, and developer-friendly

---

## 📦 Installation

You can use the tool **without installing globally** (recommended):

Run the command inside your React or React Native project:

```bash
npx @npm_akash/rn-package-installer
```

## You’ll see an interactive flow like this:

🚀 RN Package Installer
```
? Select packages to install (Use space to select)
❯ ◯ axios
  ◯ moment
  ◯ react-native-screens

? Both npm and yarn detected. Choose one:
❯ npm (default)
  yarn

Installing packages using npm...
✔ Done!
```

## 🧠 How it works

Detects your project environment

- Shows a list of commonly used packages
- Lets you select multiple packages
- Detects npm / yarn
- Installs selected packages automatically

## 📁 Supported Package Managers

- ✅ npm
- ✅ yarn


## ⚠️ Important Notes

The CLI does NOT auto-run on npm install

This is intentional and follows npm best practices

Always run it using:

npx @npm_akash/rn-package-installer



## 📜 No-Claim Policy

`@npm_akash/rn-package-installer` is an independent utility tool.

- This project does **not own, control, or maintain** any third-party packages it installs.
- All trademarks, package names, and copyrights belong to their respective owners.
- The CLI acts only as an **installer and helper**, executing the official package manager commands (`npm` / `yarn`).

Use of any installed package is governed by the **original package license and terms**.




## 📄 License

MIT License © Akash


## 🤝 Contributing

Pull requests are welcome!
If you have ideas for new features or packages, feel free to open an issue.


## ⭐ Support

If you find this useful, please ⭐ the repo and share it with other developers!