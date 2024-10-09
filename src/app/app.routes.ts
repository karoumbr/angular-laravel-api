import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [  {
    path: '', component:ProductsComponent,
  }, {
    path: 'edit/:id', component:ProductEditComponent
  }
];

