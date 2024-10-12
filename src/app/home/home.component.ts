import {Component, OnInit} from '@angular/core';
import {ChartsComponent} from "../charts/charts.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChartsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  play() {
    this.router.navigate(['play']);
  }
}
