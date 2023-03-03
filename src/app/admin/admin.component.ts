import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface User {
  name: string;
  lastName: string;
  dateOfBirth: string;
  education: string;
  role: string;
  position: string;
}

const users = [
  {
    name: 'David',
    lastName: 'Williams',
    dateOfBirth: '1986-08-08',
    education: 'Master of Arts',
    role: 'Manager',
    position: 'Technical',
  },
  {
    name: 'Kevin',
    lastName: 'Davis',
    dateOfBirth: '1989-12-12',
    education: 'Master of Arts',
    role: 'Manager',
    position: 'Operations',
  },
  {
    name: 'Olivia',
    lastName: 'Garcia',
    dateOfBirth: '1991-01-13',
    education: 'Bachelor of Science',
    role: 'Developer',
    position: 'Back-end',
  },
  {
    name: 'Jacob',
    lastName: 'Rodriguez',
    dateOfBirth: '1988-02-14',
    education: 'Master of Science',
    role: 'Developer',
    position: 'Front-end',
  },
  {
    name: 'Isabella',
    lastName: 'Martinez',
    dateOfBirth: '1992-03-15',
    education: 'Bachelor of Arts',
    role: 'Designer',
    position: 'UI/UX',
  },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: User) => `${element.name}`,
    },
    {
      columnDef: 'lastName',
      header: 'Last Name',
      cell: (element: User) => `${element.lastName}`,
    },
    {
      columnDef: 'dateOfBirth',
      header: 'Date Of Birth',
      cell: (element: User) => `${element.dateOfBirth}`,
    },
    {
      columnDef: 'education',
      header: 'Education',
      cell: (element: User) => `${element.education}`,
    },
    {
      columnDef: 'Role',
      header: 'Role',
      cell: (element: User) => `${element.role}`,
    },
    {
      columnDef: 'position',
      header: 'Position',
      cell: (element: User) => `${element.position}`,
    },
  ];
  dataSource = users;
  displayedColumns = this.columns.map((c) => c.columnDef);
}
