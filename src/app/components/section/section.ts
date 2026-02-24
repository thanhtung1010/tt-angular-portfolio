import { Component, input, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'section',
    templateUrl: './section.html',
    imports: [TranslatePipe],
})
export class SectionComponent implements OnInit {
    title = input<string>();

    protected readonly extend = signal(true);

    constructor() {}

    ngOnInit() {}

    toggleExtend() {
        this.extend.update(value => !value);
    }
}
