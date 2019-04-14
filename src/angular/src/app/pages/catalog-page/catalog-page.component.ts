import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from '../../services/product.service';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  products: IProduct[] = [];
  category: string;
  id: number;

  public selectedCategory = this.category;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.category = this._router.url;
    this.getCategories();
  }

  getCategories(): void {
    this._productService
      .getProducts(this.category)
      .subscribe((res) => (this.products = res));
  }

  paginate(event) {
    console.log(event);

    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

  // changeCategory(newCategory?: string) {
  //   this.selectedCategory = newCategory;
  // }

  // changePage(newPage: number) {
  //   this.selectedPage = newPage;
  // }

  // changePageSize(newSize: number) {
  //   this.productsPerPage = Number(newSize);
  //   this.changePage(1);
  // }

  // getPageNumbers(): number[] {
  //   return Array(Math.ceil(this.getCategories().length / this.productsPerPage))
  //     .fill(0).map((x, i) => i + 1);
  // }

  // getProductsPage(): void {
  //   let pageIndex: number = (this.selectedPage - 1) * this.productsPerPage;

  //   return this.getCategories().slice(pageIndex, pageIndex + this.productsPerPage);
  // }

}
