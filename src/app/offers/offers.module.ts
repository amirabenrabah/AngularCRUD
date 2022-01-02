import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { OfferReducer } from "./state/offer.reducer";
import { OfferEffect } from "./state/offer.effects";
import { EffectsModule, Actions } from "@ngrx/effects";
import { OfferComponent } from './offer/offer.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
 import { SearchfilterPipe } from './all-offers/searchfilter.pipe';

const OfferRoutes: Routes = [
  { path:"", component :  OfferComponent}
 ];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(OfferRoutes),
    StoreModule.forFeature("offers",  OfferReducer),
    EffectsModule.forFeature([OfferEffect])
  ],
  declarations: [
    OfferComponent,
    AddOfferComponent,
    UpdateOfferComponent,
     AllOffersComponent,
    SearchfilterPipe
  ]

})
export class OffersModule { }
