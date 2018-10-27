import { Component, OnInit } from '@angular/core';
import { CourseComponent } from './course/course.component';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
       private panelTitle:     any[] = [
             'Thông tin khóa học',
             'Kết quả học tập',
             'Đăng ký khóa học',
             'Thời khóa biểu',
             'Chức năng']  
     Course ='http://localhost:1337/courses';
     Result = 'http://localhost:1337/Categories/5bc53657670d9833fcced9a4'
     Register = 'http://localhost:1337/events/5bc546da7eb76939fcddcf6a'
     Schedule = 'http://localhost:1337/events/5bc54a177eb76939fcddcf76'
   show;  
   isshow;
   iscourse:any='';
   isresult:any='';
   isregister:any='';
   isschedule:any='';
  constructor(private http :HttpClient) { }

  ngOnInit() {  
     // get  data from strapi
    // this.http.get(this.Course).subscribe(data => {
    //   this.iscourse = data;
    //   console.log(this.iscourse);
       
    //    });
    //    this.http.get(this.Result).subscribe(data => {
    //     this.isresult = data;
    //    console.log(this.isresult);
    //   });
    //   this.http.get(this.Register).subscribe(data => {
    //     this.isregister = data;
    //    console.log(this.isregister);
    //   });
    //   this.http.get(this.Schedule).subscribe(data => {
    //     this.isschedule = data;
    //    console.log(this.isschedule);
    //   });
 

  }
  
  OnCourse(){ 
     this.isshow = this.panelTitle[0]
     console.log(this.isshow) ; 
    //  this.show = this.iscourse
    //  console.log(this.show) 

   }
  onResult(){
     this.isshow= this.panelTitle[1]
     console.log(this.isshow)
    //  this.show = this.isresult
    //  console.log(this.show)
   }
   onRegister(){
     this.isshow = this.panelTitle[2]
     console.log(this.isshow)
    //  this.show = this.isregister
    //  console.log(this.show)           
   }
   onSchedule(){
     this.isshow = this.panelTitle[3]
     console.log(this.isshow)
    //  this.show = this.isschedule
    //  console.log(this.show)
   }
   
   onclick(){
    this.isshow = this.panelTitle[4]
    console.log(this.isshow)
   }
}
