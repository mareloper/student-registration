import { Component, OnInit, Input } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { ActivatedRoute } from '@angular/router';
import {FormsModule, EmailValidator} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   name:string;
  email:string;
  id:number;
  modules:string;
dateRegistered:Date;
  dateModified:Date;

  public rows:Array<{ name:string;
  email:string;
  id:number;
  modules:string;
  dateRegistered:Date;
  dateModified:Date}> = [];
 

  buttonClicked()
  {
    this.rows.push({ name: this.name, email: this.email, id: this.id, modules: this.modules, dateRegistered: this.dateRegistered, dateModified: this.dateModified});
  }
  dateMessage: string;

@Input() studentData = {
  name: "", email:"",id:"", modules: "", dateRegistered:"", dateModified:""

}
  constructor(private service: StudentServiceService ,
            private route: ActivatedRoute){
              let dateRegistered= new Date();
              this.dateMessage = dateRegistered.toDateString();
   }

   studentRegistration() {
     
     for(let r of this.rows)
    this.service.PostStudent(r).subscribe(_=>{},error=>console.log(error));
  }

  


  student_data:Array<any> =
  [{

    name: this.name, email: this.email, id: this.id, modules: this.modules, dateRegistered: this.dateRegistered, dateModified: this.dateModified
  }];
  student_info:Array<any> =
  [{

    name: this.name, email: this.email, id: this.id, modules: this.modules, dateRegistered: this.dateRegistered, dateModified: this.dateModified
  }];

  remove(id: any) {
    this.student_data.push(this.student_info[id]);
    this.student_info.splice(id, 1);
  }
  
  
  ngOnInit():void{ 
this.studentRegistration();
  }

}
