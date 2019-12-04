import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  private url = "https://moonshuttle-881ae.firebaseio.com/";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }
  getOne(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  create(ressource) {
    return this.http.post(this.url, ressource);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
