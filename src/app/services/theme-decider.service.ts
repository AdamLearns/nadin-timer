import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeDeciderService {
  constructor() {
    this.myAppLogo = 'nadin-logo.gif';
    // this.myAppLogo = 'ldb.png';
  }

  private myAppLogo: string;
  public application: string;

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
    if (newTheme === 'Winter') {
      this.myTheme = newTheme;
    } else if (newTheme === 'Easter') {
      this.myTheme = newTheme;
    } else if (newTheme === 'Spring') {
      this.myTheme = newTheme;
    } else if (newTheme === 'Summer') {
      this.myTheme = newTheme;
    } else {
      console.log(`Invalid theme '${newTheme}' ignoring.`);
    }
    console.log(`Using theme '${this.myTheme}'.`);
  }

  private generateRandomTheme(): string {

    const now = new Date();
    if (now.getMonth() === 3) {
      return 'Easter';
    } else if (now.getMonth() >= 11 || now.getMonth() <= 0) {
      return 'Winter';
    } else if (now.getMonth() >= 4 || now.getMonth() <= 9) {
      return 'Summer';
    }
    return 'Spring';
  }
}
