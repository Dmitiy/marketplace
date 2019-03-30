import { Component, OnInit, Input } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { PaginatorModule } from "primeng/paginator";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  ngOnInit() {}
  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}
