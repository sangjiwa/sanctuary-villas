# Sanctuary Villas - Landing Page

Современный лендинг для премиальных вилл, построенный на Next.js 15 с использованием современных технологий.

## Технологии

- **Next.js 15** (App Router) - React фреймворк с SSR/SSG
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Axios** - HTTP клиент для API запросов
- **TanStack Query (React Query)** - управление состоянием сервера
- **Swiper** - современный слайдер
- **Framer Motion** - анимации

## Структура проекта

```
sanctuary_villas/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Главный layout
│   ├── page.tsx             # Главная страница
│   ├── providers.tsx        # React Query provider
│   └── globals.css          # Глобальные стили
├── components/              # Компоненты
│   ├── ui/                  # UI компоненты
│   │   └── VillaSlider.tsx # Слайдер на базе Swiper
│   ├── sections/            # Секции лендинга
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── VillasSection.tsx
│   └── shared/              # Общие компоненты
├── lib/                     # Библиотеки и утилиты
│   ├── api/                 # API клиенты
│   │   ├── axios.ts        # Настроенный axios instance
│   │   └── villas.ts       # API запросы для вилл
│   ├── hooks/               # Custom React hooks
│   │   └── useVillas.ts    # Hook для работы с виллами
│   └── utils/               # Утилиты
├── types/                   # TypeScript типы
│   └── index.ts
└── public/                  # Статические файлы
```

## Установка и запуск

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` на основе `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Отредактируйте `.env.local` и укажите URL вашего API:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

### 3. Запуск dev сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 4. Сборка для продакшна

```bash
npm run build
npm run start
```

## Основные возможности

### 1. Слайдер (Swiper)

Компонент `VillaSlider` находится в `components/ui/VillaSlider.tsx`:

```tsx
<VillaSlider
  slides={slides}
  autoplay
  effect="fade"
/>
```

### 2. Анимации (Framer Motion)

Все секции используют Framer Motion для плавных анимаций при появлении:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Контент
</motion.div>
```

### 3. API интеграция (Axios + React Query)

Пример использования:

```tsx
import { useVillas } from "@/lib/hooks/useVillas";

function Component() {
  const { data, isLoading, error } = useVillas();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка</div>;

  return <div>{data?.data.map(...)}</div>;
}
```

### 4. Настройка API

Базовая конфигурация Axios находится в `lib/api/axios.ts`. Здесь можно:
- Добавить interceptors для токенов
- Настроить обработку ошибок
- Изменить базовый URL

## Кастомизация

### Цвета

Цвета настраиваются в `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: "#4F46E5", // Indigo
      // добавьте свои цвета
    },
  },
}
```

### Шрифты

Шрифты можно изменить в `app/layout.tsx` используя `next/font`.

### Анимации

Параметры анимаций настраиваются в компонентах секций в папке `components/sections/`.

## API Endpoints

Примеры endpoints в `lib/api/villas.ts`:

- `GET /villas` - получить все виллы
- `GET /villas/:id` - получить виллу по ID
- `POST /villas` - создать виллу

Адаптируйте под ваш API.

## Полезные команды

```bash
npm run dev      # Запуск dev сервера
npm run build    # Сборка для продакшна
npm run start    # Запуск продакшн сервера
npm run lint     # Проверка кода
```

## Deployment

### Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Environment Variables**: Prepare your Boom API credentials

### Deploy to Vercel

#### 1. Import Project

- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Vercel will automatically detect Next.js

#### 2. Configure Environment Variables

Add the following environment variables in Vercel dashboard:

```
BOOM_CLIENT_ID=your_actual_client_id
BOOM_CLIENT_SECRET=your_actual_client_secret
BOOM_API_BASE_URL=https://app.boomnow.com/open_api/v1
```

#### 3. Deploy

- Click "Deploy"
- Wait for the build to complete
- Your site will be live at `your-project.vercel.app`

#### 4. Add Custom Domain

- Go to Project Settings → Domains
- Add your custom domain (e.g., `sanctuaryvillas.com`)
- Follow DNS configuration instructions
- SSL certificate will be automatically provisioned

### Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Дальнейшее развитие

Рекомендации для расширения проекта:

1. **Формы** - добавить React Hook Form для форм бронирования
2. **Валидация** - добавить Zod для валидации данных
3. **UI компоненты** - добавить shadcn/ui для готовых компонентов
4. **Мультиязычность** - добавить next-intl для переводов
5. **SEO** - настроить метаданные в каждой странице
6. **Изображения** - оптимизировать через next/image
7. **Analytics** - добавить Google Analytics или Vercel Analytics

## Лицензия

MIT
