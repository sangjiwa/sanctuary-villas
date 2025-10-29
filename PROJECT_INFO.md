# Sanctuary Villas - Информация о проекте

## Что было реализовано

Полностью готовый лендинг для премиальных вилл с современным стеком технологий.

### Технологический стек

- **Next.js 15** (App Router) - React фреймворк
- **TypeScript** - строгая типизация
- **Tailwind CSS** - utility-first CSS фреймворк
- **Axios** - HTTP клиент
- **TanStack Query (React Query)** - управление серверным состоянием
- **Swiper** - библиотека для слайдеров
- **Framer Motion** - анимации

## Структура проекта

```
sanctuary_villas/
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Корневой layout с providers
│   ├── page.tsx                     # Главная страница
│   ├── providers.tsx                # React Query provider
│   └── globals.css                  # Глобальные стили + Tailwind
│
├── components/
│   ├── ui/                          # UI компоненты
│   │   └── VillaSlider.tsx         # Слайдер на Swiper
│   ├── sections/                    # Секции лендинга
│   │   ├── HeroSection.tsx         # Hero секция с анимациями
│   │   ├── FeaturesSection.tsx     # Секция преимуществ
│   │   ├── VillasSection.tsx       # Карточки вилл
│   │   └── ContactSection.tsx      # Форма обратной связи
│   └── shared/                      # Общие компоненты (пусто)
│
├── lib/
│   ├── api/                         # API слой
│   │   ├── axios.ts                # Настроенный axios instance
│   │   └── villas.ts               # API endpoints для вилл
│   ├── hooks/                       # React хуки
│   │   └── useVillas.ts            # React Query хук для вилл
│   └── utils/                       # Утилиты (пусто)
│
├── types/
│   └── index.ts                     # TypeScript типы (Villa, ApiResponse)
│
├── public/                          # Статические файлы
│
├── Конфигурационные файлы
├── package.json                     # Зависимости и скрипты
├── tsconfig.json                    # TypeScript конфигурация
├── tailwind.config.ts               # Tailwind конфигурация
├── postcss.config.mjs               # PostCSS конфигурация
├── next.config.js                   # Next.js конфигурация
├── .eslintrc.json                   # ESLint конфигурация
├── .gitignore                       # Git ignore
└── .env.local.example               # Пример env переменных

Документация
├── README.md                        # Основная документация
├── USAGE_EXAMPLES.md                # Примеры использования
└── PROJECT_INFO.md                  # Этот файл
```

## Реализованные компоненты

### 1. Hero Section (HeroSection.tsx)
- Приветственная секция с анимированным текстом
- Градиентный фон
- Кнопка с hover эффектом
- Анимации появления через Framer Motion

### 2. Villa Slider (VillaSlider.tsx)
- Полноэкранный слайдер на Swiper
- Поддержка эффектов (slide, fade)
- Автопрокрутка
- Навигация и пагинация
- Оверлей с текстом
- Адаптивная высота

### 3. Features Section (FeaturesSection.tsx)
- Сетка из 4 карточек преимуществ
- Анимация при скролле (useInView)
- Stagger эффект (последовательное появление)
- Hover эффекты на карточках

### 4. Villas Section (VillasSection.tsx)
- Сетка с карточками вилл
- Изображения через next/image
- Информация о цене и характеристиках
- Анимированные кнопки
- Адаптивная сетка (1/2/3 колонки)

### 5. Contact Section (ContactSection.tsx)
- Форма обратной связи
- Валидация полей
- Анимация при скролле
- Обработка submit
- Стилизованные input/textarea с focus состояниями

### 6. Footer
- Контактная информация
- Навигационные ссылки
- Copyright

## API интеграция

### Axios Setup
- Настроенный base URL через env переменные
- Request/Response interceptors
- Обработка ошибок
- TypeScript типизация

### React Query
- QueryClient с оптимальными настройками
- Кеширование запросов (1 минута)
- Автоматическая ре-валидация
- Готовые хуки (useVillas, useVilla)

### Пример структуры API
```typescript
interface Villa {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}
```

## Анимации (Framer Motion)

### Реализованные эффекты:
1. **Fade in** - плавное появление при загрузке
2. **Slide up** - появление снизу
3. **Scroll animations** - анимация при скролле в viewport
4. **Stagger** - последовательное появление элементов
5. **Hover effects** - увеличение и поднятие при наведении
6. **Button interactions** - whileHover и whileTap

### Оптимизация:
- `once: true` - анимация срабатывает один раз
- `margin: "-100px"` - срабатывание за 100px до viewport

## Tailwind CSS

### Использованные возможности:
- Utility классы для быстрой разработки
- Адаптивные брейкпоинты (sm, md, lg, xl)
- Градиенты (bg-gradient-to-br)
- Hover и focus состояния
- Transitions
- Grid и Flexbox
- Кастомные цвета через CSS переменные

## TypeScript

### Типизация:
- Все компоненты типизированы
- Props интерфейсы для всех компонентов
- API типы для запросов/ответов
- Строгий режим TypeScript

## Особенности реализации

### Performance
- Static Generation (SSG) для главной страницы
- Оптимизация изображений через next/image
- Lazy loading компонентов
- Code splitting автоматически через Next.js

### SEO
- Metadata в layout.tsx
- Семантическая HTML разметка
- Alt теги для изображений
- Оптимизированный HTML вывод

### Accessibility
- Семантические теги (section, nav, footer)
- Labels для форм
- Контрастные цвета
- Фокус состояния для интерактивных элементов

### Responsiveness
- Mobile-first подход
- Адаптивные сетки
- Адаптивная типографика
- Адаптивные отступы

## Готово к использованию

### Что можно делать сразу:
1. Запустить проект (`npm run dev`)
2. Изменить контент и стили
3. Подключить реальный API (изменить NEXT_PUBLIC_API_URL)
4. Добавить новые секции
5. Кастомизировать цвета в Tailwind
6. Деплоить на Vercel/Netlify

### Что нужно добавить для продакшена:
1. Реальный API backend
2. Формы с валидацией (React Hook Form + Zod)
3. Больше страниц (детали виллы, about, контакты)
4. SEO метаданные для каждой страницы
5. Google Analytics
6. Cookie consent
7. Мультиязычность (опционально)
8. Система бронирования

## Команды для работы

```bash
# Разработка
npm run dev          # Запуск dev сервера (http://localhost:3000)

# Продакшн
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшн сервера

# Линтинг
npm run lint         # Проверка кода ESLint
```

## Переменные окружения

Создайте `.env.local` на основе `.env.local.example`:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Документация

- `README.md` - основная документация проекта
- `USAGE_EXAMPLES.md` - примеры использования API, анимаций, стилей
- `PROJECT_INFO.md` - этот файл, подробная информация о проекте

## Следующие шаги

1. **Настроить API** - указать реальный URL API в .env.local
2. **Добавить контент** - заменить placeholder изображения и тексты
3. **Кастомизировать дизайн** - изменить цвета, шрифты, отступы
4. **Расширить функционал** - добавить новые страницы и компоненты
5. **Деплой** - развернуть на Vercel или другом хостинге

## Полезные ссылки

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Swiper](https://swiperjs.com/react)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

Проект готов к использованию и дальнейшей разработке! 🚀
