import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'cart', component: CartComponent},
]
