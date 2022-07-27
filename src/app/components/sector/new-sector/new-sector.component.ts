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

  values3: any;

  cities: any[] = [];

  selectedCities3: any;

  constructor() { }

  ngOnInit(): void {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

}
