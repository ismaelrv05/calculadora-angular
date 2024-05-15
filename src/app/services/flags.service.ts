import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flags } from '../interfaces/flags';

@Injectable({providedIn: 'root'})
export class FlagsService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }

  searchCountry( term: string): Observable<Flags[]>{

    const url = `${ this.apiUrl }/name/${ term }`
   return this.httpClient.get<Flags[]>( url );

  }

}
