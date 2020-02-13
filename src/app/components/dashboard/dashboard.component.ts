import { Component, OnInit } from '@angular/core';
import { SocietyService } from 'src/app/services/soceity.service';
import { Society } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  societies: Society[] = [];

  constructor(private socieityService: SocietyService) { }

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


}
