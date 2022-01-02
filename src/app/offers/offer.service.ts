import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Offer } from "./offer.model";

@Injectable({
  providedIn: "root"
})
export class OfferService {
  private offersUrl = "http://localhost:3000/offers";

  constructor(private http: HttpClient) {}

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offersUrl);
  }

  getOfferById(payload: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.offersUrl}/${payload}`);
  }

  createOffer(payload: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.offersUrl, payload);
  }

  updateOffer(offer: Offer): Observable<Offer> {
    return this.http.patch<Offer>(
      `${this.offersUrl}/${offer.id}`,
      offer
    );
  }

  deleteOffer(payload: number) {
    return this.http.delete(`${this.offersUrl}/${payload}`);
  }

  SearchOffer(payload: string) : Observable<Offer>{
    return this.http.post<Offer>(this.offersUrl, payload);
  }
}
