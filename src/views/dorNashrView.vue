<template>
  <main-layout @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()">
    <template v-slot:content>
      <section class="dor-nashr-page bg-muted">
        <div class="container">
          <div class="path text-center row">
            <h1 class="col-12 pt-5 text-center list-title">دور النشر</h1>
            <h5 class="col-12 pt-1 text-center path-text">Home / دور النشر</h5>
          </div>
        </div>
          <div class="bg-white mx-0" style="padding-top: 28px;">
            <div class="container">
              <div class="row">
                <div  v-for="(dor, i) in dorNashr"  :key="i" class=" product-brand  col-4 col-sm-3 col-md-2 col-lg-8 col-xl-10 px-0  mx-0">
                  <div class="dor w-100 text-center" >
                    <div class="dor-image position-relative">
                      <img class="d-block w-100" :src="dor.image" :alt="dor.name" />
                    </div>
                    <div class="dor-text">
                      <p>{{dor.name}}</p>
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
    name: 'books-view',
    data() {
      return {
        dorNashr: [
        {
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
        },
        {
          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
        },
        {
          "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
          "name":"دار الاصول العلمية",
          "image":"dor_nashr/دار-الاصول-العلمية.jpg",
        },
        
        {
          "name":"دار الامام ابن عرفه تونس",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
        },
        {
          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
          "name":"دار الاصول العلمية",
          "image":"dor_nashr/دار-الاصول-العلمية.jpg",
        },
        
        {
          "name":"دار الامام ابن عرفه تونس",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
        },
        {
          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
          "name":"دار الاصول العلمية",
          "image":"dor_nashr/دار-الاصول-العلمية.jpg",
        },
        
        {
          "name":"دار الامام ابن عرفه تونس",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        
        {
           "name":"الدار الشامية تركيا",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
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

.dor{
  width: 12.5%;
  justify-items: center;
  align-items: center;
  justify-content: center;
}
.dor:hover .dor-text p{
  color: #d8b731 !important;   
}
 .dor .dor-image  {
  height:10rem;
  overflow: hidden;
  cursor: pointer;
  margin: auto;
  transition: all 0.5s;
}


.dor .dor-image  img{
  width: 100% !important;
}
.dor .dor-image img, video {
  height: auto;
  max-width: 100%;
  padding: 5px;
}
.dor .dor-text p {
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #186475  !important;
}
@media (min-width: 768px) {
  .col-lg-8 {
    flex: 0 0 12.50%;
    max-width: 12.50%;
  }
}
@media (min-width: 992px) {
  .col-xl-10 {
    flex: 0 0 10%;
    max-width: 10%;
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