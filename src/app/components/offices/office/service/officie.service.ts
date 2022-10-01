import {Injectable} from '@angular/core';
import {CrudService} from "../../../../shared/services/crud-service";
import {Sector} from "../../../../shared/models/sector";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {FilterSectorDTO} from "../../../../shared/dto/filter-sector-dto";
import {Office} from "../../../../shared/models/office";

@Injectable({
  providedIn: 'root'
})
export class OfficieService extends CrudService<Office, number>{

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/offices`);
  }

  findOfficeBySector(id: number): Observable<Office[]> {
    return this._http.get<Office[]>(this._baseUrl + "/idSector" + "/" + id);
  }

}
