import {Component, Input, OnInit} from '@angular/core';
import {Office} from "../../../../../shared/models/office";
import {ConfirmationService, ConfirmEventType, MenuItem, MessageService} from "primeng/api";
import {SectorService} from "../../../../sector/service/sector.service";
import {Sector} from "../../../../../shared/models/sector";

@Component({
  selector: 'app-new-office',
  templateUrl: './new-office.component.html',
  styleUrls: ['./new-office.component.scss']
})
export class NewOfficeComponent implements OnInit {

  @Input()
  office!: Office;

  @Input()
  sector!: Sector;

  items: MenuItem[] = [];

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
            this.updateOfficie(this.office);
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
    ];
  }

  addOfficie() {
    this.validateFormOfficie(this.office);
  }

  updateOfficie(office: Office) {
    this.displayFormOfficie = true;
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  deleteOfficie() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja remover o Cargo?',
      header: 'Remover Cargo',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.sector.offices.pop();
      },
    });
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

  validateFormOfficie(officie: Office) {

    if (officie.name == null && officie.minimumSalaryRange == null && officie.maximumSalaryRange == null) {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar todos os dados do Cargo'});

    }else if(officie.name == null || officie.name === "") {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar o nome do Cargo'});

    }else if(officie.maximumSalaryRange == null || officie.maximumSalaryRange == null) {
      return this.messageService.add({severity:'error', summary:'Rejected', detail:'É necessário informar o range de Salário'});

    }else {
      this.sector.offices.push(this.office);
      this.confirmPosition('left');
    }

  }

  resetFormOfficie() {
    this.office = new Office();
  }


}
