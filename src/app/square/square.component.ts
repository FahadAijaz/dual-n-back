import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css',
  animations: [
    trigger('light', [
      state('off', style({
        backgroundColor: '#09192A',
      })),
      state('on', style({
        backgroundColor: '#50E3C2'
      })),
      transition('off => on', animate('300ms ease')),
      transition('on => off', animate('1000ms ease'))
    ])
  ]
})
export class SquareComponent {
  @Input() light: boolean = false;

  constructor() { }

}
