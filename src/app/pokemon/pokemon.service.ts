import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private staticLink: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemonData (name: string): Observable<any> {
    return this.httpClient.get(`${this.staticLink}/${name}`)
  }
}
