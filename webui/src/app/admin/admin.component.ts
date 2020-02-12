import { Component, OnInit } from '@angular/core';

export interface DashboardElement {
  name: string;
  link: string;
}

const ADMIN_DASHBOARD: DashboardElement[] = [
  { name: 'grafana', link: '/grafana'},
  { name: 'kibana', link: '/kibana'}
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource = ADMIN_DASHBOARD;

  displayedColumns: string[] = [ 'name', 'link'];

  constructor() { }


  ngOnInit() {
  }


}
