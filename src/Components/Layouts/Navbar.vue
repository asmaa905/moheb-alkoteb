<template>
    <nav class="navbar navbar-expand-lg navbar-top navbar-white bg-white m-0 pb-4 pt-4 px-0 search-whatsapp navbar-hidden-scroll">
        <div class="container ">
            <div class="row  justify-content-between  w-100 ">
                    <button  @click="toggleNavbar()"  class="navbar-toggler text-center col-1 d-lg-none d-xl-none" type="button">
                        <i class="text-white fa fa-bars "></i>
                    </button>
                    <RouterLink class="col-2 col-md-2 navbar-brand mr-0 px-0" style="width:126px; height: 49px"  to="/">
                        <img class="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none  w-100 h-100" src="/logo-ar.png" alt="">
                        <img class="d-xs-none d-sm-none d-md-none d-xl-block d-lg-block w-100 h-100" src="/logoNew.png" alt="">
                    </RouterLink>  
                    <form class=" col-md-7 search-form rounded-pill d-flex flex-row-reverse justify-content-between align-items-center" method="get" action="https://muhibalkutub.com/">
                        <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                        <input class="form-control mr-sm-2 border-none h-100"  type="search" name="s" value="" placeholder="البحث" autocomplete="off">
                    </form>
                    <a href="https://wa.me/201000373948+" class="col-1 col-lg-2 col-xl-2 whatsapp-btn btn btn-success text-white h-50 p-1
                     me-auto d-flex justify-content-around align-items-center  rounded-pill"
                    style="
                    background-color: rgb(83, 142, 74);">
                    <span class="text fw-bold fs-1" >201000373948+</span>
                        <i class="fab fa-whatsapp"></i>
                   </a>
            </div>
        </div>
    </nav>
    <div class="floating-menu  w-sm-75 w-md-50  w-xs-100 h-100 flex-column  bg-white d-none d-lg-none" 
      style="height:100vh;
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        z-index:999999;
        opacity:0.08px" 
      id="navbarMd"
    >
    <ul class="navbar-nav  pr-0 d-flex flex-column align-items-start ">
        <li class="nav-item d-flex flex-row justify-content-between bg-petrol w-100  pr-2" style="align-self: flex-end; height: 50px;" @click="toggleNavbar()">
            <span class=" text-black" style="align-self: center;color:rgb(0, 47, 51) !important; font-size: 14px;line-height: 22px; font-weight: 400;">Menu</span>

            <router-link class="nav-link d-flex justify-content-between align-items-end nav-link-scroll text-black" style="align-self: center;" to="/">
                <i class="mx-1 fa fa-close" style="color: rgb(0, 47, 51) !important; font-size: 14px;line-height: 22px; " ></i>
            </router-link>
        </li>
        <li class="nav-item active nav-item-collaspe   px-3 py-0">
            <router-link class="nav-link py-0  dropdown-toggle  d-flex justify-content-between align-items-center nav-link-scroll text-petrol"  to="/dor-nashr" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
            style=" ">
                <span class="nav-link-dropdown">دور النشر</span>
            </router-link>

        </li>
       
        <li class="nav-item  nav-item-collaspe  px-3 py-0">
            <router-link class="nav-link py-0  dropdown-toggle  d-flex justify-content-between align-items-center  nav-link-scroll  text-petrol" to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="nav-link-dropdown">موضوعات الكتب</span>

            </router-link>
          </li>

        <li class="nav-item nav-item-collaspe   px-3 py-0">
            <router-link class="nav-link  py-0  nav-link-scroll  d-flex justify-content-between align-items-center text-petrol"   to="/price-list"
             > <span class="nav-link-text">قوائم الاسعار</span>
            </router-link>
        </li>
        <li class="nav-item nav-item-collaspe   px-3 py-0">
            <router-link class="nav-link  py-0  nav-link-scroll d-flex justify-content-between align-items-center text-petrol" to="/follow-car"
            >
            <span class="nav-link-text">تتبع شحنتك</span>
        </router-link>
        </li>
         <li class="nav-item  nav-item-collaspe  px-3">
            <router-link class="nav-link py-0   nav-link-scroll d-flex justify-content-between align-items-center text-petrol" to="/mob-app"
             ><span class="nav-link-text">تطبيق الهاتف</span>
            </router-link>
        </li>

        </ul>
        <div class="icons my-4 text-center">
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
    </div>
    <nav class=" navbar navbar-expand-lg navbar-bottom navbar-scroll bg-md-petrol bg-lg-petrol bg-xl-petrol  menu  fixed-top top-83  px-0 ">
        <div class="container"> 
            <div class="row justify-content-lg-between justify-content-xl-between w-100  justify-content-center ">
                <RouterLink class="d-none d-lg-none col-md-2 navbar-brand logo-scroll mr-0 px-0" style=" height: 49px;width:126px;"  href="/">
                    <img class="w-100 h-100" src="logoNew.png" alt="">
                </RouterLink>  
                <!-- show when scroll in (mobile & tablet screen) -->
                 <!-- col-1 -->
                <button  @click="toggleNavbar()"  
                class="d-none d-lg-none  navbar-toggler navbar-bars-scroll text-center" type="button">
                    <i class="text-white fa fa-bars "></i>
                </button>
                <!-- should write d-sm-flex d-xs-flex d-md-flex-->
                <form class="col-12 d-lg-none d-xl-none  search-form search-form-scroll mx-auto rounded-pill " method="get" action="https://muhibalkutub.com/">
                    <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                    <input class="form-control mr-sm-2 border-none h-100 text-muted"  type="search" name="s" value="البحث" placeholder="البحث" autocomplete="off">
                </form>
                <div class="col-md-8 p-0 collapse navbar-collapse navbar-collapse-scroll" id="navbarTogglerDemo03">
                    <ul class="navbar-nav  mt-2 mt-lg-0 pr-0">
                    <li class="nav-item active nav-item-simon-hover nav-item-xl">
                        <RouterLink class="nav-link d-flex justify-content-between align-items-center nav-link-scroll" to="/">
                            <i class="mx-1 fa fa-home"></i>
                            <span>الرئيسية</span>
                        </RouterLink>
                    </li>
                   
                    <li class="nav-item dropdown nav-item-simon-hover nav-item-xl">
                        <RouterLink class="nav-link dropdown-toggle  nav-link-scroll" to="/products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            الكتب
                        </RouterLink>
                        <div class="dropdown-menu text-right" aria-labelledby="dorNashNavbarDropdown">
                            <RouterLink v-for="(cat, index) in categories" :key="index" class="dropdown-item dropdown-item-xl" to='/'>
                                {{cat.name}}
                            </RouterLink>
                        </div>
                      </li>
                    <li class="nav-item dropdown nav-item-simon-hover nav-item-xl">
                        <RouterLink class="nav-link dropdown-toggle  nav-link-scroll" to="dor-nashr" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            دور النشر 
                        </RouterLink>
                        <div class="dropdown-menu text-right" aria-labelledby="dorNashNavbarDropdown">
                            <RouterLink v-for="(dor, index) in dorNashr" :key="index" class="dropdown-item dropdown-item-xl" to='/'>
                                {{dor.name}}{{ dor.country? ` - ${dor.country.ar} `: '' }}
                            </RouterLink>
                        </div>
                      </li>
                    <li class="nav-item nav-item-simon-hover  nav-item-xl">
                        <RouterLink class="nav-link  nav-link-scroll" to="/price-list">قوائم الاسعار</RouterLink>
                    </li>
                    <li class="nav-item nav-item-simon-hover  nav-item-xl">
                        <RouterLink class="nav-link  nav-link-scroll" to="/follow-car">تتبع شحنتك</RouterLink>
                    </li>
                     <li class="nav-item nav-item-simon-hover  nav-item-xl">
                        <RouterLink class="nav-link  nav-link-scroll" to="/mob-app">تطبيق الهاتف</RouterLink>
                    </li>
                    </ul>
                </div> 
                <!-- show when scroll in (mobile & tablet screen) -->
                <a 
                  href="https://wa.me/201000373948+"
                  class="d-none d-lg-none  whatsapp-btn btn whatsapp-btn-scroll bg-none border-none shadow-none text-white h-50 p-1 me-auto justify-content-around align-items-center  rounded-pill"
                 >
                  <!-- <span class="text fw-bold fs-1" >201000373948+</span> -->
                  <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavBar',
  data() {
    return {

        dorNashr: [
        {
          "name":"دور النشر",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
          "country":null
        },
        {
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
          "country":{
            "en":'egypt',
            "ar":'مصر'
          }
        },
        {
          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
          "country":{
            "en":'egypt',
            "ar":'مصر'
          }
        },
        {
          "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'egypt',
            "ar":'مصر'
          }
        },
        
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'egypt',
            "ar":'مصر'
          }
        },
        {
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
          "country":{
            "en":'kuiet',
            "ar":'الكويت'
          }
        },
        {
          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
          "country":{
            "en":'egypt',
            "ar":'مصر'
          }
        },
        {
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
          "country":{
            "en":'egypt',
            "ar":'مصر'
          }
        },
        {
          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
          "country":{
            "en":'Qatar',
            "ar":'قطر'
          }
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'Yaman',
            "ar":'اليمن'
          }
        },
        {
          "name":"دار الاصول العلمية",
          "image":"dor_nashr/دار-الاصول-العلمية.jpg",
          "country":{
            "en":'palstine',
            "ar":'فلسطين'
          }
        },
        
        {
          "name":"دار الامام ابن عرفه تونس",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'saudia arabia',
            "ar":'السعودية'
          }
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'دمشق',
            "ar":'dimshq'
          }
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'siria',
            "ar":'سوريا'
          }
        },
        
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
          "country":{
            "en":'jordon',
            "ar":'لبنان'
          }
        }
        ],   
        categories: [
        {
          "name":"الاعمال الكاملة",
          "image":"categries/الاعمال-الكاملة.jpg"
        },
        {
          "name":"التاريخ والتراجم",
          "image":"categries/التريخ-و-التراجم-840x1024-1-120x146.jpg"
        },
        {
          "name":"الحديث الشريف",
          "image":"categries/الحديث-الشريف.jpg"
        },
        {
          "name":"السيرة والشمائل",
          "image":"categries/السيرة-و-الشمائل-840x1024-1-120x146.jpg"
        },
        
        {
          "name":"الفقه واصوله",
          "image":"categries/الفقه-و-اصوله-840x1024-1-120x146.jpg"
        },
        {
           "name":"القران الكريم وعلومه",
           "image":"categries/القران-الكريم-و-علومه-840x1024-1-120x146.jpg"
        },
        {
           "name":"اللغة العربية وعلومها",
          "image":"categries/اللغة-الغربية-و-علومها-840x1024-1-120x146.jpg"
        },
        
        {
           "name":"اللغة محب الكتب",
          "image":"categries/اللغة-محب-الكتب-120x146.jpg",
        },
        {
           "name":"المنطق وعلم الكلام",
          "image":"categries/المنطق-و-علم-الكلام.jpg",
        },
        {
           "name":"دراسات اسلامية",
          "image":"categries/دراسات-اسلامية.jpg",
        },
      ],
    }
  },
  mounted() {
    const navbarScroll = document.querySelector('.navbar-scroll');

    const searchNavbarScroll = document.querySelector('.search-form-scroll');
    const navLinks = document.querySelectorAll('.nav-link-scroll');
    const navHoverActiveLinks = document.querySelectorAll('.nav-item-xl');

    const navbarHiddenScroll = document.querySelector('.navbar-hidden-scroll');
    const logoScroll = document.querySelector('.logo-scroll');
    const navbarCollapseScroll = document.querySelector('.navbar-collapse-scroll');
    const navbarBarsScroll = document.querySelector('.navbar-bars-scroll');
    const whatsappBtnScroll = document.querySelector('.whatsapp-btn-scroll');
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        if (scrolled === 0) {
            navbarHiddenScroll.classList.remove('d-none');
            //style  not scroll mobile and tablets screens
            // navbar bottom navbar show on not scroll
            navbarScroll.classList.remove('bg-lg-white');
            navbarScroll.classList.remove('bg-xl-white');
            navbarScroll.classList.add('bg-lg-petrol');
            navbarScroll.classList.add('bg-xl-petrol');
            navbarScroll.classList.remove('shadow-sm');
            navbarScroll.classList.remove('top-0');
            navbarScroll.classList.add('top-83');

            // search form
            searchNavbarScroll.classList.add('col-12');
            searchNavbarScroll.classList.remove('col-7');
            logoScroll.classList.add('d-lg-none');
            logoScroll.classList.remove('d-lg-block');
            navbarCollapseScroll.classList.add('col-md-9');
            navbarCollapseScroll.classList.remove('col-md-8');
            // Change the color of nav links
            navLinks.forEach(link => {
              link.classList.remove('text-lg-petrol');
              link.classList.remove('text-xl-petrol');
            });
            navHoverActiveLinks.forEach(link => {
              link.classList.add('nav-item-simon-hover');
              link.classList.remove('nav-item-blueLight-hover');
            });
            // hide bars btn from navbar bottom
            navbarBarsScroll.classList.add('d-none');
            navbarBarsScroll.classList.remove('col-1')       
            // show whatsapp btn in navbar bottom
            whatsappBtnScroll.classList.add('d-none');
            whatsappBtnScroll.classList.remove('col-1');
        } else {
            navbarHiddenScroll.classList.add('d-none');
            navbarScroll.classList.add('shadow-sm');
            navbarScroll.classList.add('top-0');
            navbarScroll.classList.remove('top-83');
            // shhow the logo image
            logoScroll.classList.remove('d-lg-none');
            logoScroll.classList.add('d-lg-block');
            
            navbarCollapseScroll.classList.remove('col-md-9');
            navbarCollapseScroll.classList.add('col-md-8');
            // Change the color of nav links
            navLinks.forEach(link => {
                link.classList.add('text-xl-petrol');
                link.classList.add('text-lg-petrol')
            });
            navHoverActiveLinks.forEach(link => {
              link.classList.remove('nav-item-simon-hover');
              link.classList.add('nav-item-blueLight-hover');
            });
            //style n scroll mobile and tablets screens
            // navbar bottom navbar show onscroll
            navbarScroll.classList.remove('bg-lg-petrol');
            navbarScroll.classList.remove('bg-xl-petrol');
            navbarScroll.classList.add('bg-lg-white');
            navbarScroll.classList.add('bg-xl-white');
            // search form
            searchNavbarScroll.classList.remove('col-12');
            searchNavbarScroll.classList.add('col-7');
            //  show bars btn
            navbarBarsScroll.classList.remove('d-none');
            navbarBarsScroll.classList.add('col-1');
            // show whatsapp btn in navbar bottom
            whatsappBtnScroll.classList.remove('d-none');
            whatsappBtnScroll.classList.add('col-1');
        }
    });
  },
  methods: {
    toggleNavbar() {
      this.$emit('toggle-navbar')
    },
    hideNavbar() {
      this.$emit('hide-navbar')
    }
  }
}
</script>
<style scoped>
.top-83 {
  top: 83px !important;
}
.top-0 {
  top: 0 !important;
}
.menu ul a{
  color: #ffffff;
  font-weight: 600;
}
.menu ul a{
    text-decoration: none;
}
.search-form {
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #e9e9e9;
    background-color: #fff;
    overflow: hidden;
    padding: 0 !important;
    gap:0;
    height: 42px; 
}
.search-form .search-categories {
    direction: rtl;
    height: 42px;
    max-width: 100%;
    background: #fff;
    display: block;

 }
 .search-form .search-categories select {
    text-align: center;
    height: calc(100% - 8px) !important;
    margin: 4px 7px;
    border: none;
    color : #555555;
    border-right: 1px solid  #e9e9e9;
 }
 .search-form .search-categories select:focus {
    outline: 0;
 }
 .search-form input {
    direction: rtl;
   color: #777777;
   display: block;
   line-height: 2;
   padding: 6px 12px;
   width: 100%;
   border: none !important;
   outline: 0;

 }
 .search-form input:focus {

    box-shadow: none
}
/* this lines of code can changed leter*/
.navbar-bottom  .search-form input {
    position: relative;
    top: -42px;
}
.navbar-bottom  .search-form .btn-search {
    position: relative;
    z-index: 9999;
}
.btn-search {
    color: #ffffff;
    background-color: #186475;
    height: 100%;

}
.button:hover, .btn:hover, button:hover, button:focus, input[type="button"]:hover, input[type="button"]:focus, input[type="submit"]:hover, input[type="submit"]:focus, .button:not([href]):not([tabindex]):hover, .btn:not([href]):not([tabindex]):hover, .kapee-button .btn-color-default.btn-style-outline:hover {
    color: #fcfcfc;
    background-color: #3b7d89;
}

