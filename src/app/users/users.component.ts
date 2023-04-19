import { Component } from '@angular/core';
interface User {
  name : string,
  age:number,
  salary:number
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  users:User[]=
  [
    {name:'muhammad' , age:26,salary:14000},
    {name:'mahmoud' , age:23,salary:12000},
    {name:'abdo' , age:22,salary:10000},
    {name:'ahmad' , age:57,salary:20000},
  ]

  friends : string[]=["ahmed","mahmoud","abdo","azza"]
}
