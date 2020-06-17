import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input('detail') detail: any;
  @Output() onSelectedStudent = new EventEmitter()

  details:any;

  constructor(private service:StudentServiceService) { }

getData()
{
    this.service.getDetails().subscribe((data)=> {
      console.log(data)
      this.details = data
    })

    
  }

  ngOnInit(): void {
   this.getData();
  }

  getStudent (student) {
    this.onSelectedStudent.emit(student);
  }
}
