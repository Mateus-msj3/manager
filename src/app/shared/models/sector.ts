import {Office} from "./office";

export class Sector {

  id!: number;

  name!: string;

  initDate!: Date;

  situation!: boolean;

  offices: Office[] = [];

}
