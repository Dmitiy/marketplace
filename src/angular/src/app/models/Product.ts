export interface IProduct {
  id?: number;
  numId?: number | string;
  orderId?: number | string;
  orderDate?: number | string;
  orderStatus?: number | string;
  itemsCount?: number | number[];
  name?: string;
  title?: string;
  imgSrc?: string;
  imgSrcPreview?: string;
  count?: number;
  price?: number;
  currency?: string;
  delivery?: string | boolean;
  hasValue?: string | boolean;
  description?: string | string[];
}
