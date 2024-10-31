<template>
  <main-layout @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()">
    <template v-slot:content>
      <section class="books bg-muted">
        <div class="container">
          <div class="path text-center row bg-muted">
            <h1 class="col-12 pt-5 text-center list-title">تطبيق الهاتف</h1>
            <h5 class="col-12 pt-1 text-center path-text">الرئيسية / تطبيق الهاتف</h5>
          </div>
          <div class="row gx-5 bg-white py-5 text-center google-apps" style="padding-top: 45px;">
            <h5 class="col-12 text-center">قم بتحميل نسخة I PHONE</h5>
            <div class="col-12 apple-ar">
              <img  style="width: 100%;" loading="lazy" src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-2-3.png" data-lazy-type="image" data-src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-2-3.png" alt="" class="wp-image-7244 lazy-loaded">
            </div>
            <h5 class="col-12"><a href="#">قم بتحميل نسخة ANDROID</a></h5>
            <div class="col-12 play-ar">
              <img style="width:  100%; " loading="lazy" src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3.png" data-lazy-type="image" data-src="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3.png" alt="" class="wp-image-7232 lazy-loaded" srcset="https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3.png 843w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-210x30.png 210w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-160x23.png 160w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-768x111.png 768w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-120x17.png 120w, https://muhibalkutub.com/wp-content/uploads/2023/04/Untitled-3-3-300x43.png 300w" data-srcset="" sizes="(max-width: 327px) 100vw, 327px"> 
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
    name: 'mobile-app',
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
.google-apps h5 {
  font-size: 26px;
  line-height: 36px;
  color: rgb(51, 51, 51)  ;
  font-weight: 700;
  padding-bottom: 1rem;
  padding-top: 1rem;

}
.google-apps h5:hover {
  color: rgb(216, 183, 49)

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