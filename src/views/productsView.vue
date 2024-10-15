<template>
  <main-layout @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()">
    <template v-slot:content>
      <section class="books">
        <div class="container">
          <div class="path text-right row">

            <h5 class="col-12 pt-5 text-right path-text">Home / الكتب</h5>
          </div>
        <div class="row gx-5" style="padding-top: 28px;">
          <div
            class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12  col-12  pb-5" 
            v-for="(book, index) in AllBooks" :key="index">
              <div class="item position-relative">
                    <div class="image position-relative">
                      <img height="255"  class="w-100  shadow-sm" :src="book.image" alt="">
                      <div class="book-labels position-absolute">
                        <span class="on-sale m-0" v-if="book.discount">
                          {{ book.discount }}
                          %
                        </span>
                        <span class="featured" v-if="book.featured">مميز</span>
                      </div>
                    </div> 
                  <div class="lib-text bg-white w-75 m-auto ">
                    <p class="book-name"> {{abbr(book.name)}} </p>
                    <div class="book-price d-flex justify-content-between">
                      <p class="original-price mx-2">
                        <span>EGP</span>642
                      </p>
                      <p v-if="book.discount" class="discount-price text-muted text-decoration-line-through">
                          <span>EGP</span>642
                      </p>
                    </div>
                  </div>
              </div>
          </div>
  
        </div>
      </div>
  
      </section>
     </template>
    </main-layout>
    <div class="light-container position-absolute top-0 bottom-0 start-0 end-0  d-lg-none" v-if="showNavbarCollapse"></div>
  </template>
  <script>
  import MainLayout from '../Components/Layouts/mainLayout.vue';

  export default {
    name: 'products-view',
    data() {
      return {
        AllBooks: [
          {
            "name":"حاشية الفيشي على شرح قطر الندى",
            "image":"../books/حاشية-فتح-الجليل-متجر-محب-الكتب-www.muhibalkutub.com_1-120x175.jpg",
            "discount":20,
            "featured":1,
            "price": 250
          },
          {
            "name":"التاريخ والتراجم",
            "image":"../categries/التريخ-و-التراجم-840x1024-1-120x146.jpg",
            "discount":75,
            "featured":1,
            "price": 250
          },
          {
            "name":"الحديث الشريف",
            "image":"../categries/الحديث-الشريف.jpg",
            "discount":10,
            "featured":1,
            "price": 250

          },
          {
            "name":"السيرة والشمائل",
            "image":"../categries/السيرة-و-الشمائل-840x1024-1-120x146.jpg",
            "discount":10,
            "featured":1,
            "price": 250
          },
          
          {
            "name":"الفقه واصوله",
            "image":"../categries/الفقه-و-اصوله-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          },
          {
            "name":"القران الكريم وعلومه",
            "image":"../categries/القران-الكريم-و-علومه-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          },
          {
            "name":"حاشية الفيشي على شرح قطر الندى",
            "image":"../books/حاشية-فتح-الجليل-متجر-محب-الكتب-www.muhibalkutub.com_1-120x175.jpg",
            "discount":20,
            "featured":1,
            "price": 250
          },
          {
            "name":"التاريخ والتراجم",
            "image":"../categries/التريخ-و-التراجم-840x1024-1-120x146.jpg",
            "discount":75,
            "featured":1,
            "price": 250
          },
          {
            "name":"الحديث الشريف",
            "image":"../categries/الحديث-الشريف.jpg",
            "discount":10,
            "featured":1,
            "price": 250

          },
          {
            "name":"السيرة والشمائل",
            "image":"../categries/السيرة-و-الشمائل-840x1024-1-120x146.jpg",
            "discount":10,
            "featured":1,
            "price": 250
          },
          
          {
            "name":"الفقه واصوله",
            "image":"../categries/الفقه-و-اصوله-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          },
          {
            "name":"القران الكريم وعلومه",
            "image":"../categries/القران-الكريم-و-علومه-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          },
          {
            "name":"حاشية الفيشي على شرح قطر الندى",
            "image":"../books/حاشية-فتح-الجليل-متجر-محب-الكتب-www.muhibalkutub.com_1-120x175.jpg",
            "discount":20,
            "featured":1,
            "price": 250
          },
          {
            "name":"التاريخ والتراجم",
            "image":"../categries/التريخ-و-التراجم-840x1024-1-120x146.jpg",
            "discount":75,
            "featured":1,
            "price": 250
          },
          {
            "name":"الحديث الشريف",
            "image":"../categries/الحديث-الشريف.jpg",
            "discount":10,
            "featured":1,
            "price": 250

          },
          {
            "name":"السيرة والشمائل",
            "image":"../categries/السيرة-و-الشمائل-840x1024-1-120x146.jpg",
            "discount":10,
            "featured":1,
            "price": 250
          },
          
          {
            "name":"الفقه واصوله",
            "image":"../categries/الفقه-و-اصوله-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          },
          {
            "name":"القران الكريم وعلومه",
            "image":"../categries/القران-الكريم-و-علومه-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          }
      ],
      showNavbarCollapse: false
    }
    },

  methods:{
    hideNavbar() {
        const navbar = document.getElementById('navbarMd');
         navbar.classList.remove('d-flex');
         navbar.classList.add('d-done');
         this.showNavbarCollapse = false;

    },
    toggleNavbar() {
      const navbar = document.getElementById('navbarMd');
      if (navbar.classList.contains('d-none')) {
         navbar.classList.remove('d-none');
         navbar.classList.add('d-flex');
         this.showNavbarCollapse = true;
      } else {
        navbar.classList.add('d-none');
        navbar.classList.remove('d-flex');
        this.showNavbarCollapse = false;


      }
    }
  },
  components: {
    MainLayout,

  },
};
</script>
<style scoped>
.path .price-list-title {
  font-size: 42px;
  color: rgb(51, 51, 51)  ;
  font-weight:700 ;
  line-height: 50px;
}
.path h5 {
  color:rgb(0, 47, 51);
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}
.item{
  /* padding: 15px 0 15px 30px;*/
   position: relative;
   transition: transform .5s ease;
 }
 .item:hover {
   color: #186475;

   z-index: 91;
   transform: scale(1.05);
 }
 @media (max-width: 284px) {
   .col-xs-12 {
     flex: 0 0 100%;
     max-width: 100%;
   }
 }
 .item:hover p.book-name {
   color: #186475;

 }
 .item .lib-text p.book-name {
   color:rgb(0, 60, 63);
  font-weight: 900;
  line-height: 22px;
  font-size: 16px;

 }
 .item .price p {
   color:rgb(0, 60, 63);
   font-weight: 600;
   line-height: 26px;
   font-size: 14px;

   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
 }
 .book-labels {
   display: flex;
   -ms-flex-direction: column;
   flex-direction: column;
   -ms-flex-align: start;
   align-items: flex-start;
   top: 1em;
   z-index: 9;
 }
 .book-labels .on-sale ,.book-labels .featured {
   color: #fff;
   font-weight: 600;
   line-height: 16px;
   font-size: 10px;
   display: block;
   margin-top: 8px;
   padding: 3px 10px;
   text-transform: uppercase;
 }
 .book-labels .on-sale {
   background-color: #dd1818;
 
 }
 .book-labels .featured {
   background-color: #ff9f00;
 
 }
 @media (max-width: 250px) {
   .lib-text .book-price {
     display: block !important;
     margin-left: 0 !important;
     margin-right: 0 !important;
   }
 }
  .light-container {
    background-color: rgb(81 74 74 / 44%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    
  }  
</style>