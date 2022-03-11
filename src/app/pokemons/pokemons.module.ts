import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from "@angular/router";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TeamComponent } from './team/team.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    TeamComponent
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule
  ]
})
export class PokemonsModule { }
