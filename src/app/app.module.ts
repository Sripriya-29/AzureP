import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemregComponent } from './memreg/memreg.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitclaimComponent } from './submitclaim/submitclaim.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AvailableclaimComponent } from './availableclaim/availableclaim.component';
import { AdddependentComponent } from './adddependent/adddependent.component';
import { DateValidatorDirective } from './directives/date-validator.directive';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MemregComponent,
    SubmitclaimComponent,
    SearchComponent,
    LoginComponent,
    AvailableclaimComponent,
    AdddependentComponent,
    DateValidatorDirective,
    HomeComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
