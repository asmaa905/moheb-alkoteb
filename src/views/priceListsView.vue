<template>
  <main-layout @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()">
    <template v-slot:content>
      <section class="price-lists">
        <div class="container">
          <div class="path text-center row">
            <h1 class="col-12 pt-5 text-center list-title">قوائم الأسعار</h1>

            <h5 class="col-12 pt-1 text-center path-text">Home / قوائم الأسعار</h5>
          </div>
        <div class="row gx-5" style="padding-top: 28px;">
          <div class="col-12 text-right lists-links">
            <ul>
              <li v-for="list in lists" :key="list.id">
                <a :href="list.downLink">
                  <span>قائمة</span>
                  <span> {{list.year}}</span>
                </a>

                
              </li>
            </ul>
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
    name: 'books-view',
    data() {
      return {
        lists: [
          {
           "id":1,
           "year":"2021",
           "downLink":'#'
          },
          {
           "id":2,
           "year":"2022",
           "downLink":'#'
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
.path .list-title {
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
.lists-links ul li{
 font-size: 28px;
 line-height: 39px;
 font-weight: 600;
}
.lists-links ul li a{
  text-decoration: none;
  color: rgb(51, 51, 51) ;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
  text-indent: 0px !important;
  text-align: start !important;
  text-align-last: start !important;
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