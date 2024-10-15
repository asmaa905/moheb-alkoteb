<template>
    <section class="dor-nashr overflow-hidden">
    <div class="container">
      <div class="row section-title pt-5rem" style=" border-bottom: 2px solid rgb(230, 221, 221) !important;">
        <h2>دور النشر</h2>
      </div>
    
    <div class="row flex-column justify-content-center align-items-center gx-2 " style="padding-top: 28px;">
      <div class="col-md-12 px-0">
        <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators mt-2">
            <li v-for="index in dorLength" :key="index"
              data-target="#carouselExampleIndicators"
              :data-slide-to="index"
              @click="selectDor(index - 1)"
              :class="activeDor == index? ' active':''" 
            ></li>
        </ol>
        <!--               :class="activeDor == index? ' active':''" -->
        <div class="carousel-inner">
          <div class="row d-flex justify-content-between align-items-center ml-0 flex-no-wrap " id="dors-container">
           <div
             class="dor c-ptr text-center d-flex flex-column justify-content-between align-items-center mr-0"
             v-for="dor in ddDorNashr"
             :key="dor.id"
             >
            <div class="carsouel-image rounded-circle  ">
              <img class="d-block w-100"  :src="dor.image" :alt="dor.name" />
            </div>
            <div class="item-text text-center">
              <p>{{dor.name}}</p>
            </div>
           </div>
          </div>
        </div>
            <a class="carousel-control-prev"  @click="prev()">
                <span
                    class="carousel-control-prev-icon c-ptr"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" @click="next()">
                <span
                    class="carousel-control-next-icon c-ptr"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  name: 'dor-nashr',
  data() {
    return {
      dorNashr: [
        {
          "id":0,
          "name":"مكتبة دار البيان دمشق",
          "image":"dor_nashr/مكتبة-دار-البيان-دمشق.jpg",
          
        },
        {
          "id":1,

          "name":"مكتبة الانوار",
          "image":"dor_nashr/مكتبة-الأنوار.jpg",
        },
        {
          "id":2,
          "name":"دار نون للدراسات الاسلامية",
          "image":"dor_nashr/non.jpg",
        },
        {
          "id":3,

          "name":"دار الاصول العلمية",
          "image":"dor_nashr/دار-الاصول-العلمية.jpg",
        },
        
        {
          "id":4,

          "name":"دار الامام ابن عرفه تونس",
          "image":"dor_nashr/الدار-الشامية-تركيا.png",
        },
        {
          "id":5,

            "name":"دار-طوق-النجاة",
          "image":"dor_nashr/دار-طوق-النجاة.jpg",
        },
        {
          "id":6,

            "name":"دار-الحاوي-بيروت",
          "image":"dor_nashr/دار-الحاوي-بيروت.jpg",
        },
        
        {
          "id":7,

            "name":"طواسين",
          "image":"dor_nashr/دار-طواسين.jpg",
        },
        {
          "id":8,

            "name":"دار-غار-حراء",
          "image":"dor_nashr/دار-غار-حراء.jpg",
        },
        
        {
          "id":9,

            "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
        },

        {
          "id":10,

            "name":"مركز جيلانى",
          "image":"dor_nashr/شعار-مركز-جيلاني.jpg",
        },
        
        // {
        //   "id":11,

        //     "name":"دار كنز",
        //   "image":"dor_nashr/دار-كنز-ناشرون-محب-الكتب-1.jpg",
        // },
        
        // {
        //   "id":12,

        //     "name":"دار الفيحاء",
        //   "image":"dor_nashr/دار-الفيحاء-سوريا.png",
        // },
                
        // {
        //   "id":13,

        //     "name":"دار-المعراج-سوريا",
        //   "image":"dor_nashr/دار-المعراج-سوريا.png",
        // },
      ],     
      activeDor: 0
    }
  },
  computed: {
    dorLength() {
      return Math.floor(this.ddDorNashr.length )
    },
    ddDorNashr: {
      get() {
         return this.dorNashr;   
      },
      set(val) {
        this.dorNashr = val
      }
        }
    },
    methods: {
        prev() {
          //get next 
          let slider = document.querySelector("#dors-container");
            let category = document.querySelectorAll(".dor");
            slider.append(category[0]);
            console.log("category[0]",category[0])
            //get prev if dor.id ! == 0
            //if(category[0]! == dorNashr[0])
        },
        next() {

          let slider = document.querySelector("#dors-container");
            let category = document.querySelectorAll(".dor");
            slider.prepend(category[category.length - 1]);
        },
        selectDor() {
           console.log("ang things")
        },
    },
};
</script>

 <style scoped>
 .dor{
  width: 90px;
}
 .dor:hover .item-text p{
  color: #d8b731;
}
 .dor .carsouel-image  {
  border-radius: 50% !important;
  overflow: hidden;
}
 .dor .carsouel-image  img{
  width: 100% !important;
}
.carousel:hover  .carousel-control-next , .carousel:hover .carousel-control-prev{
  opacity: 1;

}
.carousel:hover.carousel-control-prev{
  left: 0;
}
.carousel:hover.carousel-control-next{
  right:  0;
}
.carousel {
  transition: all 0.5s;
  position: relative;
}
.carousel-indicators {
  bottom: -10px;
}
.carousel-control-prev, .carousel-control-next {
  vertical-align: middle;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
  background-color: #fff;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);  height: 70px;
  width: 40px;
  top: 3rem;
  position: absolute;

}
.carousel-control-prev{
  left: -30px;
}
.carousel-control-next{
  right: -30px;
 }
.carousel-control-prev:hover, .carousel-control-next:hover {
  background-color: #186475;
  opacity: 1;
}
.carousel-control-next:hover {
  right: 0;
}
.carousel-control-prev:hover {
  left: 0;
}
.carousel-control-prev:hover .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e")
}
.carousel-control-next:hover .carousel-control-next-icon {
  background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%276%27 height=%276%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e');
}
.carousel-control-next .carousel-control-next-icon{
  background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23186475%27 width=%276%27 height=%276%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e');

}
.carousel-control-prev .carousel-control-prev-icon{
  background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23186475%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e")

}
.carousel-indicators li  {
  font-size: 0;
  border: 0;
  padding: 0;
  width: 11px;
  height: 11px;
  outline: none;
  background-color: rgb(233, 233, 233);
  border-radius: 50%;
}
 .carousel-indicators li.active {
  background-color: rgb(24, 100, 117);
  width: 22px;
  height: 11px;
   border-radius: 40%;

}

</style>