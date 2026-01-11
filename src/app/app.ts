import {
    AfterViewInit,
    Component,
    DestroyRef,
    inject,
    signal,
    WritableSignal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    FooterComponent,
    HeaderComponent,
    LottieAnimationComponent,
    MainComponent,
    NavComponent,
} from '@components';
import { LayoutService } from '@services';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [
        HeaderComponent,
        MainComponent,
        FooterComponent,
        NavComponent,
        LottieAnimationComponent,
    ],
})
export class App implements AfterViewInit {
    private readonly _layoutService = inject(LayoutService);
    private readonly _destroyRef = inject(DestroyRef);
    protected readonly lottie = signal(
        'https://lottie.host/9b524a98-c3d4-415f-b4f3-a79bf4c3d395/b1FArc0UlB.lottie'
    );
    protected loading: WritableSignal<boolean> = signal(true);
    protected visibleNav: WritableSignal<boolean> = signal(false);

    constructor() {}

    ngAfterViewInit(): void {
        this._layoutService.loading$
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((resp) => {
                this.loading.set(resp());

                if (this._layoutService.isBrowser()) {
                    this._layoutService.toggleScroll('app-root');
                }
            });

        this._layoutService.nav$
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((resp) => {
                this.visibleNav.set(resp());
            });

        const _timeout = setTimeout(() => {
            this._layoutService.loading$ = !this.loading();
            clearTimeout(_timeout);
        }, 2000);
    }
}
