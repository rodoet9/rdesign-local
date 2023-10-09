import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services page',
  },
  {
    path: 'portofolio',
    component: PortofolioComponent,
    title: 'Portofolio page',
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    title: 'Contact us page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
