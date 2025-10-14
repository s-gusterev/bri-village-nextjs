# bri-village-nextjs

Сайт «BRI Village» на Next.js (App Router) с TypeScript, статической сборкой (export) и деплоем на GitHub Pages. В проекте есть главная страница, разделы «О нас», «Номера», «Услуги», «Контакты», формы бронирования, слайдеры/галереи и карта Яндекс.

**Основные возможности**

- Статический экспорт (`out/`) для размещения на GitHub Pages.
- Компоненты UI: слайдеры, карусели, галереи, пагинация, кнопки и т. д.
- Формы на `react-hook-form` с масками (`react-imask`) и датами (`react-datepicker`).
- Карта на `@pbe/react-yandex-maps` с пином локации.
- Оптимизация изображений для статики (`images.unoptimized: true`).

**Стек**

- Next.js 15 (App Router), TypeScript
- React 18
- ESLint (flat config) + Prettier
- Swiper, Framer Motion, date-fns, react-select и др.

## Требования

- Node.js 20.x (см. GitHub Actions), npm 10+
- ОС: macOS/Windows/Linux

## Установка и запуск

- Установка зависимостей: `npm install`
- Запуск дев-сервера: `npm run dev` (<http://localhost:3000>)
- Линтинг: `npm run lint`
- Продакшн-сборка: `npm run build`
- Локальный запуск сборки: `npm start`

## Конфигурация

- Next.js: `next.config.ts`
  - `output: 'export'` — статический экспорт в `out/`.
  - `images.unoptimized: true` — отключена серверная оптимизация изображений для статики.
  - `basePath: '/bri-village-nextjs'` — базовый путь (важно для GitHub Pages).
- Алиасы путей TypeScript: `@/*` указывает на `./src/*` (см. `tsconfig.json`).
- ESLint/Prettier: flat-конфиг в `eslint.config.mjs` (правило `prettier/prettier` с `endOfLine: 'auto'`, полезно для Windows/CRLF).

## Структура проекта

- `src/app` — глобальный layout, стили App Router.
- `src/pages` — страницы и их UI/конфиг: `home`, `about`, `rooms`, `services`, `contacts`.
- `src/shared` — переиспользуемые компоненты, хуки, стили и модели данных.
- `src/widgets` — сложные композиционные блоки: шапка/футер, баннер, отзывы, форма бронирования и т. д.
- `public` — статические ресурсы.
- `.github/workflows/nextjs.yml` — CI/CD для GitHub Pages.

## Маршруты

- `/` — главная
- `/about` — о нас
- `/rooms` — номера
- `/services` — услуги
- `/contacts` — контакты (с картой Яндекс)

## Переменные окружения

В `src/pages/contacts/ui/map.tsx` используется ключ API Яндекс.Карт. Рекомендуется вынести его в переменную окружения:

- `NEXT_PUBLIC_YMAPS_API_KEY` — публичный ключ для Яндекс.Карт

Пример использования:

```tsx
<YMaps query={{ apikey: process.env.NEXT_PUBLIC_YMAPS_API_KEY }}>
  {/* ... */}
</YMaps>
```

Создайте файл `.env.local` и добавьте:

```
NEXT_PUBLIC_YMAPS_API_KEY=ваш_ключ
```

## Деплой (GitHub Pages)

- Репозиторий настроен на статический экспорт и публикацию артефакта `out/`.
- Workflow: `.github/workflows/nextjs.yml` — пуш в ветку `main` триггерит сборку и деплой.
- Важно: `basePath` в `next.config.ts` должен соответствовать имени репозитория (`/bri-village-nextjs`). Если меняете имя репо/хостинг-путь — обновите `basePath`.

## Заметки по разработке

- Совместимость React: проект использует React 18 для корректной работы `@pbe/react-yandex-maps`.
- Форматирование строк: на Windows включён `endOfLine: 'auto'` (см. `eslint.config.mjs`). Если линтер ругается на переводы строк — проверьте CRLF/ LF.
- Путь-алиасы `@/*` работают в TypeScript и Next.js — используйте импорт из `@/...` вместо относительных лестниц.

## Полезные команды

- `npm run dev` — запуск проекта в dev-режиме
- `npm run build` — продакшн-сборка с экспортом в `out/`
- `npm start` — запуск собранного проекта
- `npm run lint` — линтинг проекта
