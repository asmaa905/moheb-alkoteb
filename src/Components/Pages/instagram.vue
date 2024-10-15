<template>
    <!-- start dor nashr -->
    <section class="i-instagram">
      <div class="container">
        <div class="row justify-content-between" style=" border-bottom: 2px solid rgb(230, 221, 221) !important;margin-bottom: 28px;">
            <div class="section-title " >
                <h2>INSTAGRAM</h2>
            </div>
        </div>
        <div class="row"  style="margin-bottom: 28px;">
            <div class="offset-md-5 col-md-7 follow-button">
                <a href="#" class=" btn-follow" >
                    <i class="fab fa-instagram"></i>
                    <span>تابعنا على انستجرام</span>
                </a>
            </div>
        </div>
    </div>

    </section>
    <!-- end libraries-->
  </template>
  <script>
  export default {
    name: 'i-instagram',
    methods: {

    }
  };
  </script>
<style scoped>
.btn-follow {
 
    background: rgb(53, 157, 255);


    display: inline-block;
    vertical-align: top;
    zoom: 1;
    padding: 7px 14px;
    margin: 5px auto 0 auto;
    border: none;
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    line-height: 1.5;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
}
a.btn-follow {
    text-decoration: none;
}
.btn-follow span {
    padding-right: 6px;
}
.btn-follow:hover {
    opacity: 0.9
}
</style>