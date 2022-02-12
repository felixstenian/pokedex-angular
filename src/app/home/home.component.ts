import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPokemons: Array<any> = []
  link: string = 'https://pokeapi.co/api/v2/pokemon-form'

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.service.getPokemons(this.link).subscribe((response) => {
      // console.log(response)
      this.allPokemons.push(...response.results)
      this.link = response.next
    })
    console.log(this.link)
    console.log(this.allPokemons)
  }

  nextPage () {
    this.service.getPokemons(this.link).subscribe((response: any) => {
      this.allPokemons.push(...response?.results)
      this.link = response.next
    })
  }

}
