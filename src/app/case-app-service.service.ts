import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseAppServiceService {
  url1='http://localhost:3000/categori';
  url2 = 'http://localhost:3000/altCategori';
  url3 = 'http://localhost:3000/productAdd';


  categori:any;
  altCategori:any;
  productAdd:any;





  constructor(private _http: HttpClient) { }

  getCategori():Observable<any>{
    return this._http.get(this.url1)
    .pipe((results: any) => this.categori = results);

  }
  getAltCategori():Observable<any>{
    return this._http.get(this.url2)
    .pipe((results: any) => this.altCategori = results);

  }
  getProductAdd():Observable<any>{
    return this._http.get(this.url3)
    .pipe((results: any) => this.productAdd = results);

  }
  deleteProduct(id: string) {
    const url = `${this.url3}/${id}`;
    return this._http.delete(url);
  }
  updateProduct(id: string, updatedData: any): Observable<any> {
    const url = `${this.url3}/${id}`;
    return this._http.put(url, updatedData);
  }
 
}
