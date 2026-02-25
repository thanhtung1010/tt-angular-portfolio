import { BUCKET_LIST_STATUS } from "@enums";

export interface IBucketListItem {
    text: string;
    status: BUCKET_LIST_STATUS;
    svg: string;
    color: string;
}

export type IBucketListItem2026 = Omit<IBucketListItem, 'svg'>;
