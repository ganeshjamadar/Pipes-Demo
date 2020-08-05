import { Component } from '@angular/core';  
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve('stable');
      }, 2000);
    }
  );
  filterStatus = '';
  propName = '';
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15,1,2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'offline',
      started: new Date(15,1,2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'stable',
      started: new Date(15,1,2017)
    },{
      instanceType: 'small',
      name: 'Test Enviroment Server',
      status: 'critical',
      started: new Date(15,1,2017)
    },
  ];

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}){
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    }
  }
}
