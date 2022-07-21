import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { movieModel } from '../models/movie.modle';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  private API_KEY:String = '67380a7466ed0f915d2f2e3b2f4215a1'
  private API_BASE_URL:String = 'https://api.themoviedb.org/3'
  public moviesData = [] as movieModel[];

  constructor(
    private http:HttpClient
  ) { }
  
  public getMovies(){
    return new Promise((resolve,reject) => {
      this.http
        .get<any>(`${this.API_BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_networks=213`)
        .subscribe({
          next : (data) => {
            console.log(data);
            this.moviesData = data.results;
            resolve(data.results);
          },
          error : (error) => {
            console.log(error);
            reject(error)
          }
        })
    })
  }

}
