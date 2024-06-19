import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1FormComponent } from './component/punto1-form/punto1-form.component';
import { Punto1Component } from './component/punto1/punto1.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Punto1Component,Punto1FormComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular';
}
