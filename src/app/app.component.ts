import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myProp:string="adfasdf sdf";

  myArr=[
{'title':'my title','desc': 'blog desc'},
{'title':'my title','desc': 'blog desc'},
{'title':'my title','desc': 'blog des3c'},
  ];
  myMethod(){
    this.myProp='diffe';
    console.log('lte');
  }
}
