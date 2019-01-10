import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseService } from '../firebase.service';
import { Item } from '../interface1';


@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  items;
  itemname;
  price;
  date;
  itemtype;
  itempriority;
  itemdescription;
  updateItem;
  modifyItem: Item;
  userInput : string;
  filterInput : string;

  constructor(public db: AngularFirestore, private service: FirebaseService) { 
    
  }
  
  fbAddItems() {
    this.service.fbAddItems(this.itemname,this.price,this.itemtype,this.itempriority,this.date,this.itemdescription);
  }
  delete(){
    this.service.delete(this.modifyItem);
  }
  Update(updateElement: HTMLInputElement, item: Item){
    this.modifyItem = item;
    this.itemname = item.itemname;
    this.price = item.price;
    this.itemtype = item.itemtype;
    this.itempriority = item.itempriority;
    this.itemdescription = item.itemdescription;
    this.date = item.date;
    this.delete();
  }

  ngOnInit() {
    this.items = this.service.getData();
  }

}


