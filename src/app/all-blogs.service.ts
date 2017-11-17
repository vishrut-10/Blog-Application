import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;

const BASE_URL = 'http://localhost:3000/items/';
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class AllBlogsService {

  constructor(private http: Http) { }
  getBlogs() {
    return this.http.get(BASE_URL).map(res => {
      return res.json();
    });
  }

  updateData(data){
    return this.http.patch(`${BASE_URL}${data.id}`,data,header).map(res => res.json());
  }
}
