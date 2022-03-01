export interface Periods {
  'pomodoro': Period;
  'shortBreak': Period;
  'longBreak': Period;
}

export interface Period {
  name: string;
  duration: number;
}
