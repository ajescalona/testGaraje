import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTestComponent } from './home-test/home-test.component';
import { HomeTest2Component } from './home-test2/home-test2.component';


const routes: Routes = [
  {
    path: 'homeTest1',
    component: HomeTestComponent
  },
  {
    path: 'homeTest2',
    component: HomeTest2Component
  },
  {
    path: '**',
    redirectTo: 'homeTest1'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
