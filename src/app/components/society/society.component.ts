import { Component, OnInit } from '@angular/core';
import { SocietyService } from 'src/app/services/soceity.service';
import { Society } from 'src/app/models';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

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
