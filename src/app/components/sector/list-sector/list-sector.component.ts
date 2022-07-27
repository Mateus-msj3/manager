import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-list-sector',
  templateUrl: './list-sector.component.html',
  styleUrls: ['./list-sector.component.scss']
})
export class ListSectorComponent implements OnInit {

  Delete: any;
  products: any[] = [];
  selectedProducts: any;
  productDialog: any;
  product!: string;
  submitted!: boolean;
  statuses: any[] = [];
  num!: number;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  openNew() {

  }

  deleteSelectedProducts() {

  }

  editProduct(product: any) {

  }

  deleteProduct(product: any) {

  }

  hideDialog() {

  }

  saveProduct() {

  }
}
