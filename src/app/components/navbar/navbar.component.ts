import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchForm:FormGroup = new FormGroup({
    searchOption : new FormControl('',[Validators.required]),
    searchTitle : new FormControl('',[Validators.required])
  })
  constructor(
    private movieService:MovieServiceService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchForm.value);
    if(this.searchForm.value.searchOption === 'name' ){
      this.movieService.searchWithTitle(this.searchForm.value.searchTitle);
    }
    else if(this.searchForm.value.searchOption === 'vote_average' ){
      this.movieService.searchWithRating(this.searchForm.value.searchTitle);
    }
    else if(this.searchForm.value.searchOption === 'first_air_date'){

    }
  }

}
