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
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
        styleClass:"ui-menuitem-text",
        routerLink:'/dashboard'
      },
      {
        label: 'Employee',
        icon: 'pi pi-fw pi-file',
        style:{'color': 'white'},
        items: [
          {
            label: 'List',
            icon: 'pi pi-users'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
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
        label: 'Sector',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-th-large',
            routerLink:'/list-sector'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink:'/new-sector'
          },
          {
            separator: true
          },
          {
            label: 'Report',
            icon: 'pi pi-fw pi-external-link'
          },


        ]
      },
      
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
      },

      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        routerLink:'/login'
      }
    ];

    this.activeItem = this.items[0];

  }
}

