import {Component} from '@angular/core';
import {GameService} from "../services/game/game.service";
import {SequenceService} from "../services/sequence/sequence.service";
import {CommonModule} from "@angular/common";
import {GridComponent} from "../grid/grid.component";

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule, GridComponent],
  providers: [GameService, SequenceService],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {
  button_state: { sound: string; position: string } = {sound: 'none', position: 'none'};

  constructor(readonly gameService: GameService, readonly sequenceService: SequenceService) {

  }
}
