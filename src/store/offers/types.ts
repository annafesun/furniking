import {GoodStatusColor} from "../goods/types";

export interface OfferStateType {
    offers: Offer[]
}

export interface Offer {
    imgBG: string;
    statusText: string;
    statusColor: GoodStatusColor;
    oldPrice?: number;
    newPrice?: number;
}