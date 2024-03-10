import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { MainServicesComponent } from '../../components/main-services/main-services.component';
import { MassagesComponent } from '../../components/massages/massages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactFormComponent, MainServicesComponent, MassagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
