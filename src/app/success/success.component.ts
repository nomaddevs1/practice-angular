import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  userName: string;
  password: string;
  submitted: boolean = false;
  dis: boolean = false;
  constructor() {
    this.userName = '';
    this.password = '';
  }

  //?Submit buttons that is activated when there is data in the form
  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.userName = '';
      this.password = '';
    }, 1000);
    console.log(this.userName, this.password);
  }
}
