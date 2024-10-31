<template>
    <section class="dor-nashr overflow-hidden">
    <div class="container">
      <div class="row section-title pt-5" style=" border-bottom: 2px solid rgb(230, 221, 221) ">
        <h2>دور النشر</h2>
      </div>
    
    <div class="row flex-column justify-content-center align-items-center gx-2 " style="padding-top: 28px;">
      <div class="col-md-12 px-0">
        <div class="autoplayy row " >
          <div
          class="h-100 dor c-ptr text-center d-flex flex-column justify-content-between align-items-center mr-0"
          v-for="dor in ddDorNashr"
            :key="dor.id"
           
          >
          
          <div class="carsouel-image rounded-circle  ">
            <img class="d-block w-100"   :src="dor.image" :alt="dor.name" />
          </div>
          <div class="item-text text-center">
            <p>{{dor.name}}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<script>
import $ from 'jquery';
import 'slick-carousel';
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
      ],     
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
    mounted() {
     // $('.toto').parent().css('height', '100%');

     // Ensure the DOM is ready before initializing Slick
     this.$nextTick(() => {

        this.initializeSlick();
        document.querySelectorAll('.toto').forEach(function(totoElement) {
            var parentElement = totoElement.parentElement;
            parentElement.style.height = '100%';
        });
     });
    },
    methods: {
      initializeSlick() {
  $('.autoplayy').slick({
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    rtl: true,
    dots: true,
    infinite: true,
    // Set to false to detect the last slide properly
    prevArrow: '<button type="button" class="slick-prev custom-prev"><div class="slick-prev-icon"></div></button>',
    nextArrow: '<button type="button" class="slick-next custom-next"><div class="slick-next-icon"></div></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 6, 
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });

    // const $slider = $('.autoplayy');
    // const $nextButton = $('.custom-next');

    // // Disable next button when on the last slide
    // $slider.on('afterChange', function(event, slick, currentSlide) {
    //   if (currentSlide >= slick.options.slidesToShow) {
    //     $nextButton.prop('disabled', true);
    //   } else {
    //     $nextButton.prop('disabled', false);
    //   }
    // });

    $('.custom-prev').on('click', this.handlePrev);
    $('.custom-next').on('click', this.handleNext);
  },
      handlePrev() {
        console.log('Prev button clicked');
        $('.autoplayy').slick('slickPrev'); // Swapped with slickPrev
      },
      handleNext() {
        console.log('Next button clicked');
       $('.autoplayy').slick('slickNext'); // Swapped with slickNext
      }
},

};
</script>

 <style>
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

.autoplayy {
  transition: all 0.5s;
  position: relative;
}
.slick-dots {
  bottom: -10px;
}

.slick-dots li {
  position: relative;
  display: inline-block;
  width: 11px !important;
  height: 11px !important;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;

  font-size: 0;
  border: 0;
  outline: none;
  background-color: rgb(233, 233, 233);
  border-radius: 50%;
}
 .slick-dots li.slick-active {
  background-color: rgb(24, 100, 117);
  width: 22px !important;
  height: 11px !important;
  border-radius: 40%;

}

.slick-dots li button::before{
  content: '' !important;

}
.slick-prev:before, .slick-next:before {
  content: '' !important;

}

.autoplayy {
  width: 100%;
  margin: 0 auto;
}
div.slick-slide {
  padding: 0 10px !important;
/*  height: 300px !important;*/
}
div.slick-slide >div {
  height: 100%;
}
.px-30 {
  padding-left: 30px;
  padding-right: 30px;
}

.autoplayy button.slick-prev ,.autoplayy button.slick-next  {
  vertical-align: middle;
  text-align: center;
  opacity: 0;
  transition: all 1s;/**/
  background-color: #fff;
  direction: ltr;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);  height: 70px;
  width: 40px;
  top: 50%;
  position: absolute;
  z-index: 999999;

}

.autoplayy button.slick-prev {
  right: -30px ;
}
.autoplayy button.slick-next{
  /*left: -30px !important;*//*should changed*/
  left: -30px ;
  right: unset !important;
 }


.autoplayy:hover  button.slick-next , .autoplayy:hover button.slick-prev{
  opacity: 1;
  background-color: #fff;

}
.autoplayy button.slick-prev:hover, .autoplayy button.slick-next:hover {
  background-color: #186475 !important;
  
}
.autoplayy:hover button.slick-next{
  left: 0 ;
   
}
.autoplayy:hover button.slick-prev{
  right:  0;
}

.autoplayy button.slick-next:hover {
  left: 0;

}
.autoplayy button.slick-prev:hover {
  right: 0;

}
.autoplayy button.slick-prev:hover .slick-prev-icon{
    background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%276%27 height=%276%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e');
  }
  .autoplayy button.slick-next:hover .slick-next-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e");

  }
  .autoplayy button.slick-next .slick-next-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23186475%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e");

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

  }
  .autoplayy button.slick-prev .slick-prev-icon{
    background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23186475%27 width=%276%27 height=%276%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e');

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  button.custom-next, button.custom-prev {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
  button.custom-prev .slick-prev-icon, .custom-next .slick-next-icon {
    width: 15px; /* Adjust image size as needed */
    height: 15px;
  }
  @media screen and (min-width: 768px) {
    .autoplayy button.slick-prev ,.autoplayy button.slick-next   {
      top:40%
    }
  }
</style>