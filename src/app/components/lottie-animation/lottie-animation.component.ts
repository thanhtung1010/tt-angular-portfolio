import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    Inject,
    Input,
    OnChanges,
    OnInit,
    PLATFORM_ID,
    signal,
    SimpleChanges,
    ViewChild,
    WritableSignal,
} from '@angular/core';
import { Config, DotLottie } from '@lottiefiles/dotlottie-web';
import { LayoutService } from '../../services/layout.service';

@Component({
    selector: 'lottie-animation',
    templateUrl: './lottie-animation.component.html',
    imports: [
    ]
})
export class LottieAnimationComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('dotlottieCanvas') dotlottieCanvas!: ElementRef<HTMLCanvasElement>;
    @Input() config!: Omit<Config, 'canvas'> | string;

    @Input()
    get width(): number {
        return this._width();
    }
    set width(width: any) {
        width = Number.isNaN(+width) ? this._defaultWidth : +width;
        this._width.set(width);
    }
    private _width: WritableSignal<number> = signal(300);

    @Input()
    get height(): number {
        return this._height();
    }
    set height(height: any) {
        height = Number.isNaN(+height) ? this._defaultHeight : +height;
        this._height.set(height);
    }
    private _height: WritableSignal<number> = signal(300);

    private readonly _layoutService = inject(LayoutService);
    private _dotLottie: WritableSignal<DotLottie | null> = signal(null);
    private _canvas: WritableSignal<HTMLCanvasElement | null> = signal(null);;
    private _config: WritableSignal<Omit<Config, 'canvas'>> = signal({});;
    private readonly _defaultWidth: number = 300;
    private readonly _defaultHeight: number = 300;
    protected readonly defaultConfig: Omit<Config, 'canvas'> = {
        autoplay: true,
        loop: true,
    };

    constructor() {}

    ngOnInit() {
        this.loadLottie();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['config'] && this.config) {
            this.loadLottie();
        }
    }

    ngAfterViewInit(): void {
        this.loadLottie();
    }

    initLottie() {
        if (this._layoutService.isBrowser()) {
            const canvas = this.dotlottieCanvas?.nativeElement;
            if (canvas) {
                this._canvas.set(canvas);
                this._dotLottie.set(new DotLottie({
                    ...this._config(),
                    canvas,
                }));
            }
        }
    }

    loadLottie() {
        this._combineConfig();
        if (!this._dotLottie()) {
            this.initLottie();
        } else {
            this._dotLottie()?.load({...this._config()});
        }
    }

    private _combineConfig() {
        const defaultConfig = {
            ...this.defaultConfig,
        };
        if (typeof this.config === 'string') {
            this._config.set({
                ...defaultConfig,
                src: this.config,
            });
        } else {
            this._config.set({
                ...defaultConfig,
                ...this.config,
            });
        }
    }
}
