import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
import { Vaki,VakiReward } from '@vaki-challenge/models';

@Injectable({
  providedIn: 'root'
})
export class VakiService {

  vaki = 'vakis'
  vakiReward = 'vakiReward'
  vakiCollection: AngularFirestoreCollection<Vaki>
  vakiRewardCollection: AngularFirestoreCollection<VakiReward>

  constructor(private fs: AngularFirestore) {
    this.vakiCollection = fs.collection<Vaki>(this.vaki)
    this.vakiRewardCollection = fs.collection<VakiReward>(this.vakiReward)
  }

  getVaki(url){
    return this.vakiCollection.doc('0Uz911WebTsehGIpNypW').valueChanges()
  }

  getvakiReward(idVaki){
    const vakisRef = this.vakiCollection.doc(idVaki).ref
    return this.fs.collection<VakiReward>(this.vakiReward, vakiRewardsRef =>  vakiRewardsRef.where('vaki', '==', vakisRef).orderBy('value','asc')).valueChanges()
  }
}
