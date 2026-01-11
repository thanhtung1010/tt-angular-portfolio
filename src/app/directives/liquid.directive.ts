import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { LayoutService } from "@services";

@Directive({
    selector: '[liquid]'
})
export class LiquidDirective implements OnInit {
    private readonly _liquidWrap = 'tfe-liquid';
    private readonly _liquidStyle: string[] = [
        'tfe-liquid-effect',
        'tfe-liquid-tint',
        'tfe-liquid-shine',
    ];
    private readonly _element: ElementRef<HTMLElement> = inject(ElementRef);
    private readonly _layoutService = inject(LayoutService);

    constructor() {}

    ngOnInit(): void {
        if (this._layoutService.isBrowser()) {
            this.mapLiquidStyle();
        }
    }

    mapLiquidStyle() {
        this.addLiquidClass();
        this.addBGElement();
    }

    addLiquidClass() {
        const cls = this._element.nativeElement.className;
        this._element.nativeElement.className = [cls, this._liquidWrap].join(' ');
    }

    addBGElement() {
        const time = new Date().valueOf();
        const styleElms: HTMLDivElement[] = this._liquidStyle.map(style => {
            const div = document.createElement('div');
            const id = `${style}-${time}`;
            div.setAttribute('id', id);
            div.setAttribute('class', style);

            return div;
        });
        this._element.nativeElement.prepend(...styleElms);
    }
}
