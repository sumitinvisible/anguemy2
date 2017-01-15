import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> inline template</h1>
  <fa-databinding> </fa-databinding>
  
  `
})

@NgModule({
   
   declarations:[AppComponent,DatabindingComponent], //<---need to declare 
   schemas:     [CUSTOM_ELEMENTS_SCHEMA]             //<---added this line
})
export class AppComponent {
  title = 'app works!';
}
