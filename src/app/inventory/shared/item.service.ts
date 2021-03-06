// TODO: Generalize service so it can serve multiple types of models

// Create / Update
// Needs a generlized object and an id if updating one

// By only specifying the type or collection, you can feed this service any kind of objects
// This would require conversion being done in the model to a generic object without any type,
// Because that is what it takes to create and update an object in the database

// Reading documents
// Collections can be fetched by using the 'any' keyword
// Throwing in an id for individuals

// Delete
// Deletion of a document only needs a collection name and an id

// Possible issues
// Reaching a page which needs to read out multiple collections
// Maybe we need to figure out if an array of collections is possible to solve this
// Definitly needs to be worked out on a seperate branch when I got multiple components like these running

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from './item.config';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  public selectedItem: Item;
  public itemList: Observable<Item[]>;

  constructor(private db: AngularFirestore ) {
    // Read inventory collection
    this.itemList = this.getCollection()
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          // Get document data
          const data = a.payload.doc.data() as Item;
          // Get document id
          const id = a.payload.doc.id;
          // Use spread operator to add the id to the document data
          return { id, ...data };
        });
      }));

    // Setup defaults
    // TODO: Can this default initialisation be shortened?
    this.selectedItem = {
      id: null,
      barcode: null,
      title: '',
      price: null,
      shippingCost: null,
      importDuties: null,
      body: ''
    };
  }

  public createItem(itemForm: NgForm): void {
    this.getCollection().add(this.convertToObject(itemForm));
  }

  public updateItem(itemForm: NgForm): void {
    this.getDocument(itemForm.value.id)
      .update(this.convertToObject(itemForm));
  }

  public deleteItem(id: string): void {
    this.getDocument(id).delete();
  }

  private getCollection(): AngularFirestoreCollection {
    return this.db.collection<Item>(config.collection_endpoint);
  }
  /* TODO: Override getCollection method with other possibilities for querying
  // Order ascending
afs.collection('people', ref => ref.orderBy('age') )

// Order descending by numbers or strings
afs.collection('people', ref => ref.orderBy('age', 'desc') )
afs.collection('people', ref => ref.orderBy('name', 'desc') ) // reverse alphabetical

// Limit results
afs.collection('people', ref => ref.orderBy('age').limit(5) )

// Offset by a property
afs.collection('people', ref => ref.orderBy('name').startAt('Jeff') )

// Get items by equality to a property
afs.collection('people', ref => ref.where('name', '==', 'jeff') )

// Get items by range operators
afs.collection('people', ref => ref.where('age', '>=', 5)

// Chain equality for multiple properties
afs.collection('people', ref => ref.where('age', '==', 5) .where('name', '==', 'jeff')

*/

  private getDocument(id: string): AngularFirestoreDocument {
    return this.db.doc<Item>(`${config.collection_endpoint}/${id}`);
  }

  private convertToObject(form: NgForm): {} {
    // TODO: Can this be deduced to a "generic object <-- form"
    return {
      barcode: form.value.barcode,
      title: form.value.title,
      price: form.value.price,
      shippingCost: form.value.shippingCost,
      importDuties: form.value.importDuties,
      body: form.value.body
    };
  }

}
