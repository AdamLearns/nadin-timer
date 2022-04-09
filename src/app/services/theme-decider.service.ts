import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeDeciderService {

  constructor() {
  }

  private myAppLogo: string;

  set appLogo(value: string) {
    this.myAppLogo = value;
  }

  get appLogo(): string {
    return this.myAppLogo;
  }

  private myTheme: string;

  set theme(value: string) {
    this.myTheme = value;
  }

  get theme(): string {
    if (!this.myTheme) {
      this.myTheme = this.generateRandomTheme();
    }
    return this.myTheme;
  }

  public setIfValid(newTheme: string): void {
    if (!newTheme) {
      return;
    }

    if ((newTheme === 'Easter')
      || (newTheme === 'Spring')
      || (newTheme === 'Summer')
      || (newTheme === 'Winter')) {
      this.myTheme = newTheme;
    } else {
      console.log(`Invalid theme '${newTheme}' ignoring.`);
    }
  }

  set application(value: string) {
    this._application = value;
    switch (this.application.toLowerCase()) {
      case 'nadin':
        this.myAppLogo = 'nadin-logo.gif';
        break;
      case 'ldb':
        this.myAppLogo = 'ldb.png';
        break;
      case 'vw':
        this.myAppLogo = 'vw.png';
        break;
      default:
        console.error(`Unknown application ${this.application}`);
        break;
    }
    console.log(this.application.toLowerCase());
    console.log(this.myAppLogo);
  }

  private _application: string;


  get application(): string {
    if (!this._application) {
      this._application = 'Nadin';
    }
    return this._application;
  }

  private generateRandomTheme(): string {

    const now = new Date();
    if (now.getMonth() === 3) {
      return 'Easter';
    } else if (now.getMonth() >= 11 || now.getMonth() <= 0) {
      return 'Winter';
    } else if (now.getMonth() >= 5 && now.getMonth() <= 9) {
      return 'Summer';
    }
    return 'Spring';
  }
}
