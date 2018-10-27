import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }
  ngOnInit() {

            // Sticky navbar
            // =========================
            $(document).ready(function () {
                // Chức năng tùy chỉnh chuyển đổi giữa lớp sticky (is-sticky)
                var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
                    var stickyHeight = sticky.outerHeight();
                    var stickyTop = stickyWrapper.offset().top;
                    if (scrollElement.scrollTop() >= stickyTop) {
                        stickyWrapper.height(stickyHeight);
                        sticky.addClass("is-sticky");
                    }
                    else {
                        sticky.removeClass("is-sticky");
                        stickyWrapper.height('auto');
                    }
                };

                // Tìm tất cả các phần tử data-toggle = "sticky-onscroll"
             $('[data-toggle="sticky-onscroll"]').each(function () {
                var sticky = $(this);
                // chèn phần tử ẩn để di chuyển trên thực tế trên trang
                var stickyWrapper = $('<div>').addClass('sticky-wrapper'); 
                    sticky.before(stickyWrapper);
                    sticky.addClass('sticky');

                    // Cuộn và thay đổi kích thước sự kiện
                $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                     stickyToggle(sticky, stickyWrapper, $(this));
                 });

                    // Khi tải trang
                     stickyToggle(sticky, stickyWrapper, $(window));
                });
            $(document).ready(function($) {   
                //selector đến menu cần làm việc
                var TopFixMenu = $("#logo-hide");
                // dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
                $(window).scroll(function(){
                   // Nếu cuộn được hơn 150px rồi
                  if($(this).scrollTop()>50){
                    // Tiến hành show menu ra   
                    TopFixMenu.show();
                  }else{
                     // Ngược lại, nhỏ hơn 150px thì hide menu đi.
                    TopFixMenu.hide();
                }}
                   )                  
              })
      });
 
  }
  
  }









