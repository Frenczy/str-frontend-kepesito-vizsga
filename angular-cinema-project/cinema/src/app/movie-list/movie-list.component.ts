import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies:Observable<Movie[]> 

  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
  }

  getMovies(): void {this.movies=this.httpservice.getMovieList()}

  deleteMovie(movie: Movie): void {
    this.httpservice.deleteMovie(movie.id).subscribe(m=>this.movies=this.httpservice.getMovieList())
  }

}
