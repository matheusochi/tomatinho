import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have started', () => {
    expect(component.started).toBeFalse();
  });

  it('should have periods defined', () => {
    expect(component.periods).toBeTruthy();
    expect(component.periods.pomodoro).toBeTruthy();
    expect(component.periods.shortBreak).toBeTruthy();
    expect(component.periods.longBreak).toBeTruthy();
  });

  it('should set pomodoro as currentPeriod by default', () => {
    expect(component.currentPeriod).toBeTruthy();
    expect(component.currentPeriod.name).toBe('Pomodoro');
    expect(component.currentPeriod.duration).toBe(25 * 60 * 1000);
  });

  it('should return correct minutes and seconds', () => {
    component.remainingTime = 140000;
    expect(component.remainingMinutes).toBe('02');
    expect(component.remainingSeconds).toBe('20');
    expect(component.remainingTimeText).toBe('02:20');
  })

  it('should decrease time correctly', () => {
    jasmine.clock().install();
    const timerCallback = jasmine.createSpy("timerCallback");

    setTimeout(() => {
      timerCallback();
    }, 5000)

    component.currentPeriod = {
      name: 'Test Period',
      duration: 8000
    };

    component.start();
    jasmine.clock().tick(5000);
    expect(component.remainingTime).toBe(3000);
  })
});
