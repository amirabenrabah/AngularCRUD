import { Offer } from "../offer.model";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromRoot from "../../state/app-state";
import * as offerActions from "./offer.actions";

 export interface OfferState extends EntityState<Offer> {
   selectedOfferId: number | null;
   loading: boolean;
   loaded: boolean;
   error: string;
 }

 export interface AppState extends fromRoot.AppState {
  offers: OfferState;
}
export const offerAdapter: EntityAdapter<Offer> = createEntityAdapter<
  Offer
>();

export const defaultOffer: OfferState = {
  ids: [],
  entities: {},
  selectedOfferId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = offerAdapter.getInitialState(defaultOffer);


export function OfferReducer(
  state = initialState,
  action: offerActions.SettingsAction
): OfferState {
  switch (action.type) {

    case  offerActions.OfferActionTypes.LOAD_OFFERS_SUCCESS: {
      return offerAdapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case  offerActions.OfferActionTypes.LOAD_OFFERS_FAIL: {
      return  {
        ...state,
        entities:{},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }






    case  offerActions.OfferActionTypes.LOAD_OFFER_SUCCESS: {
      return offerAdapter.addOne(action.payload, {
        ...state,
       selectedOfferId: action.payload.id
      });
    }
    case  offerActions.OfferActionTypes.LOAD_OFFER_FAIL: {
      return  {
        ...state,

        error: action.payload
      };
    }



    case  offerActions.OfferActionTypes.CREATE_OFFER_SUCCESS: {
      return offerAdapter.addOne(action.payload,state);
    }

    case  offerActions.OfferActionTypes.CREATE_OFFER_FAIL: {
      return  {
        ...state,

        error: action.payload
      };
    }



        case offerActions.OfferActionTypes.UPDATE_OFFER_SUCCESS: {
          return offerAdapter.updateOne(action.payload, state);
        }
        case offerActions.OfferActionTypes.UPDATE_OFFER_FAIL: {
          return {
            ...state,
            error: action.payload
          };
        }

        case offerActions.OfferActionTypes.DELETE_OFFER_SUCCESS: {
          return offerAdapter.removeOne(action.payload, state);
        }
        case offerActions.OfferActionTypes.DELETE_OFFER_FAIL: {
          return {
            ...state,
            error: action.payload
          };
        }



        /*case  offerActions.OfferActionTypes.LOAD_SEARCH_OFFERS_SUCCESS: {
          return offerAdapter.addMany(action.payload, {
            ...state,
            loading: false,
            loaded: true
          });
        }
        case  offerActions.OfferActionTypes.LOAD_SEARCH_OFFERS_FAIL: {
          return  {
            ...state,
            entities:{},
            loading: false,
            loaded: false,
            error: action.payload
          };
        }*/

    default:{
      return state;
    }
  }
  }

  const getOfferFeatureState = createFeatureSelector<OfferState>(
    "offers"
  );

export const getOffers = createSelector(
  getOfferFeatureState,
  offerAdapter.getSelectors().selectAll
);
export const getOffersLoading = createSelector(
  getOfferFeatureState,
  (state:OfferState)=>state.loading
);
export const getOffersLoaded = createSelector(
  getOfferFeatureState,
  (state:OfferState)=>state.loaded
);
export const getError = createSelector(
  getOfferFeatureState,
  (state:OfferState)=>state.error
);
export const getCurrentOfferId = createSelector(
  getOfferFeatureState,
  (state: OfferState) => state.selectedOfferId
);
export const getCurrentOffer = createSelector(
  getOfferFeatureState,
  getCurrentOfferId,
  state => state.entities[state.selectedOfferId]
);

 /*export const selectOfferByname = createSelector(
  getOffers,
  (all : Offer[], props) => {
    const { name} = props;
    return all.filter((a : Offer[],) => a.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
} )*/
