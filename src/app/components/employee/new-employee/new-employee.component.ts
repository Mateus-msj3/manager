import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  activeIndex1!: number;
  value2: any;
  date3: any;
  cities: any;
  selectedCity1: any;
  isAtivo: any;
  isInativo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
