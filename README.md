# Bassam Khafagy · Mobile Engineer Portfolio

Personal portfolio of Bassam Khafagy, Mobile Engineer working on native Android (Kotlin, Jetpack Compose) and React Native (TypeScript, Expo).

**Live:** https://bassam-khafagy127.github.io/portfolio/

## Tech

- Semantic HTML, a single page (`index.html`)
- Tailwind CSS v4, precompiled to a static `styles/main.css` (no runtime CDN)
- Vanilla JavaScript (`scripts/main.js`) for the dark/light theme toggle
- Inter via Google Fonts, inline SVG icons
- Open Graph/Twitter cards and JSON-LD `Person` schema

No framework and no build step on deploy. GitHub Pages serves the files as they are.

## Featured projects

- **TaskedIn**: all-in-one business workspace. 10K+ downloads, 4.6★ on Google Play. Sole mobile engineer for the past year, leading a React Native rewrite for iOS and a Jetpack Compose migration.
- **Sanad Business**: merchant payments app for Saudi Arabia (Mada, Sunmi printing), used by ~300 merchants.
- **Rahtuk**: home-services Android app for Saudi Arabia, built from scratch.
- **Meta Sight**: vision assistant for visually impaired users (graduation project, team leader).

## Run locally

```bash
git clone https://github.com/bassam-khafagy127/portfolio.git
cd portfolio
```

Open `index.html` in a browser, or serve the folder with any static server (for example `npx serve .`).

## Editing styles

Styles come from `styles/tailwind.input.css` and the Tailwind classes in `index.html`. After changing either, regenerate the CSS:

```bash
npm install
npm run build:css
```

Commit the updated `styles/main.css`. `node_modules/` is git-ignored.

## License

MIT. See [LICENSE](LICENSE).

## Contact

- Email: bassamkhafgy127@gmail.com
- LinkedIn: [in/bassamkhafagy](https://www.linkedin.com/in/bassamkhafagy/)
- GitHub: [@bassam-khafagy127](https://github.com/bassam-khafagy127)
