import { Component, OnInit , Input } from '@angular/core';
import { movieModel } from 'src/app/models/movie.modle';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie = {} as movieModel;
  constructor() { }

  ngOnInit(): void {

  }

}
