import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() product: IProduct;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
