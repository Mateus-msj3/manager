import {Component, Input, OnInit} from '@angular/core';
import {Sector} from "../../../shared/models/sector";
import {MenuItem, MessageService} from "primeng/api";
import {SectorService} from "../service/sector.service";
import {Office} from "../../../shared/models/office";

@Component({
  selector: 'app-form-sector',
  templateUrl: './form-sector.component.html',
  styleUrls: ['./form-sector.component.scss']
})
export class FormSectorComponent implements OnInit {

  @Input()
  isCreateMode!: boolean;

  @Input()
  isEditMode!: boolean;

  @Input()
  sector!: Sector;

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
      this.validateFormSector(this.sector);
      this.sectorService.update(this.sector.id, this.sector).subscribe(response => {
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
