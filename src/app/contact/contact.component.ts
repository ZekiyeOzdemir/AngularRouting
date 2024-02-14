import { Component } from '@angular/core';
import { IDeactivateComponent } from 'src/app/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent {

  firstName!: string;
  lastName!: string;
  country!: string;
  subject!: string;

  canExit() {
    if(this.firstName || this.lastName || this.country || this.subject) {
      return confirm('You have unsaved changes. Do you really want to discard these changes?');
    } else {
      return true;
    }
  }
}
