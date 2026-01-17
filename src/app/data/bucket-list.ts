import { BUCKET_LIST_STATUS } from "@enums";
import { IBucketListItem } from "@interfaces";
import { arraySignal } from "@signals";

export const BUCKET_LIST_DATA = arraySignal<IBucketListItem>([
    {
        text: 'Master English.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },
    {
        text: 'Learn BA.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Go 100% remote.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },
    {
        text: 'Ship a webapp.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },
    {
        text: 'Launch a startup.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Confident in public speaking.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Network more.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },

    {
        text: 'Learn 3D design.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },
    {
        text: 'Sell 3D prints.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },

    {
        text: 'Invest in stocks.',
        status: BUCKET_LIST_STATUS.COMPLETED,
        svg: '/assets/svg/checked.svg',
        color: 'text-green-500',
    },
    {
        text: 'Donate to VNF.',
        status: BUCKET_LIST_STATUS.COMPLETED,
        svg: '/assets/svg/checked.svg',
        color: 'text-green-500',
    },

    {
        text: 'Master billiards.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },
    {
        text: 'Master badminton.',
        status: BUCKET_LIST_STATUS.IN_PROGRESS,
        svg: '/assets/svg/check.svg',
        color: 'text-yellow-500',
    },

    {
        text: 'Write a rap song.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Travel Vietnam.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Viral on TikTok.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Help friends.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Make a movie.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },

    {
        text: 'Touch grass.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Build a house.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Go to the Moon.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
    {
        text: 'Meet you 🫵.',
        status: BUCKET_LIST_STATUS.TODO,
        svg: '/assets/svg/check.svg',
        color: 'text-gray-500',
    },
]);