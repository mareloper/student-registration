import { StudentServiceService } from './../services/student-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  @Input('row') studentData: any;
  student:any;
  found=true;
  details:any;
  constructor(private service:StudentServiceService) { }

  getStudent(id)
  {
    this.service.viewStudent(id).subscribe((data) => 
    {
      this.found =false
      this.student = data;
      console.log(data['result']);
    })
  }

  getData()
{
    this.service.getDetails().subscribe((data)=> {
      console.log(data)
      this.details = data
    })

    
  }
  ngOnInit(): void {
  }

}
