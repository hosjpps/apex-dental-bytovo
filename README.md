# Лендинг стоматологии АПЕКС

Демонстрационный одностраничный сайт стоматологической клиники (Южное Бутово, Москва): запись на приём, услуги, цены, врачи, отзывы. Собирается в статику и не требует сервера.

## Возможности

- Главная страница с секциями: герой, услуги, врачи, гарантии, цены, галерея, отзывы, FAQ, контакты
- Форма записи на приём с валидацией (имя, телефон, услуга, удобное время) на `react-hook-form` + `zod` и согласием на обработку ПД
- Отдельные страницы по направлениям: имплантация, ортодонтия, ортопедия, терапия, хирургия, детская стоматология
- Контент вынесен в типизированные файлы (`content/`): клиника, врачи, цены, услуги, отзывы, FAQ — правки без захода в разметку
- SEO из коробки: `sitemap.ts`, `robots.ts`, OpenGraph-картинка, разметка Schema.org (JSON-LD), страницы политики конфиденциальности и согласия на обработку ПД
- Адаптивная вёрстка, тёмная/светлая тема (`next-themes`), мобильная закреплённая кнопка записи, баннер cookie
- Скрипты сборки данных: парсинг прайса и отзывов в `content/*`, оптимизация изображений через `sharp`
- Smoke-тесты на Playwright

## Стек

- Next.js 16 (App Router, статический экспорт `output: "export"`)
- React 19, TypeScript
- Tailwind CSS v4, shadcn/ui, Base UI, lucide-react
- react-hook-form, zod, sonner
- Playwright (smoke-тесты), sharp, tsx
- pnpm

## Структура

```
app/                 страницы (главная, /uslugi/*, политики), sitemap, robots, opengraph
components/
  sections/          секции главной (Hero, Services, Prices, Reviews, FAQ, ...)
  forms/             форма и диалог записи
  layout/            Navbar, Footer, CookieBanner, MobileStickyCTA
  ui/                компоненты shadcn/ui
content/             данные сайта (клиника, врачи, цены, услуги, отзывы, FAQ)
lib/                 утилиты
scripts/             парсинг прайса/отзывов, оптимизация изображений
tests/               smoke-тесты Playwright
```

## Запуск

```bash
pnpm install
pnpm dev          # дев-сервер на http://localhost:3000
```

Сборка статики и проверки:

```bash
pnpm build        # статический экспорт
pnpm typecheck    # проверка типов
pnpm lint         # ESLint
pnpm test:smoke   # smoke-тесты Playwright
```

Вспомогательные скрипты (обновление данных из исходников):

```bash
pnpm scrape:prices      # пересборка content/prices.ts
pnpm scrape:reviews     # пересборка content/reviews.ts
pnpm optimize:images    # оптимизация изображений в public/
```
