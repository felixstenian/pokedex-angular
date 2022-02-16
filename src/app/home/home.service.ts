import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  allPokemons: Array<any> = []
  private staticLink: string = 'https://pokeapi.co/api/v2/pokemon-form'
  private dinamicLink: string = ''

  constructor(
    private httpCliente: HttpClient
  ) { }

  getPokemonsData () {
    this.getPokemons(this.staticLink).subscribe(response => {
      this.dinamicLink = response?.next
      this.allPokemons = []
      this.listPokemons(response)
    })
  }

  getPokemonsDataMore () {
    this.getPokemons(this.dinamicLink).subscribe(response => {
      this.dinamicLink = response?.next
      this.listPokemons(response)
    })
  }

  private getPokemons(url: string): Observable<any>{
    return this.httpCliente.get(url)
  }

  private listPokemons (response: any) {
    response?.results?.map((pokemon: any) => {
      this.httpCliente.get(`${this.staticLink}/${pokemon.name}`).subscribe((data: any) => {
        const { name, sprites } = data
        this.allPokemons.push({ name, sprites })
      })
    })
  }
}
