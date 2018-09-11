import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
  getVideoTag() {
    return `<video autoplay muted loop>
              <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4">No HTML5 supported.</source>
            </video>`;
  }
*/
}
