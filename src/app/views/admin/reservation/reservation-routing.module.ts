import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { FiltrageComponent } from './filtrage/filtrage.component';

const routes: Routes = [ {path: "", component: ReservationComponent},{ path:'Filtrer', component: FiltrageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
