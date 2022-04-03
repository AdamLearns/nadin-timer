import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeDeciderService {
  set theme(value: string) {
    this._theme = value;
  }

  private _theme: string;


  get theme(): string {
    if (!this._theme) {
      this._theme = this.generateRandomTheme();
    }
    return this._theme;
  }

  public setIfValid(newTheme: string): void {
    if (!newTheme){
      return;
    }
    if (newTheme == 'Winter') {
      this._theme = newTheme;
    } else if (newTheme == 'Easter') {
      this._theme = newTheme;
    } else if (newTheme == 'Spring') {
      this._theme = newTheme;
    } else {
      console.log(`Invalid theme '${newTheme}' ignoring.`)
    }
  }

  private generateRandomTheme(): string {

    const now = new Date();
    if (now.getMonth() === 3) {
      return 'Easter';
    } else if (now.getMonth() >= 11 || now.getMonth() <= 0) {
      return 'Winter';
    }
    return 'Spring';
  }
}
