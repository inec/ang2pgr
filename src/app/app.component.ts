import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myProp:string="adfasdf sdf";
  myMethod(){
    this.myProp='diffe';
    console.log('lte');
  }
}
