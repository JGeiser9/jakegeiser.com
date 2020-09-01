# Personal Portfolio - V2

This repository is the personal portfolio of Jake Geiser and showcases his professional work, side project, and other tools

### Previous Version

[Version 1](https://github.com/JGeiser9/myPortfolio)

### Live Demo

[jakegeiser.com](https://jakegeiser.com)

# Project Structure

```
📦src
 ┣ 📂components
 ┃ ┣ 📂icons
 ┃ ┃ ┗ Logo.js
 ┃ ┣ 📂navigation
 ┃ ┃ ┗ Navbar.js
 ┃ ┣ 📂sections
 ┃ ┃ ┣ Hero.js
 ┃ ┃ ┣ Projects.js
 ┃ ┃ ┗ Work.js
 ┃ ┣ 📂svg
 ┃ ┃ ┣ Developer.js
 ┃ ┃ ┣ Wolf.js
 ┃ ┃ ┣ developer.svg
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ wolf.svg
 ┃ ┗ App.js
 ┣ 📂hooks
 ┃ ┗ useWindowSize.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ serviceWorker.js
 ┗ setupTests.js
```

# Tools Used

- React
- Material UI
- SVGR CLI
- ESLint
- Prettier
- Husky
- Lint Staged
- Github Pages

# Getting Started

### Clone (HTTPS)

```
git clone https://github.com/JGeiser9/jakegeiser.com.git
```

### Install (NPM)

```
npm install
```

### Start

```
npm start
```

# SVG Images

Manually converting svg images to React components is a tedious process. This project implements a cli tool to convert them for you.

### Adding New Images

Add the `.svg` file to to the `components/svg` folder.

### Converting Images

Running the following command will look for all `.svg` files and automatically convert them to React components and export them from `components/svg/index.js`

```
npm run convert
```
