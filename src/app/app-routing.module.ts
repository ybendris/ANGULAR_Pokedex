import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailComponent} from "./pokemons/pokemon-detail/pokemon-detail.component";
import {PokemonListComponent} from "./pokemons/pokemon-list/pokemon-list.component";

const routes: Routes = [
  { path: 'pokemons/:id', component: PokemonDetailComponent},
  { path: '', component: PokemonListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
