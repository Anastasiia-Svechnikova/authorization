import { Component } from '@angular/core';

const data = [
  {
    id: 1,
    name: 'Core Drivers',
    users_resolved: 5,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpKuhQnt2Gn5wm0usuP2QK8CB5z8_yBB8oQ&usqp=CAU',
  },
  {
    id: 2,
    name: 'Stress Test',
    users_resolved: 10,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NL_oubZzB0fIH0wOF7eBaVGxE4ySd1QDz3m5YXIi8rcB9b3fMcZSy14hsGFAgLo0Xac&usqp=CAU',
  },
  {
    id: 3,
    name: 'Leadership Styles',
    users_resolved: 7,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU',
  },
  {
    id: 4,
    name: 'Career Values',
    users_resolved: 15,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQwn4a_TR68qjoCIrzfFtBnUmnd0KvnsG7A&usqp=CAU',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  data = data;
}
