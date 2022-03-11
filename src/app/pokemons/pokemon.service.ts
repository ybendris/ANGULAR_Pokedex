import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, forkJoin, Observable, of} from "rxjs";
import {PagedData} from "./model/paged-data";
import {Pokemon} from "./model/pokemon";
import { Auth } from './model/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private pokemonApiUrl = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getPokemons() : Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>(this.pokemonApiUrl+"/pokemons").pipe(
      catchError(this.handleError<PagedData<Pokemon>>('getPokemons', {} as PagedData<Pokemon>))
    )
  }

  getPokemon(id: number) : Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokemonApiUrl+"/pokemons/"+id).pipe(
      catchError(this.handleError<Pokemon>('getPokemon', {} as Pokemon))
    )
  }

  getPokemonsOnScroll(offset: number, limit: number): Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>(this.pokemonApiUrl+"/pokemons?offset="+offset+"&limit="+limit).pipe(
      catchError(this.handleError<PagedData<Pokemon>>('getPokemonsOnScroll', {} as PagedData<Pokemon>))
    )
  }

  getPokemonsWithSearch(query: string): Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>(this.pokemonApiUrl+"/pokemons?search="+query).pipe(
      catchError(this.handleError<PagedData<Pokemon>>('getPokemonsWithSearch', {} as PagedData<Pokemon>))
    )
  }

  login(): Observable<Auth>{
    const body = {
      email: environment.login,
      password: environment.passe
    }
    return this.http.post<Auth>(this.pokemonApiUrl + "/auth/login", body).pipe(
      catchError(this.handleError<Auth>("login", {} as Auth)))
  }

  getTeamId(token: string): Observable<number[]>{
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer "+token);
    return this.http.get<number[]>(this.pokemonApiUrl+"/trainers/me/team",{headers})
  }



  putTeam(body: number[], header: HttpHeaders): Observable<any> {
    return this.http.put<string>(this.pokemonApiUrl + "/trainers/me/team", body, {headers: header}).pipe(
      catchError(this.handleError<string>("putTeam", {} as string))
    )
  }

  getTeam(header: HttpHeaders): Observable<number[]>{
    return this.http.get<number[]>(this.pokemonApiUrl + "/trainers/me/team",{headers: header}).pipe(
      catchError(this.handleError<number[]>("getTeam", {} as number[]))
    )
  }
  

}
