import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../app/interface1';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  item : Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>
  itemDocument: AngularFirestoreDocument<Item>


  constructor(public db: AngularFirestore) { 
    this.itemsCollection = this.db.collection('itemcategory');
  }

  getData() {
    return this.db.collection('itemcategory').valueChanges();
  }
  fbAddItems(name , price , itemtype , itempriority,date , itemdescription){
    const documentId = this.db.createId();
    this.itemsCollection.doc(documentId).set({itemname:name, price:price, itemtype:itemtype, itempriority:itempriority,date:date,itemdescription:itemdescription, id:documentId});
  }
  
  delete(modifyItem){
    this.itemDocument = this.db.doc(`itemcategory/${modifyItem.id}`);
    this.itemDocument.delete();
  }

}

