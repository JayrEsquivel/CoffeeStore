import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {OrdersFormsComponent} from  './order-form/orders-forms.component';


const routes: Routes = [
    {path: 'koopetearia-angular', component: OrdersFormsComponent },
    { path: '', redirectTo: 'koopetearia-angular', pathMatch: 'full' },
    
     {path: '**' , component:PageNotFoundComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = [ OrdersFormsComponent] 
{

}

