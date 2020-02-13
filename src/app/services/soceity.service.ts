import { Injectable } from '@angular/core';
import { Society } from '../models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SocietyService {

    constructor(private angularFirestore: AngularFirestore) { }

    getSocieties(): Observable<Society[]> {
        /*
        const soceities: Society[] = [
            {
                id: '1',
                name: 'ICC',
                address: 'Ring Road'
            }
        ]

        return of(soceities);
        */


        return this.angularFirestore
            .collection('Societies ')
            .get()
            .pipe(
                map(querySnapshot => {
                    console.log('count', querySnapshot.size);
                    return querySnapshot.docs.map(document => {
                        console.log('data', document.data());
                        return {
                            id: document.id,
                            address: document.get('Society Address'),
                            name: document.get('Society Name')
                        }
                    })
                })
            )
    }

}