import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurframeworkComponent } from './components/ourframework/ourframework.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseComponent } from './components/course/course.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import {ValidateService} from './services/validate.service';
import {AuthService } from "./services/auth.service";
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from "./guards/auth.guard";
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CollapseModule } from 'ngx-bootstrap';
import { PaymentreceiptComponent } from './components/paymentreceipt/paymentreceipt.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

//safe piping for videos to dynamically load in iframe
import { SafePipe } from './components/course/safe.pipe';
import { ContactusComponent } from './components/contactus/contactus.component';

import { InlineEditComponent } from './components/inline-edit/inline-edit.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'products', component: DashboardComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'support', component: SupportComponent},
  {path:'ourframework', component: OurframeworkComponent},
  { path: 'course', component: CourseComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'editproduct', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'paymentreceipt', component: PaymentreceiptComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddProductComponent,
    EditProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    PaymentreceiptComponent,
    CourseComponent,
    AboutusComponent,
    OurframeworkComponent,
    ContactusComponent,
    SupportComponent,
    InlineEditComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    //NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CollapseModule,
    HttpClientModule
  ],
  providers: [ValidateService,AuthService,AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
