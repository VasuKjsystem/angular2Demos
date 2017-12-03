import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppProduct } from './products/product.component';
import { AppInventory } from './inventory/inventory.component';
import { productlist } from './bank/productlist.component';
import { PageNotFound } from './notFound.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Product', component: AppProduct },
   { path: 'Inventory', component: AppInventory },
   { path: 'productlist', component: productlist },
   { path: '***', component: PageNotFound }
]; 

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,AppProduct,AppInventory,productlist,PageNotFound],
  bootstrap:    [ AppComponent]
})
export class AppModule { }


