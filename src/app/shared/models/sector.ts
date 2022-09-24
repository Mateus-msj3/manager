import {Office} from "./office";

export class Sector {

  id!: number;

  name!: string;

  initDate: Date = new Date();

  situation: boolean = true;

  offices: Office[] = [];

}
