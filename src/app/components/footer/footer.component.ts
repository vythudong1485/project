import { Component, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public logo ='./assets/images/logo.png'
  // address :string = 'Japan Center, Tầng 1, Tòa nhà 4 tầng, Trường Đại học Quy Nhơn, 170 An Dương Vương, Quy Nhơn'
  // link='mailto:japancenter@qnu.edu.vn'
  // tel:string = '0256.3636.129'
  // hotline:string = '+84925.880.348 Cô Thảo Huyền'

  dataURL='http://18.216.46.144:1337/footers'
  show;
  constructor(private http :HttpClient) { }
   ngOnInit() {
     //Scroll the mouse and call the scrollFunction
     window.onscroll = function() {scrollFunction()};
     // reportage scrollFunction
     function scrollFunction() {
         // Check the cursor current position 
         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
             //If > 100px appear button
             document.getElementById("backToTop").style.display = "block";
         } else {
              //If < 100px hidden button
             document.getElementById("backToTop").style.display = "none";
         }
     }
     // click button to the top
     document.getElementById('backToTop').addEventListener("click", function(){
         document.body.scrollTop =  $("html, body").animate({ scrollTop: 0 }, "slow");
         document.documentElement.scrollTop =   $("html, body").animate({ scrollTop: 0 }, "slow");     
     });

       // get  data from strapi
     this.http.get(this.dataURL).subscribe(data => {
       this.show = data;
       console.log(this.show);
      });
    }

  // Change social icon color when hover on it
  changeIcon(icon: string) {
      if (icon === "facebook") {
        $('#facebook-icon').attr("src","./assets/images/facebook-logo-color.png");
      } else if (icon === "youtube") {
        $('#youtube-icon').attr("src","./assets/images/youtube-logo-color.png");
      } else if (icon === "facebook-normal") {
        $('#facebook-icon').attr("src","./assets/images/facebook.png");
      } else if (icon === "youtube-normal") {
        $('#youtube-icon').attr("src","./assets/images/youtube.png");
      }
  }
 
}