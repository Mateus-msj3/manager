import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {Sector} from "../../../shared/models/sector";
import {SectorService} from "../service/sector.service";
import {Office} from "../../../shared/models/office";
import {FilterSectorDTO} from "../../../shared/dto/filter-sector-dto";
import {OfficieService} from "../service/officie.service";

@Component({
  selector: 'app-list-sector',
  templateUrl: './list-sector.component.html',
  styleUrls: ['./list-sector.component.scss']
})
export class ListSectorComponent implements OnInit {

  filterSector: FilterSectorDTO = new FilterSectorDTO();

  sectorDialog: boolean = false;

  sectors: Sector[] = [];

  sector: Sector = new Sector();

  office: Office = new Office();

  offices: Office[] = [];

  submitted: boolean = false;

  selectedSectors: Sector[] = [];

  hideTableGridSector: boolean = false;

  isAtivo: boolean = true;

  isInativo: boolean = false;

  hideTableGridOffice: boolean = false;

  constructor(private messageService: MessageService, private sectorService: SectorService, private officeService: OfficieService) {
  }

  ngOnInit(): void {
    this.findAllOffice();
  }

  filter() {
    this.sectorService.filterSector(this.filterSector).subscribe(response => {
      if (response.length != null && response.length > 0) {
        this.sectors = response;
      }
    });
  }

  findAllOffice() {
    this.officeService.findAll().subscribe(response => {
      this.offices = response;
    });
  }

  hideDialogTableListAndEditOffice() {
    this.hideTableGridOffice = true;
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

  onRowEditInit(office: any) {

  }

  onRowEditSave(office: any) {

  }

  onRowEditCancel(office: any, ri: any) {

  }
}
