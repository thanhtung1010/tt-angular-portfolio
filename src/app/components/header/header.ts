import { Component, DestroyRef, inject, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutService } from '@services';
import { ILottieConfig } from '../../interfaces/common';
import { LottieAnimationComponent } from '../lottie-animation/lottie-animation';

@Component({
    selector: 'header',
    templateUrl: './header.html',
})
export class HeaderComponent implements OnInit {
    @ViewChild(LottieAnimationComponent) lottieAnimation!: LottieAnimationComponent;

    protected readonly visibleNav = signal(false);
    protected readonly svgLogo = signal('/assets/svg/me.svg');
    protected readonly lottie: WritableSignal<ILottieConfig> = signal({
        src: 'https://lottie.host/23a6234e-15a8-4525-a318-fd223f51eb4d/EOWggRjGh8.lottie',
        loop: true,
        autoplay: false,
    });
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _layoutService = inject(LayoutService);

    constructor() {}

    ngOnInit() {
        this._layoutService.nav$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(resp => {
            this.visibleNav.set(resp());
        });
    }

    toggleVisibleNav() {
        this._layoutService.toggleNav();
        if (this._layoutService.nav$.value()) {
            this.lottieAnimation?.play();
        } else {
            this.lottieAnimation?.pause();
        }
    }
}
