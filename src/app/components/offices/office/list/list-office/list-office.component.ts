import {Component, Input, OnInit} from '@angular/core';
import {Office} from "../../../../../shared/models/office";
import {Sector} from "../../../../../shared/models/sector";

@Component({
  selector: 'app-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss']
})
export class ListOfficeComponent implements OnInit {

  @Input()
  officesBySector: Office[] = [];

  @Input()
  offices: Office[] = [];

  @Input()
  sector!: Sector;

  selectedSectors: Sector[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRowEditInit(office: any) {

  }

  onRowEditSave(office: any) {

  }

  onRowEditCancel(office: any, ri: any) {

  }

  onRowEditDelete(office: any) {

  }
}
