import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../geolocation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public userLanguage: string;
    public userCountry: string;
    public number = 10000;
    public today = Date.now();


    constructor(
        private geolocation: GeolocationService,
    ) {
    }

    ngOnInit() {
        this.geolocation.getClientLocale().subscribe((data) => {
            this.userLanguage = data.language;
            this.userCountry = data.country;
        });
    }
}
