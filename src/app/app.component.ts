import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name : string = 'Jehan';

  constructor () {
    this.printName('ado');
  }

  printName (name : string) :void{
    this.name = name;
  }

  
}

