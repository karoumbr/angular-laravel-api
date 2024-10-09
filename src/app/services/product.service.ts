import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000/api/products'; // L'URL de votre API Laravel

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir la liste des articles
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  insertData(data:Product){
    return this.http.post('http://127.0.0.1:8000/api/addProduct',data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/deleteProduct/'+id);
  }

  getProductById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/product/'+id);
  }

  updateData(id:any, data:Product){
    return this.http.put('http://127.0.0.1:8000/api/updateProduct/'+id,data);
  }


}