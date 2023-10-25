import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { RegistrationPageComponent } from './registrationpage/registrationpage.component';
import { LocationComponent } from './location/location.component';
import { SelectPageComponent } from './select-page/select-page.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { AuthGuard } from './auth.guard';
import { ConfigurationComponent } from './configuration/configuration.component';


const routes: Routes = [
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'selectpage', component: SelectPageComponent },
  { path: 'location', component: LocationComponent,canActivate: [AuthGuard] },
  { path: 'ProductSelection', component: ProductSelectionComponent,canActivate: [AuthGuard] },
  { path: 'Configuration', component: ConfigurationComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/selectpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

