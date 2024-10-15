<template>
  <!-- start dor nashr -->
  <section class="all-dor-nashr">
    <div class="container">
      <div class="row section-title pt-3" style=" border-bottom: 2px solid rgb(230, 221, 221) !important;">
        <h2>دور النشر</h2>
      </div>
    <div class="row align-items-center  gx-2 " style="padding-top: 28px;">
      <div  v-for="(dor, i) in dorNashr"  :key="i" class=" product-brand col-4 col-sm-3 col-md-2 col-lg-8 col-xl-10 px-0">
        <div class="dor w-100 text-center" >
          <div class="dor-image position-relative">
            <img class="d-block w-100" :src="dor.image" :alt="dor.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <!-- end dor nashr -->
</template>
<script>
export default {
  name: 'dor-nashr',
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
    }
  },

};
</script>
 <style scoped>
.dor{
  width: 18.33%;
  justify-items: center;
  align-items: center;
  justify-content: center;


}
 .dor .dor-image  {
    

  height:auto;
  overflow: hidden;

  cursor: pointer;
  display: inline-flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin: auto;
  transition: all 0.5s;
}

.dor .dor-image:hover img {
   
    opacity: 1;
    -moz-filter: grayscale(0);
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}

.dor .dor-image  img{
  width: 100% !important;
  filter: grayscale(100%);
  opacity: .6;
}
.dor .dor-image img, video {
  height: auto;
  max-width: 100%;
  padding: 5px;
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
</style>