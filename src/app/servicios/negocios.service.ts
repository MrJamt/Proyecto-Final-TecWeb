import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NegociosService{

  constructor(private http: HttpClient) { }

  obtenerNegocios()
  {
   return this.http.get("http://127.0.0.1:8000/negocios")
  }
  obtenerNegocio(id:Number){
    const url=`${"http://127.0.0.1:8000/negocios"}/${id}`;
    return this.http.get(url)
  }
  obtenerProducto(codProd:Number){
    const url=`${"http://127.0.0.1:8000/producto"}/${codProd}`;
    return this.http.get(url)
  }
}