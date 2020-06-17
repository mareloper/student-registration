import { Component } from '@angular/core';
import { StudentServiceService } from './services/student-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Registration';

  constructor(private service: StudentServiceService ){ 

    
  }
}
