import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  isAtivo: any;
  isInativo: any;
  value2: any;
  selectedCity1: any;
  cities: any;

  constructor() { }

  ngOnInit(): void {
  }

}
