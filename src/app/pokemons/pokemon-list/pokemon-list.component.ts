import { Component, Input, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PagedData} from "../model/paged-data";
import {Pokemon} from "../model/pokemon";
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  dataPokemons?: PagedData<Pokemon>;

  @Input() search?: string; 
  

  @Output() searchPokemonEvent = new EventEmitter<string>();
  
  @Output() idPokemonEvent = new EventEmitter<number>();


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonsFromService();
    this.getPokemonsOnScroll(10,10);
  }

 

  
  tellIdToParent(id : number) {
    console.log("click", id);
    this.idPokemonEvent.emit(id);
  }

  tellSearchQueryToParent(search : string){
    this.searchPokemons(search);
  }

  private getPokemonsFromService(): void {
    this.pokemonService.getPokemons().subscribe(data =>{
        this.dataPokemons = data;
        this.dataPokemons!.offset += this.dataPokemons!.limit;
      }
    )
  }

  private getPokemonsOnScroll(offset: number, limit: number): void {
    this.pokemonService.getPokemonsOnScroll(offset,limit).subscribe(data => {
      this.dataPokemons!.data = this.dataPokemons!.data.concat(data.data);
      this.dataPokemons!.offset += this.dataPokemons!.limit;
    })
  }

  private searchPokemons(query: string): void {
    if(query.length){
      this.pokemonService.getPokemonsWithSearch(query).subscribe(data => {
        this.dataPokemons!.data = data.data;
        this.dataPokemons!.offset += this.dataPokemons!.limit;
      })
    }
    else{
      this.getPokemonsFromService();
    }
  }

  onScroll(): void  {
    console.log("ça scroll là")
    this.getPokemonsOnScroll(this.dataPokemons?.offset as number,10);
  }

}
