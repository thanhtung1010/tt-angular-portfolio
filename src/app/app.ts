import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LottieAnimationComponent } from './components/lottie-animation/lottie-animation.component';

@Component({
    selector: 'tt-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [
        RouterOutlet,
        LottieAnimationComponent,
    ],
})
export class App {
    protected readonly title = signal('tt-angular-portfolio');
}
