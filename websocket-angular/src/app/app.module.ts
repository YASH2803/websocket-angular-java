import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustompipePipe } from './custompipe.pipe';
import { LoginComponent } from './login/login.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from  '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { ReuabletableComponent } from './reuabletable/reuabletable.component';
import { MatTableModule } from '@angular/material/table';
import { WsockdemoComponent } from './wsockdemo/wsockdemo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    LoginComponent,
    TestcompComponent,
    ReuabletableComponent,
    WsockdemoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
