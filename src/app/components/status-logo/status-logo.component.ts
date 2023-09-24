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
        animate('0.2s', keyframes([style({transform: 'scale(0.25)'})])),
        animate('0.2s', keyframes([style({transform: 'scale(0.2)'})])),
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
