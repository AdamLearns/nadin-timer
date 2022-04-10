import {OnDestroy, Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/internal/Subscription';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {ThemeDeciderService} from "../../services/theme-decider.service";

@Component({
  selector: 'app-fake-status',
  templateUrl: './fake-status.component.html',
  styleUrls: ['./fake-status.component.scss'],
  animations: [
    trigger('updatedText', [
      transition('* => *', [
        //reset
        animate('0s', keyframes([style({transform: 'translateX(-10%)'})])),
        animate('20s', keyframes([style({transform: 'translateX(100%)'})])),
        //pause
        animate('30s', keyframes([style({transform: 'translateX(100%)'})])),
      ]),
    ]),
  ],
})
export class FakeStatusComponent implements OnInit, OnDestroy {
  private usedTexts: string[] = [];
  private tickerTimer: Subscription;
  public currentText: string = '';

  constructor(private themeDeciderService:ThemeDeciderService) {
  }

  public ngOnDestroy(): void {
    if (this.tickerTimer) {
      this.tickerTimer.unsubscribe();
    }
  }

  public setNewText(): void {
    if (this.usedTexts.length == this.themeDeciderService.possibleFakeStatusses.length) {
      this.usedTexts = [];
    }
    this.currentText = _.shuffle(
      this.themeDeciderService.possibleFakeStatusses.filter((txt) => this.usedTexts.indexOf(txt) == -1)
    ).pop();
    this.usedTexts.push(this.currentText);
  }

  public ngOnInit(): void {
    this.setNewText();
  }
}
