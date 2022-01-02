import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { filter } from 'rxjs/operators';
import { OfferService } from "../offer.service";
import * as offerActions from "../state/offer.actions";
import {Offer } from "../offer.model";
@Injectable()
export class OfferEffect {
  constructor(
    private actions$: Actions,
    private offerService: OfferService
  ) {}

  @Effect()
  LoadOffers$: Observable<Action> = this.actions$.pipe(
    ofType<offerActions.LoadOffers>(
      offerActions.OfferActionTypes.LOAD_OFFERS
    ),
    mergeMap((actions: offerActions.LoadOffers) =>
      this.offerService.getOffers().pipe(
        map(
          (offers: Offer[]) =>
            new offerActions.LoadOffersSuccess(offers)
        ),
        catchError(err => of(new offerActions.LoadOffersFail(err)))
      )
    )
  );



  @Effect()
  loadOffer$: Observable<Action> = this.actions$.pipe(
    ofType<offerActions.LoadOffer>(
      offerActions.OfferActionTypes.LOAD_OFFER
    ),
    mergeMap((action: offerActions.LoadOffer) =>
      this.offerService.getOfferById(action.payload).pipe(
        map(
          (offer: Offer) =>
            new offerActions.LoadOfferSuccess(offer)
        ),
        catchError(err => of(new offerActions.LoadOfferFail(err)))
      )
    )
  );

  @Effect()
  createOffer$: Observable<Action> = this.actions$.pipe(
    ofType<offerActions.CreateOffer>(
      offerActions.OfferActionTypes.CREATE_OFFER
    ),
    map((action: offerActions.CreateOffer) => action.payload),
    mergeMap((offer:Offer) =>
      this.offerService.createOffer(offer).pipe(
        map(
          (newOffer: Offer) =>
            new offerActions.CreateOfferSuccess(newOffer)
        ),
        catchError(err => of(new offerActions.CreateOfferFail(err)))
      )
    )
  );

  @Effect()
  updateOffer$: Observable<Action> = this.actions$.pipe(
    ofType<offerActions.UpdateOffer>(
      offerActions.OfferActionTypes.UPDATE_OFFER
    ),
    map((action: offerActions.UpdateOffer) => action.payload),
    mergeMap((offer: Offer) =>
      this.offerService.updateOffer(offer).pipe(
        map(
          (updateOffer: Offer) =>
            new offerActions.UpdateOfferSuccess({
              id: updateOffer.id,
              changes: updateOffer
            })
        ),
        catchError(err => of(new offerActions.UpdateOfferFail(err)))
      )
    )
  );

  @Effect()
  deleteOffer$: Observable<Action> = this.actions$.pipe(
    ofType<offerActions.DeleteOffer>(
      offerActions.OfferActionTypes.DELETE_OFFER
    ),
    map((action: offerActions.DeleteOffer) => action.payload),
    mergeMap((id: number) =>
      this.offerService.deleteOffer(id).pipe(
        map(() => new offerActions.DeleteOfferSuccess(id)),
        catchError(err => of(new offerActions.DeleteOfferFail(err)))
      )
    )
  );



   /*@Effect()
    searchOffer$: Observable<Action>  = this.actions$.pipe(
        ofType<offerActions.SearchOffers>(

        offerActions.OfferActionTypes.SEARCH_OFFERS
    ) ,map((action: offerActions.SearchOffers) => action.payload)
    , mergeMap((name: string) =>
      this.offerService.selectBookByname(name).pipe(
        map(
          (offers: Offer[]) =>
            new offerActions.LoadSearchOffersSuccess(offers)
        ),
        catchError(err => of(new offerActions.LoadSearchOffersFail(err)))
      )
    ));*/




  /*@Effect()
  load$ = this.actions$
    .ofType(offerActions.LoadOffers)
      .pipe(
        mergeMap(() => {
          return this.offerService.getContentsFromApi()
            .pipe(
              map((offers: Offer[]) => {
                return new new offerActions.LoadSearchOffersSuccess(offers);
              }),
              catchError(() => {
                // do something
              })
            );
        })
    )
  ;*/

}
