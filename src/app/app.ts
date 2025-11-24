import {
    AfterViewInit,
    Component,
    DestroyRef,
    inject,
    signal,
    WritableSignal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LottieAnimationComponent } from './components/lottie-animation/lottie-animation.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutService } from './services/layout.service';

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

        const _timeout = setTimeout(() => {
            this._layoutService.loading$ = !this.loading();
            clearTimeout(_timeout);
        }, 2000);
    }
}
