<!-- HomeView.vue -->
<template>
  <div class="home p-0 m-0" style="position: relative">
    <main-layout @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()">
      <template v-slot:content>
        <dor-nashr></dor-nashr>
        <Libraries />
        <specialBooks />
        <discounts  />
        <recent-arrive></recent-arrive>
        <moreSaled></moreSaled>
        <i-instagram></i-instagram>
        <allDorNashr ></allDorNashr>
      </template>
    </main-layout>
    <div class="light-container position-absolute top-0 bottom-0 start-0 end-0  d-lg-none" v-if="showNavbarCollapse"></div>

  </div>
</template>

<script>
import MainLayout from '../Components/Layouts/mainLayout.vue';
import dorNashr from '../Components/Pages/dorNashr.vue';
import Libraries from '@/Components/Pages/libraries.vue';
import specialBooks from '../Components/Pages/specialBooks.vue';
import Discounts from '../Components/Pages/Discounts.vue';
import recentArrive from '../Components/Pages/recentArrive.vue';
import moreSaled from '../Components/Pages/moreSaled.vue';
import iInstagram from '../Components/Pages/instagram.vue';
import allDorNashr from '../Components/Pages/allDorNashr.vue';

export default {
  name: 'HomeView',
  
  data(){
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
     dorNashr,
     Libraries,
     specialBooks,
     Discounts,
     recentArrive,
     moreSaled,
     iInstagram,
     allDorNashr

  },
};
</script>
<style scoped>
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