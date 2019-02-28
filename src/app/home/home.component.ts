import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../geolocation.service';

@Component({
    selector: 'app-home',
    template: `
        <img [src]="image">
        <h3 i18n>Hello i18n!</h3>
        <b>userLanguage:</b> {{userLanguage}}<br/>
        <b>userCountry:</b> {{userCountry}}<br/>
        <b>currency:</b>  {{number | currency:'EUR': 'symbol' }}<br/>
        <b>Today is</b> {{today | date}}<br/>
        <b>Or if you prefer,</b> {{today | date:'fullDate'}}<br/>
        <b>The time is</b> {{today | date:'h:mm a z'}}<br/>
    `
})
export class HomeComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
    public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';
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
