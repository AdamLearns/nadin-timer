import {Component} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-settings-toolbar',
  templateUrl: './settings-toolbar.component.html',
  styleUrls: ['./settings-toolbar.component.scss']
})
export class SettingsToolbarComponent {
  constructor(private translate: TranslocoService) {

  }

  public isLanguage(target: string): boolean {
    return this.translate.getActiveLang() === target;
  }

  public changeLanguage(target: string): void {
    this.translate.setActiveLang(target);
  }
}
