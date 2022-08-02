import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService, SelectItem} from "primeng/api";

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

  items: MenuItem[] = [];

  displayResponsive: boolean = false;

  val2: any;

  value9: number = 150;

  visibleCardOffice = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.menuItems();
  }

  menuItems() {
    this.items = [
      {
        label: 'Options',
        items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            this.update();
          }
        },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            }
          }
        ]},
      {
        label: 'Navigate',
        items: [{
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
        },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]}
    ];
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

  showResponsiveDialog() {
    this.displayResponsive = true;
  }
}
