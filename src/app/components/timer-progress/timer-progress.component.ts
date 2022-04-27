import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {ThemeDeciderService} from "../../services/theme-decider.service";

@Component({
  selector: 'app-timer-progress',
  templateUrl: './timer-progress.component.html',
  styleUrls: ['./timer-progress.component.scss'],
})
export class TimerProgressComponent implements OnInit, OnDestroy {
  @Input()
  public fromTime: number;

  public duration: number;
  public progressPercentage: number;

  @Input()
  public toTime: number;
  private timerTimer: Subscription;

  constructor(private themeDeciderService: ThemeDeciderService) {
  }

  public ngOnDestroy(): void {
    if (this.timerTimer) {
      this.timerTimer.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.duration = this.toTime - this.fromTime;
    this.timerTimer = timer(0, 350).subscribe(() => {
      //percentage with 1 digit
      this.progressPercentage = Math.round(1000 - ((this.toTime - Date.now()) / this.duration)*1000)/10;
    });
  }

}
