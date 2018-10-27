import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  img1="https://japancenter.qnu.edu.vn/images/home/dang-ky-hoc-vien.jpg";
  img2="https://japancenter.qnu.edu.vn/images/home/10kbrse.jpg";
  img3="https://japancenter.qnu.edu.vn/images/home/news-events-10.jpg";
  constructor() { }

  ngOnInit() {
  }

}
