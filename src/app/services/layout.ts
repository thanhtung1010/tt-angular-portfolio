import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'any'
})
export class LayoutService {

    get loading$(): BehaviorSubject<WritableSignal<boolean>> {
        return this._loading$;
    }
    set loading$(loading: boolean) {
        if (loading !== this._loading$.value()) {
            const value = this._loading$.value;
            value.set(loading);
            this._loading$.next(value);
        }
    }
    private readonly _loading$: BehaviorSubject<WritableSignal<boolean>> = new BehaviorSubject(signal(true));

    get nav$(): BehaviorSubject<WritableSignal<boolean>> {
        return this._nav$;
    }
    set nav$(nav: boolean) {
        if (nav !== this._nav$.value()) {
            const value = this._nav$.value;
            value.set(nav);
            this._nav$.next(value);
        }
    }
    private readonly _nav$: BehaviorSubject<WritableSignal<boolean>> = new BehaviorSubject(signal(false));

    get isBrowser(): WritableSignal<boolean> {
        return this._isBrowser;
    }
    set isBrowser(value: boolean) {
        if (value !== this._isBrowser()) {
            this._isBrowser.set(value);
        }
    }
    private _isBrowser = signal<boolean>(false);

    private readonly _hiddenClass: string = 'tfe-hidden-scroll';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser.set(isPlatformBrowser(this.platformId))
    }

    toggleScroll(selector: string) {
        const elm = document.querySelector(selector);
        if (elm) {
            const cls = elm.className;
            console.log(cls)
            if (cls.includes(this._hiddenClass)) {
                elm.className = cls.replace(this._hiddenClass, '').trim();
            } else {
                elm.className = [cls, this._hiddenClass].join(' ');
            }
        }
    }

    toggleNav() {
        const nav = !this.nav$.value();
        this.toggleScroll('app-root');
        this.nav$.next(signal(nav));
    }
}
