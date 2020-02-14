import { Component, OnInit } from '@angular/core';
import { SocietyService } from 'src/app/services/soceity.service';
import { Society } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  societies: Society[] = [];
  service: any;

  constructor(private socieityService: SocietyService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.socieityService.getSocieties()
      .subscribe(
        data => {
          console.log(data);
          this.societies = data;
        },
        error => {
          console.error(error);
        },
        () => {
          console.log('Completed');
          // complete
        }
      );
  }
  onDelete(id:string){
    if(confirm('You want to delete this Row!!')){
      this.firestore.doc('Societies /'+id).delete();
      this.toastr.warning('Delete Done !!');
    }
}
onEdit(soc:Society){
  this.service.formData=Object.assign({},soc);
}

}
