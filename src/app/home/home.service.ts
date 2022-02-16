import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  allPokemons: Array<any> = []
  staticLink: string = 'https://pokeapi.co/api/v2/pokemon-form'
  dinamicLink: string = 'https://pokeapi.co/api/v2/pokemon-form'

  constructor(
    private httpCliente: HttpClient
  ) { }

  getPokemons(url: string): Observable<any>{
    return this.httpCliente.get(url)
  }

  getPokemonsData () {
    this.getPokemons(this.dinamicLink).subscribe(response => {
      this.dinamicLink = response?.next
      response?.results?.map((pokemon: any) => {
        this.httpCliente.get(`${this.staticLink}/${pokemon.name}`).subscribe((data: any) => {
          const { name, sprites } = data
          this.allPokemons.push({ name, sprites })
        })
      })
    })
  }
}
