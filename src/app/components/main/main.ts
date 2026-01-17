import { Component, OnInit, signal } from '@angular/core';
import { BUCKET_LIST_DATA } from '@data';
import { ArraySignal, IBucketListItem } from '@interfaces';
import { SvgLoaderComponent } from '../svg-loader/svg-loader';
import { URLLayoutComponent } from '../url-layout/url-layout';
import { InterestsMapComponent } from '../interests-map/interests-map';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    imports: [SvgLoaderComponent, URLLayoutComponent, InterestsMapComponent],
})
export class MainComponent implements OnInit {
    protected readonly svgChat = signal('/assets/svg/chat.svg');
    protected readonly mailToHref = signal(
        'mailto:trinhthanhtung1010@gmail.com?Subject=Hi!&body=I%20saw%20you%20on%20your%20portfolio.'
    );
    // protected readonly maxCol: number = 3;
    protected readonly bucketItems: ArraySignal<IBucketListItem> = BUCKET_LIST_DATA.clone();

    constructor() {}

    ngOnInit() {
        // this._splitBucketItems();
    }

    // private _splitBucketItems() {
    //     const bucketItems = BUCKET_LIST_DATA.clone();
    //     const length = bucketItems.length();
    //     const colLength = Math.ceil(length / this.maxCol);
    //     for (let i = 0; i < colLength; i++) {
    //         const colItems = bucketItems.slice(i * this.maxCol, (i + 1) * this.maxCol);
    //         this.bucketItems.push(colItems());
    //     }
    // }
}
