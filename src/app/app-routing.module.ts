import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTestComponent } from './home-test/home-test.component';


const routes: Routes = [
  {
    path: 'homeTest',
    component: HomeTestComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
