import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";


import {MainPageComponent} from "./main-page/main-page.component";
const AppRoutes: Routes = [
  { path:"", component : MainPageComponent},
  {
    path: "offers",
     //loadChildren: "src/app/offers/offers.module#offersModule"
     loadChildren: () => import('src/app/offers/offers.module').then(m => m.OffersModule)
  },
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
