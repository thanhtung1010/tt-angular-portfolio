import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ISocialNetwork } from '../../interfaces/common.interface';
import { URLLayoutComponent } from '../url-layout/url-layout.component';
import { Location } from '@angular/common';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    imports: [URLLayoutComponent],
})
export class FooterComponent implements OnInit {

    private _location = inject(Location);
    protected host = signal(this._location.path);
    protected readonly svgLogo = signal('/assets/svg/logo-full.svg');
    protected readonly socialNetworks: WritableSignal<ISocialNetwork[]> = signal([
        {
            name: 'facebook-logo.svg',
            src: 'assets/svg/facebook-logo.svg',
            type: 'svg',
            href: 'https://www.facebook.com/trinh.thanhtung.967',
            action: 'url',
        },
        {
            name: 'instagram-logo.svg',
            src: 'assets/svg/instagram-logo.svg',
            type: 'svg',
            href: 'https://www.instagram.com/trinhthanhtung1010/',
            action: 'url',
        },
        {
            name: 'linkedin-logo.svg',
            src: 'assets/svg/linkedin-logo.svg',
            type: 'svg',
            href: 'https://www.linkedin.com/in/tung-trinh-frontend',
            action: 'url',
        },
        {
            name: 'github-logo.svg',
            src: 'assets/svg/github-logo.svg',
            type: 'svg',
            href: 'https://www.github.com/thanhtung1010',
            action: 'url',
        },
    ]);

    constructor() {}

    ngOnInit() {
    }
}
