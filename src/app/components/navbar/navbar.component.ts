import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        styleClass:"ui-menuitem-text",
        routerLink:'/dashboard'
      },
      {
        label: 'Funcionários',
        icon: 'pi pi-user-edit',
        style:{'color': 'white'},
        items: [
          {
            label: 'Listar',
            icon: 'pi pi-users',
            routerLink:'/listar-funcionario'
          },
          {
            label: 'Novo',
            icon: 'pi pi-fw pi-plus',
            routerLink:'/novo-funcionario'
          },
          {
            separator: true
          },
          {
            label: 'Relatórios',
            icon: 'pi pi-file-pdf'
          }
        ]
      },
      {
        label: 'Setor',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-th-large',
            routerLink:'/listar-setor'
          },
          {
            label: 'Novo',
            icon: 'pi pi-fw pi-plus',
            routerLink:'/novo-setor'
          },
          {
            separator: true
          },
          {
            label: 'Relatórios',
            icon: 'pi pi-file-pdf'
          },


        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        routerLink:'/'
      }
    ];

    this.activeItem = this.items[0];

  }
}

