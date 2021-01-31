import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VakiService {

  vaki = 'vakis'
  vakiCollection: AngularFirestoreCollection

  constructor(private fs: AngularFirestore) { 
    this.vakiCollection = fs.collection(this.vaki)
  }

  getVaki(url){
    return this.vakiCollection.doc('0Uz911WebTsehGIpNypW').valueChanges()
  }
}
