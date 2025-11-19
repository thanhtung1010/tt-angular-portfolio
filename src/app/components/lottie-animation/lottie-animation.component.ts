import { Component, OnInit, signal } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { DotLottie } from '@lottiefiles/dotlottie-web';

@Component({
    selector: 'app-lottie-animation',
    templateUrl: './lottie-animation.component.html',
    styleUrls: ['./lottie-animation.component.scss'],
    imports: [
        LottieComponent,
    ]
})
export class LottieAnimationComponent implements OnInit {
    protected readonly options = signal<DotLottie | null>(null);
    // protected readonly options = signal<AnimationOptions>({
    //     path: 'https://lottie.host/9b524a98-c3d4-415f-b4f3-a79bf4c3d395/b1FArc0UlB.lottie',
    //     autoplay: true,
    //     loop: true,
    //     renderer: 'svg',
    //     container
    // }).asReadonly();
    protected viewAnimation = signal<boolean>(false);

    constructor() {}

    ngOnInit() {
        this.viewAnimation.set(true);
        const canvas: HTMLCanvasElement | null = document?.querySelector('#dotlottie-canvas');
        if (canvas) {
            const dotlottie: DotLottie = new DotLottie({
                src: "https://lottie.host/9b524a98-c3d4-415f-b4f3-a79bf4c3d395/b1FArc0UlB.lottie",
                autoplay: true,
                loop: true,
                canvas: canvas,
            })
            this.options.set(dotlottie);
        }
    }

    animationCreated(event: AnimationItem) {
        console.log(event);
    }
}
