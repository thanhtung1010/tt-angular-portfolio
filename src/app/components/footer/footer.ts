import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { LayoutService } from '@services';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    imports: [TranslatePipe],
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
