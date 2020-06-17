import { StudentDetailsComponent } from './../student-details/student-details.component';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

 student_Items= [];

  url="http://localhost:5000/GetAll";
  postStudent="http://localhost:5000/postStudent";
  view="http://localhost:5000/GetAll/:id";
  
  
  constructor(private http:HttpClient) {}
  
    addStudent(data)
    {
      this.student_Items.push(data);

    }
 
  public  getDetails()
    {
      return this.http.get<any>(this.url)

    }

    public PostStudent(student) {
      console.log(student)
      return this.http.post(this.postStudent, student);
    }
   
    public viewStudent(data) {
      return this.http.get(this.view + data);
    }
}
