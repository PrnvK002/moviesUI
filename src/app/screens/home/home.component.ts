import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public movieService:MovieServiceService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
