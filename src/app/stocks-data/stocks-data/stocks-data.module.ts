import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksDataComponent } from './stocks-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StocksDataComponent
  }
];

@NgModule({
  declarations: [ StocksDataComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class StocksDataModule { }
