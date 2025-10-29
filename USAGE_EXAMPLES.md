# Примеры использования

## API интеграция

### Использование готовых хуков

```tsx
"use client";

import { useVillas } from "@/lib/hooks/useVillas";

export default function VillasPage() {
  const { data, isLoading, error, refetch } = useVillas();

  if (isLoading) return <div>Загрузка вилл...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Обновить</button>
      {data?.data.map(villa => (
        <div key={villa.id}>{villa.title}</div>
      ))}
    </div>
  );
}
```

### Создание своих API endpoints

```tsx
// lib/api/bookings.ts
import { api } from "./axios";

export interface Booking {
  id: number;
  villaId: number;
  startDate: string;
  endDate: string;
  guestName: string;
}

export const bookingsApi = {
  create: async (booking: Omit<Booking, "id">) => {
    const response = await api.post("/bookings", booking);
    return response.data;
  },

  getByVilla: async (villaId: number) => {
    const response = await api.get(`/bookings/villa/${villaId}`);
    return response.data;
  },
};
```

### Создание своих хуков

```tsx
// lib/hooks/useBookings.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingsApi } from "../api/bookings";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookingsApi.create,
    onSuccess: () => {
      // Инвалидируем кеш, чтобы обновить данные
      queryClient.invalidateQueries({ queryKey: ["villas"] });
    },
  });
};

// Использование в компоненте:
function BookingForm() {
  const createBooking = useCreateBooking();

  const handleSubmit = (data) => {
    createBooking.mutate(data, {
      onSuccess: () => alert("Бронирование создано!"),
      onError: (error) => alert(`Ошибка: ${error.message}`),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* форма */}
      {createBooking.isPending && <div>Отправка...</div>}
    </form>
  );
}
```

## Swiper / Слайдер

### Базовое использование

```tsx
import VillaSlider from "@/components/ui/VillaSlider";

const slides = [
  {
    id: 1,
    image: "/images/villa1.jpg",
    title: "Вилла с видом на океан",
    description: "Роскошная вилла на берегу моря",
  },
];

<VillaSlider slides={slides} autoplay effect="fade" />
```

### Кастомизация слайдера

```tsx
// Создайте свой компонент на базе Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

function CustomSlider({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Thumbs]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt={`Slide ${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
```

## Framer Motion анимации

### Анимация при появлении

```tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      Контент карточки
    </motion.div>
  );
}
```

### Анимация при скролле (появление в viewport)

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      Появится при скролле
    </motion.div>
  );
}
```

### Stagger анимация (последовательное появление)

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Задержка между элементами
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.div key={i} variants={item}>
      {i}
    </motion.div>
  ))}
</motion.div>
```

### Hover анимация

```tsx
<motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Наведи на меня
</motion.button>
```

### Анимация маршрутизации

```tsx
// app/layout.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

## Tailwind CSS

### Адаптивный дизайн

```tsx
<div className="
  w-full           // mobile
  md:w-1/2         // tablet
  lg:w-1/3         // desktop
  xl:w-1/4         // large desktop
">
  Адаптивный блок
</div>
```

### Кастомные цвета

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
    },
  },
};
```

```tsx
<div className="bg-primary-500 text-primary-50">
  Кастомные цвета
</div>
```

### Переиспользуемые стили с @apply

```css
/* globals.css */
@layer components {
  .btn-primary {
    @apply bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors;
  }
}
```

```tsx
<button className="btn-primary">Кнопка</button>
```

## TypeScript типизация

### Типы для props компонентов

```tsx
interface CardProps {
  title: string;
  description?: string;
  image: string;
  onClick?: () => void;
}

export default function Card({ title, description, image, onClick }: CardProps) {
  return <div onClick={onClick}>...</div>;
}
```

### Типы для API ответов

```ts
// types/api.ts
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  perPage: number;
}
```

## Server и Client компоненты

### Server Component (по умолчанию)

```tsx
// app/villas/page.tsx
// Не нужно "use client"
async function VillasPage() {
  // Можно делать fetch прямо в компоненте
  const data = await fetch('https://api.example.com/villas');
  const villas = await data.json();

  return <div>{villas.map(...)}</div>;
}
```

### Client Component

```tsx
"use client"; // Обязательно для использования hooks, state, events

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Счетчик: {count}
    </button>
  );
}
```

## Оптимизация изображений

```tsx
import Image from "next/image";

// Локальные изображения
import villa from "@/public/images/villa.jpg";

<Image
  src={villa}
  alt="Вилла"
  width={800}
  height={600}
  placeholder="blur"
  priority // Для изображений above the fold
/>

// Внешние изображения
<Image
  src="https://example.com/image.jpg"
  alt="Вилла"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here

# Приватные переменные (только на сервере)
DATABASE_URL=postgresql://...
API_SECRET=secret_key
```

```tsx
// Использование
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```
