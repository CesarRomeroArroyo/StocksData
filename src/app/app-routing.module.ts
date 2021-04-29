import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'stock',
    pathMatch: 'full'
  },
  {
    path: 'stock',
    loadChildren: () => import('./stocks-data/stocks-data/stocks-data.module').then(m => m.StocksDataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
