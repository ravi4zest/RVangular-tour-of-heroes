import { Component } from '@angular/core';
import { TestExport } from './HelloWorld';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = TestExport() //'RVangular-Destiny-is-all'; //remove testExport() 
  
}
