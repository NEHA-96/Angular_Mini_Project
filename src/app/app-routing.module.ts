import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard';
import { ShoppingCartComponent } from './home/components/shopping-cart/shopping-cart.component'


const routes: Routes = [
    {path:'',redirectTo:'/shop',pathMatch:'full'},
    {path:'shop',component:ShoppingCartComponent},

{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'authguard', component: AuthguardGuard }

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }