import { Component } from '@angular/core';


// decorators are design patterns used to isolate the decoration of a class without modifying the source code
//@Component is a decorator used to specify the metadata for the component class
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Project';
  
}
