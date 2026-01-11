import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ISocialNetwork } from '@interfaces';
import { Location } from '@angular/common';
import { SvgLoaderComponent } from '../svg-loader/svg-loader.component';
import { URLLayoutComponent } from '../url-layout/url-layout.component';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    imports: [URLLayoutComponent, SvgLoaderComponent],
})
export class FooterComponent implements OnInit {

    private _location = inject(Location);
    protected host = signal(this._location.path);
    protected readonly mailToHref = signal('mailto:trinhthanhtung1010@gmail.com?Subject=Let%20Connect!!!&body=Hi!%20I%20saw%20you%20on%20your%20portfolio.');
    protected readonly svgChat = signal('/assets/svg/chat.svg');
    protected readonly svgLogo = signal('/assets/svg/logo.svg');
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
