import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';


const routes: Routes = [
  //Producto
  {
    path: "punto1", component: Punto1Component
  },
  
  ///TICKET
  {path:"mostrar-tickets", component: TicketComponent},
  {path:"form-ticket/:id", component: FormTicketComponent},
  //DIVISAS
  {path:"divisas",component:TransaccionComponent},
  {path: "buscar", component:BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
