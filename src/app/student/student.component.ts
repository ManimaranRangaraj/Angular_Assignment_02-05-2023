import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { ServicestudentService } from '../servicestudent.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    constructor(private studentService: ServicestudentService){}
    students : Student[] = [];
    ngOnInit(){
      this.getStudentList(); 
    }
    getStudentList(){
      this.studentService.getStudents().subscribe((data) => (this.students = data));
    }
}
