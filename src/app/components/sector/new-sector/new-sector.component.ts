import {Component, Input, OnInit} from '@angular/core';
import {Sector} from "../../../shared/models/sector";
import {Office} from "../../../shared/models/office";
import {MenuItem, MessageService} from "primeng/api";
import {SectorService} from "../service/sector.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


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

  formularySector!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService,
              private sectorService: SectorService,) {

  }

  ngOnInit(): void {
    this.createForm(this.sector);
  }

  createForm(sector: Sector) {
    this.formularySector = this.formBuilder.group({
      name: [sector.name, Validators.required],
      initDate: [sector.initDate],
      situation: [sector.situation],
      offices: [sector.offices],
    });
  }

  beforeSave() {
    this.sector.name = this.name?.value;
    this.sector.initDate = this.initDate?.value;
    this.sector.situation = this.situation?.value;
    this.sector.offices = this.offices?.value;
  }

  submit() {
    if (this.isEditMode) {
      this.sectorService.update(this.sector.id, this.sector).subscribe(response => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Setor atualizado com sucesso!'});
      });
    } else {
      this.saveSector()
      this.resetFormularySector();
    }
  }

  resetFormularySector() {
    this.formularySector.reset(new Sector());
    this.formularySector.get('offices')?.setValue(this.sector.offices = []);
  }

  saveSector() {
    this.beforeSave();
    if (this.validateFormSector()) {
      this.sectorService.save(this.sector).subscribe(response => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Setor cadastrado com sucesso!'});
      });
    }else {

    }
  }

  validateFormSector(): boolean {
    if (!this.formularySector.valid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'É necessário informar o nome do Setor'
      });
      return false;
    }
    return true;
  }

  get name() {
    return this.formularySector.get('name');
  }

  get initDate() {
    return this.formularySector.get('initDate');
  }

  get situation() {
    return this.formularySector.get('situation');
  }

  get offices() {
    return this.formularySector.get('offices');
  }

}
