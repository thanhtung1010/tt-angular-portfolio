import { Injectable, signal, WritableSignal } from "@angular/core";
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

    constructor() {}
}
