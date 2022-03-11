import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  constructor() { }
  idPokemon =1 ;
  search ?: string;

  ngOnInit(): void {
    this.idPokemon=1;
    console.log(environment.login);
  }

  setIdPokemon(id: number): void {
    console.log("recup",id);
    this.idPokemon = id;
  }  
  
  searchPokemons(query: string):void {
    console.log("query",query)
    this.search = query;
  }

}
