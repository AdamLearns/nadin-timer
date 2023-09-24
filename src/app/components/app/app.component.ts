import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ThemeDeciderService} from "../../services/theme-decider.service";
import {ShepherdService} from "angular-shepherd";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptionParameter?: Subscription;

  //NOTE: It is highly recommended to inject ShepherdService into your app.component.ts.
  // Injecting it at the app level ensures you only create one instance of Shepherd.
  constructor(private route: ActivatedRoute,
              private shepherdService: ShepherdService,
              private themeDeciderService: ThemeDeciderService,
  ) {
  }

  public ngOnDestroy(): void {
    if (this.subscriptionParameter) {
      this.subscriptionParameter.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.subscriptionParameter = this.route.queryParams
      .subscribe((params) => {
          // console.log(params);
          this.themeDeciderService.setIfValid(params["theme"] as string);
          this.themeDeciderService.application = params["application"] as string;
          this.themeDeciderService.language = params["lang"] as string;
        }
      );
  }
}
