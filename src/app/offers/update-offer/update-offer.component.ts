import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as offerActions from "../state/offer.actions";
import * as fromOffer from "../state/offer.reducer";
import { Offer } from "../offer.model";

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
  offerForm: FormGroup;


  constructor(
     private fb: FormBuilder,
    private store: Store<fromOffer.AppState>) { }

    ngOnInit() {
      this.offerForm = this.fb.group({
        name: ["", Validators.required],
        villeD: ["", Validators.required],
        villeA: ["", Validators.required],
        dateO: ["", Validators.required],
        id: null
      })

      const offer$: Observable<Offer> = this.store.select(
        fromOffer.getCurrentOffer
      )

      offer$.subscribe(currentOffer => {
        if (currentOffer) {
          this.offerForm.patchValue({
            name: currentOffer.name,
            villeD: currentOffer.villeD,
            villeA: currentOffer.villeA,
            dateO: currentOffer.dateO,
            id: currentOffer.id
          });
        }
      })
    }

    updateOffer() {
      const updatedOffer: Offer = {
        name: this.offerForm.get("name").value,
        villeD: this.offerForm.get("villeD").value,
        villeA: this.offerForm.get("villeA").value,
        dateO: this.offerForm.get("dateO").value,
        id: this.offerForm.get("id").value
      };

      this.store.dispatch(new offerActions.UpdateOffer(updatedOffer))
      this.offerForm.reset();
    }

}
