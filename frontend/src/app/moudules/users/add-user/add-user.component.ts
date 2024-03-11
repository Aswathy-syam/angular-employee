import { Component } from '@angular/core';
import { userSchema } from '../user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user:userSchema={}

constructor(private api:ApiService){}

addUser(){

  const{id,name,email,active}=this.user

  if(!id||!name||!email||!active){
    alert('please fill the form completely')
  }
else{
  // alert('save button clicked')

this.api.addUser(this.user).subscribe({

  next:(res:any)=>{
    alert(' new user successfully added')
  },

  error:(err:any)=>{
    alert('can not perfom the action now please try after some time')
  }
})

}

}



// cancel

cancel(){
  this.user={}
}
}


