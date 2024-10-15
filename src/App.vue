<template>
  <router-view />
</template>
<script>
export default {
  name: 'app',

};
</script>
<style lang="scss">
body {
  font-family: Cairo, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}
.bg-muted {
  background-color: rgb(248, 248, 248);
}
@media (min-width: 1025px) {
  .container {
      width: 96% !important;
  }
}
.container {
  max-width: 1200px !important;
}
.pt-5rem {
padding-top: 5rem;
}
.row {
  padding-left: 0;
  padding-right: 0;
}
body {
  direction: rtl;
  font-family: Cairo, Arial, Helvetica, sans-serif !important;
}
.bg-petrol{
  color: #ffffff !important;
  background-color: #186475 !important;
}
.text-petrol {
  color: #186475  !important;
}
.h-100 {
  height: 100%;

}
.btn {
  border: 0;
  border-radius: 2px !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  padding: 12px 20px;
  text-transform: uppercase;
}
.btn-more  {
   width: 63px;
   height: 40px;
   padding: 10px 14px;
     font-size: 12px;
     margin-top: -5px;
 
 
 }
.btn-more:focus  {
  outline: none !important;
}
.btn-more:hover  {
  opacity: 0.8;
}
.section-title h2{
  color: rgb(51, 51, 51);
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  position: relative;
}
.section-title h2::after{
  bottom: -.4em;
  content: "";
  right: 0;
  position: absolute;
  width: 100%;
  color: rgb(51, 51, 51);

  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #186475;
}

::selection {
  color: #ffffff;
  background: #186475;
}
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
