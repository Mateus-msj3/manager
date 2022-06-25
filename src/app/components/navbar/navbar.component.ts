import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'History Games',
        icon: 'pi pi-fw pi-file',
        styleClass: "menu-links",
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Report',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Study Schedule',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
            styleClass:"menu-links"
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];

  }
}

