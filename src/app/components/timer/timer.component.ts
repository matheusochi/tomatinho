import { Component, OnInit } from '@angular/core';
import { Period, Periods } from '../../core/models/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public started = false;

  public periods: Periods = {
    'pomodoro': {
      name: 'Pomodoro',
      duration: 25 * 60 * 1000
    },
    'shortBreak': {
      name: 'Short Break',
      duration: 5 * 60 * 1000
    },
    'longBreak': {
      name: 'Long Break',
      duration: 15 * 60 * 1000
    }
  }

  public remainingTime: number = 0;
  public currentPeriod: Period = this.periods.pomodoro;

  public get remainingMinutes(): string {
    if (!this.remainingTime) return '00';

    return Math.floor(this.remainingTime / 60000).toString().padStart(2, '0');
  }

  public get remainingSeconds(): string {
    if(!this.remainingTime) return '00';

    return Math.floor((this.remainingTime % 60000) / 1000).toString().padStart(2, '0');
  }

  public get remainingTimeText(): string {
    return `${this.remainingMinutes}:${this.remainingSeconds}`;
  }

  private _countdownInterval: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public start(period: string = 'pomodoro') {
    this.started = true;

    if (!period) this.currentPeriod = this.periods.pomodoro
    this.remainingTime = this.currentPeriod.duration;

    this._countdownInterval = window.setInterval(() => {
      if (this.remainingTime <= 0) return window.clearInterval(this._countdownInterval);

      this.remainingTime = this.remainingTime - 1000;
    }, 1000)
  }
}
