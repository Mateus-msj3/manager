import {Component, OnInit} from '@angular/core';
import {ConfirmationService, ConfirmEventType, MenuItem, MessageService} from "primeng/api";
import {Sector} from "../../../shared/models/sector";
import {Office} from "../../../shared/models/office";
import {SectorService} from "../service/sector.service";


@Component({
  selector: 'app-new-sector',
  templateUrl: './new-sector.component.html',
  styleUrls: ['./new-sector.component.scss']
})
export class NewSectorComponent implements OnInit {

  sector: Sector = new Sector();

  office: Office = new Office();

  items: MenuItem[] = [];

  isAtivo: boolean = true;

  isInativo: boolean = false;

  displayFormOfficie: boolean = false;

  position!: string;

  constructor(private messageService: MessageService,
              private sectorService: SectorService,
              private confirmationService: ConfirmationService,) {

  }

  ngOnInit(): void {
    this.menuItems();
  }

  menuItems() {
    this.items = [
      {
        label: 'Options',
        items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            this.updateOfficie();
          }
        },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.deleteOfficie();
            }
          }
        ]},
      {
        label: 'Navigate',
        items: [{
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
        },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]}
    ];
  }

  save() {
    this.validateFormSector(this.sector);
    this.sectorService.save(this.sector).subscribe(response => {
      this.messageService.add({severity:'success', summary:'Success', detail:'Setor cadastrado com sucesso!'});
    });
    this.resetFormSector();
    this.resetFormOfficie();
  }

  addOfficie() {
    this.validateFormOfficie(this.office);
  }

  updateOfficie() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  deleteOfficie() {
    this.sector.offices.pop()
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

  confirmPosition(position: string) {
    this.position = position;
    this.confirmationService.confirm({
      message: 'Cargo adicionado com sucesso, deseja adicionar outro cargo ao setor?',
      header: 'Adicionar novo Cargo',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.resetFormOfficie()
      },
      reject: (type: any) => {
        switch(type) {
          case ConfirmEventType.REJECT:
            this.closeFormOfficie()
            break;
          case ConfirmEventType.CANCEL:
            this.closeFormOfficie()
            break;
        }
      },
      key: "positionDialog"
    });
  }

  showFormOfficie() {
    this.displayFormOfficie = true;
  }

  closeFormOfficie() {
    this.displayFormOfficie = false;
  }

  resetFormSector() {
    this.sector = new Sector();
  }

  validateFormSector(sector: Sector) {
    if (sector.name == null || sector.name === "") {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar o nome do Setor'});
    }
  }

  validateFormOfficie(officie: Office) {

    if (officie.name == null && officie.minimumSalaryRange == null && officie.maximumSalaryRange == null) {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar todos os dados do Cargo'});

    }else if(officie.name == null || officie.name === "") {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar o nome do Cargo'});

    }else if(officie.maximumSalaryRange == null || officie.maximumSalaryRange == null) {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar o nome o range de Salário'});

    }else {
      this.sector.offices.push(this.office);
      this.confirmPosition('left');
    }

  }

  resetFormOfficie() {
    this.office = new Office();
  }


}
