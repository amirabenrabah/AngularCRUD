import {Action} from "@ngrx/store";
import { Update } from "@ngrx/entity";
import {Offer, OfferSearch} from "../offer.model";

export enum OfferActionTypes{
LOAD_OFFERS="[Offer] Load Offers",
 LOAD_OFFERS_SUCCESS="[Offer] Load Offers Succes",
LOAD_OFFERS_FAIL="[Offer] Load Offers FAIL",
LOAD_OFFER="[Offer] Load Offer",
LOAD_OFFER_SUCCESS="[Offer] Load Offer Succes",
LOAD_OFFER_FAIL="[Offer] Load Offer FAIL",
CREATE_OFFER="[Offer] Create Offer",
CREATE_OFFER_SUCCESS="[Offer] Create Offer Succes",
CREATE_OFFER_FAIL="[Offer] Create Offer FAIL",
UPDATE_OFFER="[Offer] Update Offer",
UPDATE_OFFER_SUCCESS="[Offer] Update Offer Succes",
UPDATE_OFFER_FAIL="[Offer] Update Offer FAIL",
DELETE_OFFER="[Offer] Delete Offer",
DELETE_OFFER_SUCCESS="[Offer] Delete Offer Succes",
DELETE_OFFER_FAIL="[Offer] Delete Offer FAIL",
SEARCH_OFFERS= "[Offer] Search Offers",
LOAD_SEARCH_OFFERS_SUCCESS= "[Offer] Load Search Offers Success",
LOAD_SEARCH_OFFERS_FAIL="[Offer] Load Search Offers Fail",
}
export class  LoadOffers implements Action {
 readonly type = OfferActionTypes.LOAD_OFFERS;
}

export class  LoadOffersSuccess implements Action {
 readonly type = OfferActionTypes.LOAD_OFFERS_SUCCESS;

 constructor(public payload: Offer[] ){}
}

export class  LoadOffersFail implements Action {
 readonly type = OfferActionTypes.LOAD_OFFERS_FAIL;
 constructor(public payload: string){}
}



export class  LoadOffer implements Action {
 readonly type = OfferActionTypes.LOAD_OFFER;
 constructor(public payload: number) {}
}

export class  LoadOfferSuccess implements Action {
 readonly type = OfferActionTypes.LOAD_OFFER_SUCCESS;

 constructor(public payload: Offer ){}
}

export class  LoadOfferFail implements Action {
 readonly type = OfferActionTypes.LOAD_OFFER_FAIL;
 constructor(public payload: string){}
}

export class CreateOffer implements Action {
 readonly type = OfferActionTypes.CREATE_OFFER;

 constructor(public payload: Offer) {}
}

export class CreateOfferSuccess implements Action {
 readonly type = OfferActionTypes.CREATE_OFFER_SUCCESS;

 constructor(public payload: Offer) {}
}

export class CreateOfferFail implements Action {
 readonly type = OfferActionTypes.CREATE_OFFER_FAIL;

 constructor(public payload: string) {}
}



export class UpdateOffer implements Action {
 readonly type = OfferActionTypes.UPDATE_OFFER;

 constructor(public payload: Offer) {}
}

export class UpdateOfferSuccess implements Action {
 readonly type = OfferActionTypes.UPDATE_OFFER_SUCCESS;

 constructor(public payload: Update<Offer>) {}
}

export class UpdateOfferFail implements Action {
 readonly type = OfferActionTypes.UPDATE_OFFER_FAIL;

 constructor(public payload: string) {}
}





export class DeleteOffer implements Action {
 readonly type =OfferActionTypes.DELETE_OFFER;

 constructor(public payload: number) {}
}

export class DeleteOfferSuccess implements Action {
 readonly type = OfferActionTypes.DELETE_OFFER_SUCCESS;

 constructor(public payload: number) {}
}

export class DeleteOfferFail implements Action {
 readonly type = OfferActionTypes.DELETE_OFFER_FAIL;

 constructor(public payload: string) {}
}


export class SearchOffers implements Action {
 readonly type =  OfferActionTypes.SEARCH_OFFERS;
 constructor(public payload: OfferSearch){}

}

export class LoadSearchOffersSuccess implements Action {
 readonly type = OfferActionTypes.LOAD_SEARCH_OFFERS_SUCCESS;
 constructor(public payload: Offer[]) { }
}

export class LoadSearchOffersFail implements Action {
 readonly type = OfferActionTypes.LOAD_SEARCH_OFFERS_FAIL;
 constructor(public payload: string) { }
}

export type SettingsAction = LoadOffers
 | LoadOffersSuccess
 | LoadOffersFail
 | LoadOffer
 | LoadOfferSuccess
 | LoadOfferFail
 | CreateOffer
 | CreateOfferSuccess
 | CreateOfferFail
 | UpdateOffer
 | UpdateOfferSuccess
 | UpdateOfferFail
 | DeleteOffer
 | DeleteOfferSuccess
 | DeleteOfferFail
 | SearchOffers
 | LoadSearchOffersFail
 | LoadSearchOffersSuccess;
