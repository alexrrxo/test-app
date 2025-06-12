# Shopify App — кастомне рішення на Next.js 14 + Express

Цей проєкт — це кастомний Shopify застосунок з використанням:

- **Next.js 14.1.3 (App Router)** для фронтенду
- **styled-components** для стилів
- **Shopify GraphQL Admin API** для отримання даних
- **Cloudflare Tunnel** для локального доступу через HTTPS
- **.env файлів** для збереження конфіденційних даних

---

## 🔧 Функціонал

- Сторінка товару з галереєю Swiper
- Вибір кольору, розміру, кнопка додавання в кошик
- Відображення метафілів (dropdown-и)
- Підключення до Shopify API через OAuth
- Адаптивний інтерфейс
- Готовий до продакшену (`next build`)

---

## 🚀 Як запустити

### 1. Встановити залежності

```
npm install
```

### 2. Налаштувати .env

У корені проєкту має бути файл `.env` (або `.env.local`) із такими змінними:

```ini
SHOPIFY_API_KEY=...
SHOPIFY_API_SECRET=...
SCOPES=read_products,write_products
SHOP=your-dev-store.myshopify.com
HOST=https://your-tunnel.trycloudflare.com
```

⚠️ `HOST` — публічний URL, який видає Cloudflare Tunnel

### 3. Запустити розробку

```
npm run dev:frontend
```

Запускає фронтенд (`web/frontend`). Потрібно також окремо запустити тунель:

```
npx cloudflared tunnel --url http://localhost:3000
```

---

## 📦 Команди

| Команда                  | Опис                       |
| ------------------------ | -------------------------- |
| `npm run dev:frontend`   | Запуск фронтенду (Next.js) |
| `npm run build:frontend` | Збірка фронтенду           |
| `npm run start:frontend` | Запуск продакшен-версії    |

---

## 🧠 Налаштування в Shopify Partners

- **App URL**: `https://your-tunnel.trycloudflare.com`
- **Redirect URL**: `https://your-tunnel.trycloudflare.com/api/auth/callback`

---

## 📁 Структура проєкту

- `web/frontend/` — фронтенд на Next.js
- `server/` — (необов’язково) бекенд для OAuth
- `.env` — конфігурація токенів Shopify

---

## 🛠 Технології

- Next.js 14
- Shopify Admin API
- styled-components
- Cloudflare Tunnel

---

## 📝 Ліцензія

MIT — тільки для особистого або навчального використання.

---

### 🔥 `scripts` (оновлений `package.json`):

```json
"scripts": {
  "dev:frontend": "next dev web/frontend -p 3000",
  "build:frontend": "cross-env NODE_ENV=production next build web/frontend",
  "start:frontend": "cross-env NODE_ENV=production next start web/frontend",
}
```
