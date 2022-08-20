import {Observable} from "rxjs";

export interface CrudOperations<T, ID> {

  findAll(): Observable<T[]>;

  findById(id: ID): Observable<T>;

  save(t: T): Observable<T>;

  update(id: ID, t:T): Observable<T>;

  delete(id: ID): Observable<any>;

}
