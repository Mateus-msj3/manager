import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";

class Product {
}

@Component({
  selector: 'app-new-sector',
  templateUrl: './new-sector.component.html',
  styleUrls: ['./new-sector.component.scss']
})
export class NewSectorComponent implements OnInit {
  value2: any;

  date3: any;

  selectedValue: any;

  isAtivo: any;

  isInativo: any;

  products1?: Product[];

  products2?: Product[];

  statuses?: SelectItem[];

  clonedProducts: { [s: string]: Product; } = {};

  constructor() { }

  ngOnInit(): void {
  }

}
