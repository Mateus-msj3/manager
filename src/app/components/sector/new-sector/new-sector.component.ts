import {Component, OnInit} from '@angular/core';
import {Sector} from "../../../shared/models/sector";
import {Office} from "../../../shared/models/office";


@Component({
  selector: 'app-new-sector',
  templateUrl: './new-sector.component.html',
  styleUrls: ['./new-sector.component.scss']
})
export class NewSectorComponent implements OnInit {

  sector: Sector = new Sector();

  office: Office = new Office();
  constructor() {

  }

  ngOnInit(): void {
  }

}
