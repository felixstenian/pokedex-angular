import { PokemonService } from './pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonData: any = {}

  constructor(
    private route: ActivatedRoute,
    private service: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ name }: any) => {
      this.service.getPokemonData(name).subscribe((response: Pokemon) => {
        this.pokemonData = response
      })
    })
  }

}
