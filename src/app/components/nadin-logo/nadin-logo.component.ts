import { Component } from '@angular/core';
import {ThemeDeciderService} from "../../services/theme-decider.service";

@Component({
  selector: 'app-nadin-logo',
  templateUrl: './nadin-logo.component.html',
  styleUrls: ['./nadin-logo.component.scss'],
})
export class NadinLogoComponent {

  constructor(private themeDeciderService: ThemeDeciderService) {
  }

  public getAppLogo(): string {
    return this.themeDeciderService.appLogo;
  }
  public getTheme(): string {
    return this.themeDeciderService.theme;
  }


}
