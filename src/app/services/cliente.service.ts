import {inject, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../enviroments/environment'
import {Cliente} from "../model/cliente";
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = base_url;
  private http: HttpClient = inject(HttpClient);
  constructor() {
  }

  list(): Observable<any> {
    console.log(this.url + "/clientes")
    return this.http.get<Cliente[]>(this.url + "/clientes");
  }

  listId(id: number) : Observable<any> {
    return this.http.get<Cliente>(this.url + "/cliente/" + id);
  }

  insert(cliente: Cliente): Observable<any> {
    return this.http.post(this.url + '/cliente', cliente);
  }

  update(cliente: Cliente):Observable<any> {
    return this.http.put(this.url + "/cliente", cliente);
  }

  delete(id: string) {
    return this.http.delete(this.url + "/cliente/" + id);
  }
}
