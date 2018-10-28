import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';


const APP_ROUTES: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'graficas1', component: Graficas1Component},
        {path: 'progress', component: ProgressComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }

];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
