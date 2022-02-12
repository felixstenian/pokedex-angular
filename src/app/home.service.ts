import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // TODO: Lista de Pokemons aqui
  constructor(
    private httpCliente: HttpClient
  ) { }

  getPokemons(url: string): Observable<any>{
    return this.httpCliente.get(url)
  }

  // TODO: criar metodo para fazer segunda request e pegar fotos

}
