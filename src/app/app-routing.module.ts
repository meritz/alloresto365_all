import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'localisation', loadChildren: './localisation/localisation.module#LocalisationPageModule' },
  { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'detail-restaurant', loadChildren: './detail-restaurant/detail-restaurant.module#DetailRestaurantPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'promo', loadChildren: './promo/promo.module#PromoPageModule' },
  { path: 'commandes', loadChildren: './commandes/commandes.module#CommandesPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'payement', loadChildren: './payement/payement.module#PayementPageModule' },
  { path: 'thank-page', loadChildren: './thank-page/thank-page.module#ThankPagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
