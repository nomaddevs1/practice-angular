import { Component } from '@angular/core';
interface Person {
  counter: number;
  username: string;
  hobbie: string[];
}
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  userName: string;
  password: string;
  personHobbies: string[];
  submitted: boolean = false;
  dis: boolean = false;
  hobbies: string[] = [
    '3D printing',
    'Acroyoga',
    'Acting',
    'Alternate history',
    'Amateur radio',
    'Animation',
    'Anime',
    'Art',
    'Audiophilia',
    'Baton twirling',
    'Beatboxing',
    'Beer tasting',
    'Bell ringing',
    'Binge watching',
    'Bird watching',
    'Blacksmith',
    'Blogging',
    'Bonsai',
    'Board/tabletop games',
  ];
  persons: Array<Person> = [];
  constructor() {
    this.userName = '';
    this.password = '';
    this.personHobbies = [];
  }

  //?Submit buttons that is activated when there is data in the form
  onSubmit(data: HTMLDivElement) {
    console.dir((data.children[0]?.firstChild as HTMLInputElement)?.value);
    for (let i = 0; i < data.children.length; i++) {
      if (data.children[i].firstChild?.nodeName === 'INPUT') {
        if ((data.children[i]?.firstChild as HTMLInputElement)?.checked) {
          this.personHobbies.push(
            (data.children[i]?.firstChild as HTMLInputElement)?.value
          );
        }
      }
    }

    this.submitted = true;
    this.persons.push({
      counter: this.persons.length - 1,
      username: this.userName,
      hobbie: this.personHobbies,
    });
    setTimeout(() => {
      this.userName = '';
      this.password = '';
      this.personHobbies = [];
    }, 1000);
  }
}
