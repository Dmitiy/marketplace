/*
* common layout of pages
*/

import { NavComponent } from './layout/nav/nav.component';
import { AsideComponent } from './layout/aside/aside.component';
import { BurgerComponent } from './layout/slots/burger/burger.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SlotPhoneComponent } from './layout/slots/slot-phone/slot-phone.component';
import { PreloaderComponent } from './layout/preloader/preloader.component';
import { TopFooterComponent } from './layout/footer/top-footer/top-footer.component';
import { FooterBoxComponent } from './layout/footer/footer-box/footer-box.component';
import { FooterCartComponent } from './layout/footer/footer-cart/footer-cart.component';
import { HeaderCartComponent } from './layout/header/header-cart/header-cart.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MenuHeaderComponent } from './layout/menu/menu-header/menu-header.component';
import { MenuFooterComponent } from './layout/menu/menu-footer/menu-footer.component';
import { LogoFooterComponent } from './layout/logo/logo-footer/logo-footer.component';
import { LogoHeaderComponent } from './layout/logo/logo-header/logo-header.component';
import { RangeSliderComponent } from './layout/range-slider/range-slider.component';
import { InputSearchComponent } from './layout/slots/input-search/input-search.component';

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
  InputCounterComponent,
  CartControlsComponent,
  TicketComponent,
  MenuHeaderComponent,
  MenuFooterComponent,
  LogoFooterComponent,
  LogoHeaderComponent,
  SlotPhoneComponent,
  FooterComponent,
  ProductItemComponent,
  ProductItemBigComponent,
  TopFooterComponent,
  FooterBoxComponent,
  ControlsFieldComponent,
  FooterCartComponent,
  HeaderCartComponent,
  AsideComponent,
  NavigationComponent,
  CartComponent,
  FormCheckoutOrderAddressComponent,
  FormCheckoutOrderReceiverComponent,
  DetailCountComponent,
  DetailDescComponent,
  DetailCheckContainerComponent,
  ProgressRoadComponent,
  DetailStatusOrderHeaderComponent,
  DetailStatusOrderFooterComponent,
  CartDetailOrderComponent,
  RangeSliderComponent,
  InputSearchComponent,
  PageNotFoundComponent,
  CatalogPageComponent,
  ProductDetailInfoPageComponent,
  CartPageComponent,
  CheckStatusPageComponent,
  DetailOrderPageComponent,
];
