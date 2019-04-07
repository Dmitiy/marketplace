import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopFooterComponent } from './components/footer/top-footer/top-footer.component';
import { FooterBoxComponent } from './components/footer/footer-box/footer-box.component';
import { FooterCartComponent } from './components/footer/footer-cart/footer-cart.component';
import { HeaderCartComponent } from './components/header/header-cart/header-cart.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuHeaderComponent } from './components/menu/menu-header/menu-header.component';
import { MenuFooterComponent } from './components/menu/menu-footer/menu-footer.component';
import { LogoFooterComponent } from './components/logo/logo-footer/logo-footer.component';
import { LogoHeaderComponent } from './components/logo/logo-header/logo-header.component';
import { InputSearchComponent } from './components/elements/inputs/input-search/input-search.component';
import { BtnPlusComponent } from './components/elements/buttons/btn-plus/btn-plus.component';
import { BtnMinusComponent } from './components/elements/buttons/btn-minus/btn-minus.component';
import { BtnCloseComponent } from './components/elements/buttons/btn-close/btn-close.component';
import { BurgerComponent } from './components/elements/buttons/burger/burger.component';
import { SlotPhoneComponent } from './components/slots/slot-phone/slot-phone.component';

import { ArticleComponent } from './components/article/article.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { SelectComponent } from './components/elements/inputs/select/select.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormCheckoutOrderComponent } from './components/forms/form-checkout-order/form-checkout-order.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { FormModalComponent } from './components/forms/form-modal/form-modal.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { DetailStatusOrderComponent } from './components/detail-status-order/detail-status-order.component';

import { PreloaderComponent } from './components/preloader/preloader.component';

/*
 * chunks of pages components
 */

// catalog-page
import { PreviewProductComponent } from './pages/catalog-page/components/preview-product/preview-product.component';
import { ProductItemComponent } from './pages/catalog-page/components/product-item/product-item.component';
import { ProductItemBigComponent } from './pages/catalog-page/components/product-item-big/product-item-big.component';
import { ControlsFieldComponent } from './pages/catalog-page/components/controls-field/controls-field.component';

// product-detail-info page
import { BreadcrumbsComponent } from './pages/product-detail-info-page/components/breadcrumbs/breadcrumbs.component';
import { DetailCountComponent } from './pages/product-detail-info-page/components/detail-check-container/detail-count/detail-count.component';
import { DetailDescComponent } from './pages/product-detail-info-page/components/detail-check-container/detail-desc/detail-desc.component';
import { DetailCheckContainerComponent } from './pages/product-detail-info-page/components/detail-check-container/detail-check-container.component';

// cart page
import { CartComponent } from './pages/cart-page/components/cart/cart.component';
import { CartControlsComponent } from './pages/cart-page/components/cart-controls/cart-controls.component';
import { FormCheckoutOrderAddressComponent } from './pages/cart-page/components/form-checkout-order-address/form-checkout-order-address.component';
import { FormCheckoutOrderReceiverComponent } from './pages/cart-page/components/form-checkout-order-receiver/form-checkout-order-receiver.component';
import { InputCounterComponent } from './pages/cart-page/components/input-counter/input-counter.component';
import { TicketComponent } from './pages/cart-page/components/ticket/ticket.component';

// detail-order page
import { ProgressRoadComponent } from './pages/detail-order-page/components/progress-road/progress-road.component';
import { DetailStatusOrderHeaderComponent } from './pages/detail-order-page/components/detail-status-order-header/detail-status-order-header.component';
import { DetailStatusOrderFooterComponent } from './pages/detail-order-page/components/detail-status-order-footer/detail-status-order-footer.component';
import { CartDetailOrderComponent } from './pages/detail-order-page/components/cart-detail-order/cart-detail-order.component';

// pages
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProductDetailInfoPageComponent } from './pages/product-detail-info-page/product-detail-info-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckStatusPageComponent } from './pages/check-status-page/check-status-page.component';
import { DetailOrderPageComponent } from './pages/detail-order-page/detail-order-page.component';

export const COMPONENTS_LIST = [
  HeaderComponent,
  PreviewProductComponent,
  PreloaderComponent,
  BreadcrumbsComponent,
  NavComponent,
  BurgerComponent,
  BtnPlusComponent,
  BtnMinusComponent,
  BtnCloseComponent,
  InputCounterComponent,
  CartControlsComponent,
  TicketComponent,
  MenuHeaderComponent,
  MenuFooterComponent,
  LogoFooterComponent,
  LogoHeaderComponent,
  SlotPhoneComponent,
  InputSearchComponent,
  FooterComponent,
  ProductItemComponent,
  ProductItemBigComponent,
  RangeSliderComponent,
  SelectComponent,
  PaginationComponent,
  TopFooterComponent,
  FooterBoxComponent,
  ControlsFieldComponent,
  FooterCartComponent,
  HeaderCartComponent,
  AsideComponent,
  NavigationComponent,
  ProductsListComponent,
  CartComponent,
  FormCheckoutOrderComponent,
  FormCheckoutOrderAddressComponent,
  FormCheckoutOrderReceiverComponent,
  CartCheckoutComponent,
  GalleryComponent,
  DetailItemComponent,
  DetailCountComponent,
  DetailDescComponent,
  DetailCheckContainerComponent,
  ArticleComponent,
  ProgressRoadComponent,
  DetailStatusOrderComponent,
  DetailStatusOrderHeaderComponent,
  DetailStatusOrderFooterComponent,
  CartDetailOrderComponent,
  FormModalComponent,

  PageNotFoundComponent,
  CatalogPageComponent,
  ProductDetailInfoPageComponent,
  CartPageComponent,
  CheckStatusPageComponent,
  DetailOrderPageComponent,
];
