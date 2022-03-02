import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  constructor() { }
  idPokemon ?: number;
  search ?: string;

  ngOnInit(): void {
    this.idPokemon=1;
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
