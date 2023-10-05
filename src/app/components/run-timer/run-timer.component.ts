import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription, timer} from 'rxjs';
import * as chance from 'chance';
import {ThemeDeciderService} from "../../services/theme-decider.service";

@Component({
  selector: 'app-run-timer',
  templateUrl: './run-timer.component.html',
  styleUrls: ['./run-timer.component.scss'],
})
export class RunTimerComponent implements OnInit, OnDestroy {

  public seconds = '00';
  public minutes = '00';
  private timerTimer?: Subscription;
  public targetTime: number = 0;
  public startTime: number = 0;
  private alarmTriggered: boolean = false;

  constructor(private route: ActivatedRoute, public themeDeciderService: ThemeDeciderService) {
  }

  public nullSafeString(value: string | null): string {
    return value ? value : '';
  }

  public ngOnInit(): void {
    this.themeDeciderService.setIfValid(this.nullSafeString(this.route.snapshot.paramMap.get('theme')));
    this.themeDeciderService.application = this.nullSafeString(this.route.snapshot.paramMap.get('application'));
    this.themeDeciderService.language = this.nullSafeString(this.route.snapshot.paramMap.get('lang'));
    this.targetTime = parseInt(this.nullSafeString(this.route.snapshot.paramMap.get('until')), 10);
    this.startTime = parseInt(this.nullSafeString(this.route.snapshot.paramMap.get('startTime')), 10);

    // noinspection TypeScriptValidateJSTypes
    this.timerTimer = timer(0, 100).subscribe(() => {
      const now: Date = new Date(Date.now());
      const date: Date = new Date(this.targetTime - now.getTime());

      if (this.targetTime < now.getTime()) {
        this.seconds = '00';
        this.minutes = '00';
        if (!this.alarmTriggered) {
          this.alarmTriggered = true;
          this.playAudio();
        }
      } else {
        this.seconds = '' + date.getSeconds().toString().padStart(2, '0');
        this.minutes = '' + date.getMinutes().toString().padStart(2, '0');
      }
    });
  }

  public triggerAlarm(): void {
    this.playAudio();
  }

  public playAudio(): void {
    const audio = new Audio();

    const rnd = this.getWeightedRandom();
    switch (rnd) {
      case 'whistle':
        audio.src = '../../assets/sounds/Whistling.mp3';
        break;
      case 'alarm':
        audio.src = '../../assets/sounds/alarm.wav';
        break;
      case 'bell':
        audio.src = '../../assets/sounds/service-bell.mp3';
        break;
      default:
        audio.src = '../../assets/sounds/alarm.wav';

    }
    audio.load();
    audio.play().then(r => console.log(r));
  }

  private getWeightedRandom(): string {
    return chance().weighted(['whistle', 'alarm', 'bell'], [1, 5, 2]);
  }

  public isCloseToEnd(): boolean {
    return +this.minutes === 0;
  }

  public isNearToEnd(): boolean {
    return +this.minutes === 1;
  }

  public ngOnDestroy(): void {
    if (this.timerTimer) {
      this.timerTimer.unsubscribe();
    }
  }
}
