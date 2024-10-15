<template>
    <!-- start dor nashr -->
    <section class="libraries">
      <div class="container">
        <div class="row libraries-title pt-5  mx-0 ">
          <h2> اقسام المكتبة        </h2>
        </div>
      <div class="row  gx-5 " style="padding-top: 28px;">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pb-5" s
        v-for="(cat, index) in categories" :key="index">
            <div class="item position-relative">
                <img class="w-100 shadow-sm" :src="cat.image" alt="">
                <div class="lib-text  w-75 m-auto position-absolute"><p class=" p-0 my-2">
                  {{cat.name}}
                </p>
                </div>
            </div>
        </div>

      </div>
    </div>

    </section>
    <!-- end libraries-->
  </template>
  <script>
  export default {
    name: 'l-libraries',
    data() {
      return {
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
    methods: {

    }
  };
  </script>
<style scoped>
.libraries-title {
  position: relative;

}
.libraries-title h2{
  color: rgb(51, 51, 51);
  font-weight: 700;
  font-size: 20px;
    line-height: 28px;
  text-align: center;
  width: 100%;
  /*padding: 0.8px;*/ /* محتاج يتعدل زى الموقع */
  
}
.libraries-title h2::after{
  bottom: 1rem;
  content: "";
  left: 0;
  position: absolute;
  width: 40%;
  color: rgb(51, 51, 51);

  border-top-width: 2px;
  border-bottom-width: 3px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #363c3d47;
}
.libraries-title h2::before{
  bottom: 1rem;
  content: "";
  right: 0;
  position: absolute;
  width: 40%;
  color: rgb(51, 51, 51);
  border-top-width: 2px;
  border-bottom-width: 3px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #363c3d47;
}
.libraries .item{
  position: relative;
  overflow: hidden;
}
.libraries .item img{

  transition: transform .5s ease;
}

.libraries .item:hover img{
  z-index: 91;

    transform: scale(1.05);
}
.libraries .item:hover .lib-text {
  color: #186475;

  background-color: rgb(255, 255, 255);
}
.libraries .lib-text {
  
  position: absolute;
  bottom: 6%;
  left: 12%;
  text-align: center;
  width: 75% !important;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.95);
  align-self: center;
}
.w-90 {
  width: 95% !important;
}
</style>