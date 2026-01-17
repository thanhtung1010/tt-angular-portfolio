import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '@services';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
})
export class FooterComponent implements OnInit {

    private readonly _layoutService = inject(LayoutService);
    protected host: WritableSignal<string> = signal('');

    constructor() {}

    ngOnInit(): void {
        if (this._layoutService.isBrowser()) {
            this.host.set(location.host);
        }
    }
}
