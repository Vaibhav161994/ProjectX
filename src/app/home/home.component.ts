import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private leftopen: boolean = false;

  private rightopen: boolean = false;
  
  ToggleLeftSidebar(){
    console.log('Inside Toggle !!');
    this.leftopen = !this.leftopen;
  }
  
  ToggleRightSidebar(){
    console.log('Inside Toggle !!');
    this.rightopen = !this.rightopen;
  }

}
