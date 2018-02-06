import { Component } from '@angular/core';


import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import { AngularFireDatabase, FirebaseListObservable, AngularFireObject } from "angularfire2/database";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myProp:string="adfasdf sdf";

  //items: AngularFireList<message[]>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msg: string = '';
  editMsg: boolean = false;
  editId: number;


  constructor(public af: AngularFireDatabase) {
    this.itemsRef = af.list('/messages');
    //this.items= af.list('/messages').valueChanges();

    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  send(chatMsg: string) {
  
    this.itemsRef.push({ message: chatMsg });
    this.msg = '';
  }

  delete(key:string) {
    console.log(key);
    this.itemsRef.remove(key);
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }

  edit(key:string, message: string) {
    this.itemsRef.update(key, { message: message });
    this.editMsg = false;
  }

  myArr=[
{'title':'my title','desc': 'blog desc'},
{'title':'my title','desc': 'blog des3c'},
  ];
  myMethod(){
    this.myProp='diffe';
    console.log('lte');
  }
}
