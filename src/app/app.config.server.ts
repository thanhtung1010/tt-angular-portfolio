import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './components/interceptors/lottie.interceptor';

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(withRoutes(serverRoutes)),
        provideLottieOptions({
            player: () => player,
        }),
        provideHttpClient(
            withInterceptors([
                customInterceptor,
            ])
        ),
    ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
