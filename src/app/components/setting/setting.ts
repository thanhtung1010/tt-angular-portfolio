import { Component, DestroyRef, inject, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ILottieConfig } from '@interfaces';
import { LanguageService, LayoutService } from '@services';
import { LottieAnimationComponent } from '../lottie-animation/lottie-animation';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';
import { TranslatePipe } from '@ngx-translate/core';
import { LangToggleComponent } from '../lang-toggle/lang-toggle';

@Component({
    selector: 'setting',
    templateUrl: './setting.html',
    imports: [LottieAnimationComponent, ThemeToggleComponent, LangToggleComponent, TranslatePipe],
})
export class SettingComponent implements OnInit {
    @ViewChild('rollingCat') lottieAnimation!: LottieAnimationComponent;

    protected readonly visibleSetting = signal(false);
    private readonly _destroyRef = inject(DestroyRef);
    protected readonly layoutService = inject(LayoutService);
    protected readonly langService = inject(LanguageService);
    protected readonly lottie: WritableSignal<ILottieConfig> = signal({
        src: 'https://lottie.host/23a6234e-15a8-4525-a318-fd223f51eb4d/EOWggRjGh8.lottie',
        loop: false,
        autoplay: false,
    });

    constructor() {}

    ngOnInit() {
        this.layoutService.setting$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(resp => {
            this.visibleSetting.set(resp);
        });
    }

    toggleExpandSetting() {
        this.layoutService.toggleSetting();
        this.lottieAnimation?.play();
    }
}
