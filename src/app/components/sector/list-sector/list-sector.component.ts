import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {Sector} from "../../../shared/models/sector";
import {SectorService} from "../service/sector.service";

@Component({
  selector: 'app-list-sector',
  templateUrl: './list-sector.component.html',
  styleUrls: ['./list-sector.component.scss']
})
export class ListSectorComponent implements OnInit {

  sectorDialog: boolean = false;

  sectors: Sector[] = [];

  sector: Sector = new Sector();

  submitted: boolean = false;

  selectedSectors: Sector[] = [];

  hideTableGridSector: boolean = false;

  isAtivo: any;

  isInativo: any;

  value2: any;

  optionListAll!: boolean;

  optionListByName!: boolean;

  optionListByStatus!: boolean;

  constructor(private messageService: MessageService, private sectorService: SectorService) { }

  ngOnInit(): void {
  }

  filter() {
    if (this.optionListAll) {
      this.getAll();
    }else if (this.optionListByName) {
      this.listByName(this.sector.name);
    } else {
      this.hideDialogTableListAndEdit();
    }
  }

  getAll() {
    this.sectorService.findAll().subscribe(list => {
      if (list.length != null && list.length > 0) {
        this.sectors = list;
        this.hideDialogTableListAndEdit();
      }
    });
  }

  listByName(name: string) {
    this.sectorService.findByName(name).subscribe(s => {
      this.sectors.push(s);
      this.hideDialogTableListAndEdit();
    });
  }

  hideDialogTableListAndEdit() {
    this.hideTableGridSector = true;
  }

  hideDialogSector() {

  }

  saveSector() {

  }

  editSector(sector: Sector) {

  }

  deleteSector(sector: Sector) {

  }

  deleteSelectedSectors() {

  }

}
