<template>
    <div class="mt-0 main-layout">
        <navbar-comp  @toggle-navbar="toggleNavbar()" @hide-navbar="hideNavbar()"/>
              <slot name="content"/>
        <footer-comp />

      </div>
    </template>
    
    <script>
      import FooterComp from './Footer.vue';
      import NavbarComp from './Navbar.vue';
      export default {
        name:"main-layout",
        data() {
          return{
            // showNavbarCollapse : true
          }
        },
        props: ['showNavbarCollapse'],
        methods: {
          toggleNavbar() {

            this.$emit('toggle-navbar')

          },
          hideNavbar() {
              this.$emit('hide-navbar')
          }
        },
        components: { FooterComp, NavbarComp },
      }
    </script>
