import {Component, Input, OnInit} from '@angular/core';
import {Sector} from "../../../shared/models/sector";
import {Office} from "../../../shared/models/office";
import {MenuItem, MessageService} from "primeng/api";
import {SectorService} from "../service/sector.service";


@Component({
  selector: 'app-new-sector',
  templateUrl: './new-sector.component.html',
  styleUrls: ['./new-sector.component.scss']
})
export class NewSectorComponent implements OnInit {

  @Input()
  isCreateMode!: boolean;

  @Input()
  isEditMode!: boolean;

  @Input()
  sectorEdit!: Sector;

  @Input()
  officesBySector: Office[] = [];

  @Input()
  sector: Sector = new Sector();

  office: Office = new Office();

  items: MenuItem[] = [];

  isAtivo: boolean = true;

  isInativo: boolean = false;

  position!: string;

  constructor(private messageService: MessageService,
              private sectorService: SectorService,) {

  }

  ngOnInit(): void {
  }

  save() {
    if (this.isCreateMode) {
      this.validateFormSector(this.sector);
      this.sectorService.save(this.sector).subscribe(response => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Setor cadastrado com sucesso!'});
      });
    } else {
      this.validateFormSector(this.sectorEdit);
      this.sectorService.update(this.sectorEdit.id, this.sectorEdit).subscribe(response => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Setor atualizado com sucesso!'});
      });
    }

    this.resetFormSector();
  }

  resetFormSector() {
    this.sector = new Sector();
  }

  validateFormSector(sector: Sector) {
    if (sector.name == null || sector.name === "") {
      return this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'É necessário informar o nome do Setor'
      });
    }
  }

}
