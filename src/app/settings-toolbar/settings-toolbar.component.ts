import {AfterViewInit, Component} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";
import {IntroJsService} from "../services/intro-js.service";

@Component({
    selector: 'app-settings-toolbar',
    templateUrl: './settings-toolbar.component.html',
    styleUrls: ['./settings-toolbar.component.scss']
})
export class SettingsToolbarComponent implements AfterViewInit {
    constructor(
        private translate: TranslocoService,
        private introService: IntroJsService
    ) {
    }


    public ngAfterViewInit(): void {
        // noinspection JSIgnoredPromiseFromCall
        this.introService.helpLanguage();
    }


    public isLanguage(target: string): boolean {
        return this.translate.getActiveLang() === target;
    }

    public changeLanguage(target: string): void {
        this.translate.setActiveLang(target);
    }
}
