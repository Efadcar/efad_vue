<template>
  <div>
    <section class="mt-10">
    <div class="container">
        <div class="row">
            <div class="col-12 ">
                <div class="main-heading ">
                    <h1 >{{results.page_title}}</h1>
                </div>
            </div>
        </div>
    </div>
</section>
<section rol="howrentacar">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6" style="font-size: 18px; padding-right: 6%"> 
                <div v-html="results.page_text"></div>
             </div>
            <div class="col-sm-6"> <img src="../../assets/rtl/images/about-bigpic.jpg" class="img-fluid" alt="About Efad"> </div>
        </div>
    </div>
    
</section>
  </div>
</template>
<!-- $.parseHTML( str ), -->

<script>
   // Import plugins if any

   // Import custom components if any

   // Component local properties if any

   // component export
   export default {
       components: {},
       props: {},
       data() {
           return {
                results: {
                    page_title: "",
                    page_text: "",
                    page_meta_desc: "",
                    page_meta_keywords: "",
                }
           };
       },
       computed: {},
       created() {
            let component = this;

            $(document).ready(function(){
                document.title = 'إفاد | عن إيفاد';
                
                $.ajax({
                    type: 'GET',
                    url: 'https://www.efadcar.com/api/v1/page?link=about-us',
                    success:function(data){
                        component.results = data.result[0];
                    },
                    error: function(data){
                    }
                });

                $('html, body').animate({scrollTop:0}, 'slow');
            });
       },
       mounted() {
            
       },
       watch: {},
       methods: {},
   }
</script>

<style>
</style>