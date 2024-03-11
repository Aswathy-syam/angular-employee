import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //property

  email:string=""
  password:string=""


constructor(private api:ApiService,private navigate:Router){}


login(){
  if(this.email&&this.password){




    // alert(`username:${this.username} password:${this.password}`)

    // 1.compare username and password  with admin details
    // 2.for that we should get admin details from: http://localhost:3000/users/1
    // api call to http://localhost:3000/users/1

    this.api.adminDetails().subscribe({
next:(result:any)=>{
  console.log(result);
  
if(this.email===result.email && this.password===result.password){
// alert('authorization successful')
this.navigate.navigateByUrl("home")
}
else{
  alert('invalid admin details')
}


},
error:(res:any)=>{
  console.log(res);
  
}

    })
 

  }
  else{
    alert('please fill the form completely')
  }
}


}
