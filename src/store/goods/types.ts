export type GoodStatusColor = 'blue' | 'green' | 'red';

export type Pages = 'top' | 'new' | 'best';

export interface Good  {
    img: string;
    page: Pages;
    statusText: string;
    statusColor: GoodStatusColor;
    type?: 'chair' | 'sofa';
    oldPrice?: string;
    newPrice?: string;
}

export interface Page {
    key: Pages;
    label: string;
}

export interface GoodsStateType {
    goods: Good[];
    pages: Page[];
    currentPage: Pages;
}

