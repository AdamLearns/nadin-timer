import {Component, Input} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger,} from '@angular/animations';
import {ThemeDeciderService} from '../../services/theme-decider.service';

@Component({
  selector: 'app-status-logo',
  templateUrl: './status-logo.component.html',
  styleUrls: ['./status-logo.component.scss'],
  animations: [
    trigger('secondsUpdated', [
      // ...
      state('uneven', style({})),
      state('even', style({})),
      transition('* => *', [
        animate('0.5s', keyframes([style({transform: 'translateX(-10%) translateY(-10%) scale(0.30)'})])),
        animate('0.5s', keyframes([style({transform: 'translateX(0) translateY(0) scale(0.20)'})])),
      ]),
    ]),
  ],
})
export class StatusLogoComponent {
  @Input()
  public seconds: string = '';
  @Input()
  public minutes: string = '';


  constructor(private themeDeciderService: ThemeDeciderService) {
  }

  public isDone(): boolean {
    return this.seconds === '00' && this.minutes === '00';
  }

  public isSecondsEven() {
    return +this.seconds % 2;
  }

  public finishIcon() {
    return this.themeDeciderService.appLogoFinished;
  }
}
