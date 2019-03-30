import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  nextPage: number; //следующая страница
  prevPage: number; //предыдущая страница
  lastPage: number; //к последней странице
  startPage: number; //к первой странице
  totalPages: number; //общее количество страниц
  isActivePage: boolean; //активная страница
  showCountPages: number; //отображать количество страниц [5, 10, 20]
  constructor(private _productService: ProductService) {}

  ngOnInit() {}
}
