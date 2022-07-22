import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchForm.value);
    
  }

}