.whatsapp-btn {
    font-weight: 600;
    padding: 10px 27px !important;
}
.navbar-bottom .whatsapp-btn-scroll i {
    font-size: 24px;
}
.nav-item-collaspe {
    width: 100% !important;
    padding: 7px  3px;
  border-bottom: 1px solid #ddd
}

.nav-item .nav-link {
   font-size:13px;
   line-height: 21px;
   font-weight: 700;
}
.nav-item-collaspe .nav-link span.nav-link-dropdown {
    width: 90%;
    text-align: right;
    border-left: 1px solid #ddd;
    padding-top: 15px;
    padding-bottom: 15px;
}
.nav-item-collaspe .nav-link .nav-link-text {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 90%;
    text-align: right;
}
.navbar-collapse-scroll .nav-item-simon-hover:hover a:not(.dropdown-item),
.navbar-collapse-scroll .nav-item-simon-hover.active a:not(.dropdown-item) {
    color: rgb(255, 235, 217) !important;  
}

.navbar-collapse-scroll .nav-item-blueLight-hover:hover a:not(.dropdown-item),
.navbar-collapse-scroll .nav-item-blueLight-hover.active a:not(.dropdown-item) {
    color: #3b7d89 !important;  
}
.nav-item-collaspe:hover a {
 color: #d8b731 !important;   
}
.nav-item-collaspe .dropdown-toggle {

    position: relative

}
.nav-item-collaspe .dropdown-toggle::after {
    display: inline-block;
    padding-left: .255em;
    vertical-align: .255em;
    content: "";
    /* border-top: .3em solid; */
    /* border-right: .3em solid transparent; */
    /* border-bottom: 0; */
    /* border-left: .3em solid transparent; */
    /* background-image: url((unknown)); */
    height: 10px;
    width: 10px;

    background-image: url('@/assets/plus.svg') !important;
    border: none!important;
}
.nav-item-collaspe .dropdown-toggle::after {
    background-image: url('@/assets/plus.svg') !important;
    border: none!important;

}
.nav-item-collaspe a span {
    font-size: 13px;
    line-height: 21px;
    font-weight: 600;
}
.nav-item .nav-link a {
    font-size: 13px;
    line-height: 21px;
    font-weight: 600;
}
.icons .icon {
    border-radius: 50%;
    font-size: 22px;
    line-height: 37px;
    width: 40px;
    height: 40px;
    text-align: center;
}

