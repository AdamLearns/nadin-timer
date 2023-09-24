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
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {NadinLogoComponent} from './components/nadin-logo/nadin-logo.component';
import {FakeStatusComponent} from './components/fake-status/fake-status.component';
import {FormsModule} from '@angular/forms';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {TimerProgressComponent} from "./components/timer-progress/timer-progress.component";

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
