import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WsockdemoComponent } from './wsockdemo/wsockdemo.component';

const routes: Routes = [{
  path:'wsdemo',
  component:WsockdemoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
