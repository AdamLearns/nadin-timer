import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {StatusLogoComponent} from './components/status-logo/status-logo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimeSelectComponent} from './components/time-select/time-select.component';
import {RunTimerComponent} from './components/run-timer/run-timer.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {faBullhorn, faClock, faHistory} from '@fortawesome/free-solid-svg-icons';
import {NadinLogoComponent} from './components/nadin-logo/nadin-logo.component';
import {FakeStatusComponent} from './components/fake-status/fake-status.component';
import {FormsModule} from '@angular/forms';
import {TimerProgressComponent} from "./components/timer-progress/timer-progress.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    StatusLogoComponent,
    TimeSelectComponent,
    RunTimerComponent,
    NadinLogoComponent,
    FakeStatusComponent,
    TimerProgressComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatTooltipModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faClock, faHistory, faBullhorn);
  }
}
