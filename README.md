# landing-keepsake-vite

Лендінг Keepsake (lab-07, завдання 4), перенесений на Vite + Pug + SCSS + PostCSS.

## Запуск

```bash
npm install
npm run images   # генерація AVIF/WebP/JPEG з images-src/ у src/assets/images/
npm run dev      # режим розробки
npm run build    # збірка у dist/
npm run preview  # перегляд збірки
npm run lint     # Stylelint + Prettier --check
npm run format   # Prettier --write
```

## Структура

- `src/pages` — сторінки Pug, `src/layouts` — базовий макет
- `src/components` — header, footer, секції; `src/mixins` — Pug-міксини; `src/data` — дані
- `src/styles` — SCSS (abstracts, base, layout, components), точка входу `main.scss`
- `images-src` — оригінали зображень, `scripts/images.js` — оптимізація (sharp)

## Якість коду

Prettier + Stylelint, pre-commit хук (husky + lint-staged).
