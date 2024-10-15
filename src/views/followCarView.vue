<template>
  <main-layout @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()">
    <template v-slot:content>
      <section class="follow-car">
        <div class="container">
          <div class="path text-center row bg-muted">
            <h1 class="col-12 pt-5 text-center list-title list-follow-text">تبع شحنتك</h1>
            <h5 class="col-12 pt-1 text-center path-text">الرئيسية / تتبع شحنتك</h5>
          </div>
        <div class="row g-5 bg-white py-5 text-center" >
          <h5 class="col-12">
            <a class="w-100"  href="https://bosta.co/ar-eg/tracking-shipments?shipment-number=">

              <img class="w-100"  src="/follow_car/1.webp" alt="">
            </a>
          </h5>
          <h5 class="col-12">
            <a class="w-100"  href="https://www.dhl.com/kw-en/home/tracking.html">
              <img class="w-100"  src="/follow_car/2.webp" alt="">
            </a>
          </h5>

          <h5 class="col-12">
            <a  class="w-100" href="https://www.dhl.com/kw-en/home/tracking.html">
              <img class="w-100"  src="/follow_car/3.webp" alt="">
            </a>
          </h5>
          <h5 class="col-12">
            <a  class="w-100" href="https://wa.me/201000373948">
              <img class="w-100"  src="/follow_car/4.webp" alt="">
            </a>
          </h5>
          <h5 class="col-12">
            <a class="w-100" href="https://wa.me/201000373948">
              <img class="w-100" src="/follow_car/5.jpg" alt="">
            </a>
          </h5>

          
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
    name: 'follow-car-view',
    data() {
      return {
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
.path .list-follow-text {
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
.wp-block-image {
  margin-bottom: 1.5em;
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