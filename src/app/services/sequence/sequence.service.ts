import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class SequenceService {
  private records: {
    position_match: boolean,
    sound_match: boolean,
    user_match_sound: boolean,
    user_match_position: boolean
  }[];
  private soundMatch = new EventEmitter<boolean>();
  private positionMatch = new EventEmitter<boolean>();
  public currentIndex: number;

  constructor() {
    this.records = [];
    this.currentIndex = 0;
  }

  matchSoundGuess() {
    this.records[this.currentIndex].user_match_sound = true;
    this.soundMatch.emit(this.records[this.currentIndex].sound_match);
  }

  matchPositionGuess() {
    this.records[this.currentIndex].user_match_position = true;
    this.positionMatch.emit(this.records[this.currentIndex].position_match);
  }
}
