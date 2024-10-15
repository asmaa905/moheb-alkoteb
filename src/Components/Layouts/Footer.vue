<template>
      <footer class="pt-5 text-right">
        <div class="container">

        <div class="row">
          <div class="footer-widget sec-right col-xs-12 col-sm-6 col-lg-6 d-flex flex-column justify-content-start">
           <div class="logo">
            <img class="w-100" src="logo.png" alt="logo">
           </div>
           <p class="sub-t">متجر عربي لبيع كتب التراث الإسلامي و نقوم بتوصيل مشترياتك لجميع أنحاء العالم           </p>
           <div class="contact">
            <div class="contact-sec address">
              <i class="fa fa-home"></i>
              <span>جمهورية مصر العربية, الدقهلية  </span>
            </div>
            <div class="contact-sec phone">
              <i class="fa fa-phone"></i>
              <span>002-0109-4717-427</span>
            </div>
            <div class="contact-sec mail">
              <i class="fa fa-envelope"></i>
              <span>{{abbrLetter(email, 10)}}</span>
            </div>
            <div class="contact-sec clock">
              <i class="fa fa-clock"></i>
              <span>السبت - الخميس / 9:00 ص - 6:00 م</span>
            </div>

           </div>
          </div>
    
          <div class="footer-widget sec-left col-xs-12 col-sm-6 col-lg-6">
            <div class="footer-title">
              <h4>تواصل معنا</h4>
            </div>
           <div class="icons my-5">
            <a class="icon icon-instagram px-2 mx-1" >
              <i class="text-white fab fa-instagram"></i>
            </a>
            <a class="icon icon-whatsapp px-2 mx-1" >
              <i class="text-white fab fa-whatsapp"></i>
            </a>
            <a class="icon icon-twitter px-2 mx-1" >
              <i class="text-white fab fa-twitter"></i>
            </a>
            <a class="icon icon-facebook px-2 mx-1" >
              <i class="text-white fab fa-facebook"></i>
            </a>
           </div>
           <h5>حمل التطبيق</h5>
           <div class="google-play-app">
            <div class="row justify-content-between apple" style="">
              <div class="col-12 apple-ar">
                <img  style="width: 100%; height: 48px;" loading="lazy" src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-2-3.png" data-lazy-type="image" data-src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-2-3.png" alt="" class="wp-image-7244 lazy-loaded">
              </div>

            </div>
            <div class="row justify-content-between">
              <div class="col-12 play-ar">
                <img style="width:  100%; height: 48px;" loading="lazy" src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3.png" data-lazy-type="image" data-src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3.png" alt="" class="wp-image-7232 lazy-loaded" srcset="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3.png 843w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-210x30.png 210w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-160x23.png 160w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-768x111.png 768w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-120x17.png 120w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-300x43.png 300w" data-srcset="" sizes="(max-width: 327px) 100vw, 327px">              </div>

            </div>
           </div>
          </div>
        </div>
    

      </div>
        <div class="copyright d-flex flex-column justify-content-between pt-4 mt-4 border-top text-center">
          <p>Copyright © MuhibAlkutub . All rights reserved 2023
          </p>
         
        </div>
      </footer>
    </template>
    
    <script>
    // @ is an alias to /src
    
    export default {
      name: 'FooTer',
      data(){
        return {
          email:"info@muhibalkutub.com"
        }
      }
    
    }
    </script>
<style scoped>
footer {
  color: rgb(12, 71, 84);

  background-color: rgb(221, 221, 221);
} 
.sec-left .icons .icon-instagram {
  background-color: #D02A52;
}
.sec-left .icons .icon-whatsapp {
  background-color: rgb(13, 193, 67);
}
.sec-left .icons .icon-twitter {
  background-color: rgb(64, 191, 245);
}
.sec-left .icons .icon-facebook {
  background-color: rgb(56, 86, 147);
}
.sec-left .icons .icon:hover {
  opacity: 0.8;
}
.sec-right .logo {
  margin: 0 0 .6781em;
  width: 11rem;
}
.sec-right p.sub-t {
    margin: 0 0 .6781em;
}
.sec-right .contact .contact-sec {
  margin-bottom: 15px;
}
.footer-title {
    font-family: Cairo, Arial, Helvetica, sans-serif !important;

    border: 0;
    padding: 0;
    margin-bottom: 1em;
}
.footer-title h4 {
  border: 0;
  padding: 0;
  color: rgb(0, 95, 117);
  font-weight: 700;
  line-height: 22px;
  font-size: 16px;

}
footer p, footer span, footer i {
  color: rgb(12, 71, 84);
  font-size: 14px;
  line-height: 22px;

}
 footer .mail span {
  color: rgb(24, 100, 117);
}
footer .clock i {
  line-height: 16px;
}
.sec-left .apple,.sec-left h5 {
  margin-bottom: 35px
}
footer .sec-left h5 {
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;

}
footer .copyright {
  background-color: rgb(201, 201, 201);
 color: #000 !important
}
footer .copyright p {
  color: rgb(2, 2, 2) !important
}
@media (min-width: 991px) {
footer .google-play-app img{
  width: 327px !important; height: 48px !important;
}
}
@media (max-width: 250px) {
  .sec-right .logo {
    width: 7rem;
  }
}
.navbar-bottom .col-7-scroll {
  
}
</style>