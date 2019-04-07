export interface IProduct {

  // порядковый номер, идентификатор
  id?: number;

  // код товара
  numId?: number | string;

  // номер заказа
  orderId?: number | string;

  // дата заказа
  orderDate?: number | string;

  // 'подтверждение': 1 || 'готовится к отправке': 2 || 'отправлен': 3
  orderStatus?: number | string;

  // доставка: 'бесплатная': true || 'платная': false
  delivery?: string | boolean;

  // общее количество заказанных единиц товара или список всех заказанных товаров
  itemsCount?: number | number[];

  // есть в наличии: 'в наличии': true || 'в наличии нет': false
  hasValue?: string | boolean;

  // категория товара
  name?: string;

  // краткое описание товара
  title?: string;

  // путь к изображению товара
  imgSrc?: string;

  // предпросмотр товара и галерея карточки товара
  imgSrcPreview?: string[];

  // общее количество определенного товара в на
  count?: number;

  // цена товара
  price?: number;

  // способ оплаты - 'руб.' || '₽',
  currency?: string;

  // описание товара, детализация
  description?: string | string[];
}
