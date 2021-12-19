import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import '../header/header.scss';






export default function Header() { 

    $(function() {
  
        let N = 0;
        let K = 0;
        let tt
        
        START();
    
        function START() {
          tt = setInterval(NEXT, 3000);
        }
    
        function NEXT() {
    
          if( N < $('.photo-slider-img').length - 1 ) {
            N++;
          } else {
            N = 0;
          }
    
          CHANGE();
        }
    
        function CHANGE() {
          K = 1;   
          $('.photo-slider-img.NOW').stop().animate({left: '-100%'}, 500);
          $('.photo-slider-img').eq(N).stop().css({left: '100%'}).animate({left: 0}, 500, OK);
        }
    
        function OK() {
          K = 0;
          $('.photo-page').removeClass('active').eq(N).addClass('active');
          $('.photo-slider-img').removeClass('NOW').eq(N).addClass('NOW');
        }
    
    
    
        $('.photo-page').on('click', function() {
    
          if( $(this).index() == N || K == 1 ) return;
          
          if ( tt ) {
             clearInterval( tt );
             tt = 0;
             N = $(this).index();
             CHANGE();
             START();
           }
        });
    
    });
    

    return(
        <div class="main_header">
      <div class="header">
          <div class="img"></div>
      </div>



      <div class="container">

<div class="row">
  <div class="photo-slider">
    <img src="https://cf.shopee.com.my/file/a198a71b65781f975d55bbef2fe9f2f4" alt="" class="photo-slider-img NOW"/>
    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607448500-brooklinen-magic-hour-1607448496.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" class="photo-slider-img"/>
    <img src="https://image.made-in-china.com/2f0j00OrYUwtNqEDky/Wholesale-High-End-100-Natural-Soy-Candles-Aroma-Candles.jpg" alt="" class="photo-slider-img"/>
    <img src="https://www.comodo.kiev.ua/api/storage/?id=33811&type=PRODUCTS&size=original&number=0" alt="" class="photo-slider-img"/>
    <img src="https://la-fleur.com.ua/storage/products/952/32RtKUeNrfiUjHefdOqrArCjMTAYW2WUs2mHmjx7.jpeg" alt="" class="photo-slider-img"/>
  </div>
  <div class="photo-controls">
    <div class="photo-pagination">
      <div class="photo-page active"><span></span></div>
      <div class="photo-page"><span></span></div>
      <div class="photo-page"><span></span></div>
      <div class="photo-page"><span></span></div>
      <div class="photo-page"><span></span></div>
    </div>
  </div>
</div>

</div>

      </div>
      
    )
}