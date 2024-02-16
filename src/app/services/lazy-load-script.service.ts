import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ICustomAttributeLazyLoadScript } from '@app/interfaces';
import { size } from 'lodash';

@Injectable()
export class LazyLoadScriptService {
    loadedLibraries: { [url: string]: ReplaySubject<void> } = {};

    constructor(@Inject(DOCUMENT) private readonly document: Document) { }

    loadScript(url: string, customAttribute?: ICustomAttributeLazyLoadScript): Observable<void> {
        if (this.loadedLibraries[url]) {
            return this.loadedLibraries[url].asObservable();
        }

        this.loadedLibraries[url] = new ReplaySubject();

        const script: HTMLScriptElement = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        if (customAttribute && size(customAttribute)) {
          script.defer = customAttribute.isCustomElements;

          // do something else
        }

        script.onload = () => {
            this.loadedLibraries[url].next();
            this.loadedLibraries[url].complete();
        };

        this.document.body.appendChild(script);

        return this.loadedLibraries[url].asObservable();
    }
}