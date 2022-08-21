import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudOperations} from "../interfaces/crud-operations";
import {Observable} from "rxjs";

export abstract class CrudService<T, ID> implements CrudOperations<T, ID>{

  constructor(protected _http: HttpClient, protected _baseUrl: string) {

  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._baseUrl);
  }

  findById(id: ID): Observable<T> {
    return this._http.get<T>(this._baseUrl + "/" + id);
  }

  save(t: T): Observable<T> {
    return this._http.post<T>(this._baseUrl , t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.post<T>(this._baseUrl + "/" + id, t, {});
  }

  delete(id: ID): Observable<any> {
    return this._http.delete<T>(this._baseUrl + "/" + id);
  }

}
