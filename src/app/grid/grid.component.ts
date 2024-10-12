import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../services/game/game.service";
import {SequenceService} from "../services/sequence/sequence.service";
import {CommonModule} from "@angular/common";
import {SquareComponent} from "../square/square.component";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit, AfterViewInit {
  @Input() width: number = 0;
  @Input() height: number = 0;
  // @ts-ignore
  @ViewChild('container') container: ElementRef;
  squares: { light: boolean }[] = [];
  constructor(public sequenceService: SequenceService, private gameService: GameService) {

  }

  ngOnInit() {
    for (let size = 0 ; size < this.width * this.height; size++) {
      this.squares.push({light: false});
    }
  }

  ngAfterViewInit() {
    this.container.nativeElement.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
    this.container.nativeElement.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;
  }
}
