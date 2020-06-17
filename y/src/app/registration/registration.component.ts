import { Component, OnInit, Input } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() studentData = {
    name: "", email:"",id:"", modules: "", dateRegistered:"", dateModified:""
  
  }
   details;any;
  
  constructor(private service:StudentServiceService) { }

getData()
{
    this.service.getDetails().subscribe((data)=> {
      console.log(data)
      this.details = data
    })

    
  }

  studentRegistration() {
    this.service.PostStudent(this.studentData).subscribe()
  }
  ngOnInit(): void
  {
this.getData();
this.studentRegistration();
  }

}