.icons .icon-instagram {
    background-color: #D02A52;
  }
.icons .icon-whatsapp {
    background-color: rgb(13, 193, 67);
  }
 .icons .icon-twitter {
    background-color: rgb(64, 191, 245);
  }
 .icons .icon-facebook {
    background-color: rgb(56, 86, 147);
  }
 .icons .icon:hover {
    opacity: 0.8;
  }
  .dropdown-menu {
    left: unset !important;
    padding: 0;
    min-width: 210px;
  }
.dropdown-menu .dropdown-item{
    color: #333333;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    padding: .4rem 1rem;
}
.dropdown-menu .dropdown-item:hover{
    color: #d8b731  !important  ;
}
.dropdown-menu .dropdown-item-xl:hover{
    color: rgb(35, 112, 244)  !important;
    background-color: rgb(245, 250, 255);
}
/* Show dropdown-menu on hover */
.nav-item.dropdown:hover .dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
}

/*media queries*/
@media (max-width: 576px) {
    .d-xs-block {
        display: block !important;
    }
    .d-xs-none {
        display: none !important;
    }
    .col-xs-12 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
    }
    .col-xs-7 {
        flex: 0 0 14.289% !important;
        max-width: 14.289% !important;
    }   
    .w-xs-100 {
        width: 100% !important;
    }
}
@media (min-width: 577px) {
    .w-sm-75 {
        width: 75% !important;
 
    }
}
@media (min-width: 768px) {
    .w-md-50 {
        width: 50% !important;
 
    }
}
@media (max-width: 664px) {
    .w-sm-md-75 {
        width: 75% !important;
    }
}
@media (min-width: 991px) {
    .bg-lg-petrol{
        background-color: #186475 !important;
        color: #fff !important;
    }
    .bg-lg-white {
        background-color: #fff !important;
        color: #186475 !important;   
    }
    .text-lg-petrol {
        color: #186475 !important;   
    }
}
@media (min-width: 1024px) {
    .bg-xl-petrol {
        background-color: #186475 !important;
        color: #fff !important;
    }
    .bg-xl-white {
        background-color: #fff !important;
        color: #186475 !important;   
    }
    .text-xl-petrol {
        color: #186475 !important;   
    }
}
@media (max-width: 991px) {
    .navbar-top .navbar-toggler {
     display: block !important;
    }
    .navbar-top {
       background-color: #186475 !important;
    }
    .navbar-top .row{
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .navbar-top .collaspe-btn,.navbar-top .navbar-toggler:hover,.navbar-top .navbar-toggler:focus  {
        background: none !important;
    }
    .navbar-top .search-form {
        display: none !important;
    }
    .navbar-top .whatsapp-btn span.text {
        display: none !important;
    }
    .navbar-top .whatsapp-btn {
       background-color: transparent !important;
       border: none !important;
       box-shadow: none !important;

    }
    .navbar-top .whatsapp-btn i{
        font-size: 24px;
    }
    .navbar-bottom .row {
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;

    }
    .navbar-bottom .search-form {
        display: block !important;
    }
    .navbar-bottom .search-form .btn{
        background-color: #fff !important;
        color:#186475
    }
    .navbar-bottom .navbar-collapse{
       display: none;
    }
    .bg-md-petrol {
        background-color: #186475 !important;
        color: #fff !important;
    }
    .col-md-sm-xs-1 {
        flex: 0 0 8.3%;
        width: 8.3%;
    }
  }
</style>