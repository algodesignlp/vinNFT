import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinsComponent } from './vins/vins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VinDetailComponent } from './vin-detail/vin-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'vins', component: VinsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: VinDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
