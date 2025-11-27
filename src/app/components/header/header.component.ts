import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { SvgLoaderComponent } from '../svg-loader/svg-loader.component';
import { LottieAnimationComponent } from '../lottie-animation/lottie-animation.component';
import { LiquidDirective } from '../../directives/liquid.directive';
import { LayoutService } from '../../services/layout.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    imports: [SvgLoaderComponent, LottieAnimationComponent, LiquidDirective],
})
export class HeaderComponent implements OnInit {

    protected readonly visibleNav = signal(false);
    protected readonly svgLogo = signal('/assets/svg/logo.svg');
    protected readonly lottie = signal(
        'https://lottie.host/23a6234e-15a8-4525-a318-fd223f51eb4d/EOWggRjGh8.lottie'
    );
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
    }
}
