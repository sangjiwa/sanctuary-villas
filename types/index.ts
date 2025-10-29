// Пример типов для API данных
export interface Villa {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
