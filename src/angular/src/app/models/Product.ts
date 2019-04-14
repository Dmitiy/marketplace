export interface IProduct {

  // порядковый номер, идентификатор
  id?: number;

  // код товара
  numId?: number;

  // номер заказа
  orderId?: number | string;

  // дата заказа
  orderDate?: number | string;

  // 'подтверждение': 1 || 'готовится к отправке': 2 || 'отправлен': 3
  orderStatus?: number | string;

  // доставка: 'бесплатная': true || 'платная': false
  delivery?: string;

  // есть в наличии: 'в наличии': true || 'в наличии нет': false
  hasValue?: boolean;

  // категория товара
  name?: string;

  // краткое описание товара
  title?: string;

  // путь к изображению товара
  imgSrc?: string;

  // предпросмотр товара
  imgSrcPreview?: string[];

  // галерея карточки товара
  gallery?: string[];

  // общее количество определенного товара в наличии
  count?: number;

  // цена товара
  price?: number;

  // способ оплаты - 'руб.' || '₽',
  currency?: string;

  // описание товара, детализация
  description?: string | string[];
}
