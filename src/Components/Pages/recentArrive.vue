<template>
  <section class="recent-arrive">
    <div class="container">
      <div class="row justify-content-between  mx-0" style=" border-bottom: 2px solid rgb(230, 221, 221) !important;">
        
     
      <div class="section-title">
          <h2>وصل حديثا</h2>
         
        </div>
        <button class="btn btn-more bg-petrol text-white">المزيد</button>
       </div>
    <div class="row gx-5 " style="padding-top: 28px;">
      <!-- pl-0 pr-0 and padding for item insteed of gx-5 -->
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6  col-12  pb-5  " 
      v-for="(book, index) in recentBooks" :key="index">
          <div class="item position-relative">
            <div class=" image position-relative">
              <img height="255"  class="w-100  shadow-sm" :src="book.image" alt="">
              <div class="book-labels position-absolute">
                <span class="on-sale m-0" v-if="book.discount">
                  {{ book.discount }}
                  %
                </span>
                <span class="featured" v-if="book.featured">مميز</span>
              </div>
            </div>

              <div class="lib-text bg-white w-75 m-auto ">
                <p  class=" book-name">
                  {{abbr(book.name)}}
              </p>
              <div class="price d-flex justify-content-between">
                <p class="original-price mx-2">
                  <span>EGP</span>{{book.price}}
                </p>
                <p v-if="book.discount" class="discount-price text-muted text-decoration-line-through">
                    <span>EGP</span>{{book.price - ((book.discount/ 100) * book.price )}}
                </p>
              </div> 
            </div>
          </div>
      </div>

    </div>
  </div>

  </section>
</template>
<script>
export default {
  name: 'recent-arrive',
  data() {
    return {
      recentBooks: [
          {
            "name":"حاشية الفيشي على شرح قطر الندى",
            "image":"books/حاشية-فتح-الجليل-متجر-محب-الكتب-www.muhibalkutub.com_1-120x175.jpg",
            "discount":20,
            "featured":1,
            "price": 250
          },
          {
            "name":"التاريخ والتراجم",
            "image":"categries/التريخ-و-التراجم-840x1024-1-120x146.jpg",
            "discount":75,
            "featured":1,
            "price": 250
          },
          {
            "name":"الحديث الشريف",
            "image":"categries/الحديث-الشريف.jpg",
            "discount":10,
            "featured":1,
            "price": 250

          },
          {
            "name":"السيرة والشمائل",
            "image":"categries/السيرة-و-الشمائل-840x1024-1-120x146.jpg",
            "discount":0,
            "featured":1,
            "price": 250
          },
          
          {
            "name":"الفقه واصوله",
            "image":"categries/الفقه-و-اصوله-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          },
          {
            "name":"القران الكريم وعلومه",
            "image":"categries/القران-الكريم-و-علومه-840x1024-1-120x146.jpg",
            "discount":30,
            "featured":0,
            "price": 250
          }
      ],
        }
  },
  methods: {

  }
};
</script>
<style scoped>
.item{
  /*padding: 15px 0 15px 30px;*/
  position: relative;
  transition: transform .5s ease;
}
.item:hover {
  color: #186475;

  z-index: 91;
  transform: scale(1.05);
}
.item:hover p.book-name {
  color: #186475;

}
.item .lib-text p.book-name {
  color:rgb(0, 60, 63);
 font-weight: 900;
 line-height: 22px;
 font-size: 16px;

}
.item .price p {
  color:rgb(0, 60, 63);
  font-weight: 600;
  line-height: 26px;
  font-size: 14px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.book-labels {
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: start;
  align-items: flex-start;
  top: 1em;
  z-index: 9;
}
.book-labels .on-sale ,.book-labels .featured {
  color: #fff;
  font-weight: 600;
  line-height: 16px;
  font-size: 10px;
  display: block;
  margin-top: 8px;
  padding: 3px 10px;
  text-transform: uppercase;
}
.book-labels .on-sale {
  background-color: #dd1818;

}
.book-labels .featured {
  background-color: #ff9f00;

}
@media (max-width: 250px) {
  .item .price {
    display: block !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>