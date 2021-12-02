import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AP1';

  
counter:number=1;

plus(){
  this.counter++;
}

minus(){
  this.counter--;
}
}
