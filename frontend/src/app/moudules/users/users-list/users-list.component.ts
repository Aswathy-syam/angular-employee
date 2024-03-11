import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  //proprty

  allusers:userSchema[]=[]

searchKey:string=''


  today=new Date()

constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getUserList()
  }


//when user list page open display all users from json file


//to get details of employee create a function

getUserList(){
  this.api.getallUsers().subscribe({
    next:(result:any)=>{
console.log(result);

//assign api response to class property
this.allusers=result

    },
    error:(res:any)=>{
      console.log(res);
      
    }
  })

}


// delete function 

deleteUser(id:any){
this.api.deleteUser(id).subscribe({
  next:(res:any)=>{
    console.log(res);

    //after delete single person show others in table
    this.getUserList()
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
}

}
