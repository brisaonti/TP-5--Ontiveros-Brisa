import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //mi api q voy a utilizar para cargar productos del posman
  urlBase:string = "http://localhost:3000/api/producto";
  constructor(private _http:HttpClient) {  }

  getProductoDestacado():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };  
    //mostrara los productos destacado 
    return this._http.get(this.urlBase+"/destacados", httpOptions );
  }
  // para agregar un producto en una aplicación web utilizando una solicitud HTTP POST
  addProducto(producto:Producto):Observable<any>{
    const httpOptions = {
      //se configura el encabezado 'Content-Type' para indicar que los datos se enviarán en formato JSON.
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    // la función JSON.stringify() para convertir el objeto producto en una cadena JSON. 
    var body = JSON.stringify(producto);
    return this._http.post(this.urlBase, body, httpOptions);
  }
}
