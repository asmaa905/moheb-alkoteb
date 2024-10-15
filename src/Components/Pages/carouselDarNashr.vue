<template>
    <section class="categories d-flex overflow-hidden">
        <div class="categories-container w-100" id="categories-container">
            <div
                class="category c-ptr text-center py-2 justify-content-center flex-column d-none"
                v-for="dor in dorNashr"

                :key="dor.id"
                :class="'d-flex'"
               
            >
            <div >
                <a
               

              href="#"
                class="w-100 mx-auto rounded-lg d-flex-center"
            >
                <img :src="dor.image" class="w-100" />
            </a>
            <p v-text="dor.name" class="w-100"></p>
            </div>
               
            </div>
        </div>
        <div class="indicators">
            <a class="carousel-control-prev" @click="prev()">
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
    </section>
</template>
<script>

export default {
    name: "carousel-dor-bashr",

    data(){
        return{
            dorNashr: [
        {
          "id":0,
          "name":"مركز تحقيق النصوص",
          "image":"dor_nashr/مركز-تحقيق-النصوص.jpg",
          
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

            "name":"دار كنر الناشرون",
          "image":"dor_nashr/knzNashron.jpg",
        },
        {
          "id":6,

            "name":"دار الكمال المتحدة",
          "image":"dor_nashr/دار-الكمال-المتحدة.jpg",
        },
        
        {
          "id":7,

            "name":"طواسين",
          "image":"dor_nashr/دار-طواسين.jpg",
        },
        {
          "id":8,

            "name":"دار الكمال المتحدة",
          "image":"dor_nashr/دار-الكمال-المتحدة.jpg",
        },
        
        {
          "id":9,

            "name":"طواسين",
          "image":"dor_nashr/دار-طواسين.jpg",
        },

        {
          "id":10,

            "name":"دار الكمال المتحدة",
          "image":"dor_nashr/دار-الكمال-المتحدة.jpg",
        },
        
        {
          "id":11,

            "name":"طواسين",
          "image":"dor_nashr/دار-طواسين.jpg",
        },

      ],  
       displayAll:false
        }
    },
    methods: {
        prev() {
            let slider = document.querySelector("#categories-container");
            let category = document.querySelectorAll(".category");
            slider.prepend(category[category.length - 1]);
        },
        next() {
            let slider = document.querySelector("#categories-container");
            let category = document.querySelectorAll(".category");
            slider.append(category[0]);
        },
    },
};
</script>
<style lang="scss" scoped>
.categories {
    position: relative;
    .categories-container {
        display: flex;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        width: 100%;
    }
}
.category {
    padding: 0 5px;
    width: 33%;
    @media (max-width: 768px) {
        width: 22%;
    }
    a {
        padding-top: 70%;
        position: relative;
        @media (max-width: 567px) {
            padding-top: 100%;
        }
    }
}

.b-img {
    max-height: 100% !important;
    width: 100% !important;
    border-radius: 1.5em;
    position: absolute;
    top:0;
    @media (max-width: 768px) {
        border-radius: 50%;
    }
}
img {
    height: 100% !important;
    width: 100% !important;
    @media (max-width: 768px) {
        border-radius: 50%;
    }
}
P {
    font-size: 1.5em;
    @media (max-width: 567px) {
        font-size: 1.1em;
        font-weight: bold;
        height: 25%;
    }
}
.carousel-control-next,
    .carousel-control-prev {
        top: 50%;
        border-radius: 5px;
        margin: 0 10px;
        width: 25px;
        height: 25px;
        background-color: rgba($color: #000000, $alpha: 0.5);
        @media(max-width:567px){
            display: none;
        }
    }
html[dir="rtl"] {
    .carousel-control-next,
    .carousel-control-prev {
        transform: rotateY(180deg);
    }
}
</style>
