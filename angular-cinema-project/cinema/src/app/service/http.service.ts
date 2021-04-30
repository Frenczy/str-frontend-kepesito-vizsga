import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL2 = 'http://localhost:3000/movies';
  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/frenczy/movies';


  constructor(private http: HttpClient) { }

  getMovieList():Observable<Movie[]> {
    return this.http.get<Movie[]>(this.BASE_URL);
  }

  deleteMovie(id:number):Observable<Movie> {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }
}
