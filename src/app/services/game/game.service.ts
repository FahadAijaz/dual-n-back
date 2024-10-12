import {Injectable} from "@angular/core";

const DEFAULT_N = 2;
const DEFAULT_WIDTH = 3;
const DEFAULT_HEIGHT = 3;
const DEFAULT_INTERVAL = 3000;


@Injectable()
export class GameService {
  private n: number;
  public width: number;
  public height: number;
  public interval: number;
  public length: number;
  private parseNumber(s: string | null, defaultNumber: number){
    return s ? parseInt(s, 10) : defaultNumber;
  }
  constructor() {
    const n = localStorage.getItem('game_n');
    this.n = n ? parseInt(n, 10) : DEFAULT_N;
    this.n = this.parseNumber(localStorage.getItem('game_n'), DEFAULT_N);
    this.width = this.parseNumber(localStorage.getItem('game_width'), DEFAULT_WIDTH);
    this.height = this.parseNumber(localStorage.getItem('game_width'), DEFAULT_HEIGHT);
    this.interval = this.parseNumber(localStorage.getItem('game_width'), DEFAULT_INTERVAL);
    this.length = this.getLength();
  }
  private getLength (length?: number) {
    if (length) {
      return length;
    } else {
      return 20 + this.n * this.n;
    }
  }
  getN() {
    return this.n;
  }
}
