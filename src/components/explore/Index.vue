<template>
    <section class="p-0 border-top pt-10">
        <div class="container-fluid ">
            <div class="row custom_explore_text">
                <div class="col-12">
                    <p class="custom-title-head" style="">
                        <b class="custom_title_text"><span class="head-txt-resp"> تحتاج سيارة ؟</span></b>
                        طيب، لا تشتري سيارة ولا دفع أقساط على سيارة.
                        جرب إفاد وأدفع قيمة اشتراك ثابتة على سيارتك لمدة (أسبوع/ شهر/ سنة) 
                        واستمتع بنظام شامل يلبي احتياجاتك ولا تشيل هم صيانة السيارة، 
                        أو تأمين السيارة لأنها شاملة قيمة الاشتراك 
                    </p>
                </div>
            </div>
            <div class="row custom-move-up-res">
                <div class="col-sm-3">
                    <div class="row no-gutters">
                        <div class="col-6 col-xs-6 ">
                            <div class="cars-many"> <span>1000</span> <span>سيارة</span> </div>
                        </div>
                        <div class="col-6 col-xs-6 ">
                            <a href="<?= site_url('branches') ?>">
                                <div class="cars-branch"> <span>4</span> <span>مدن</span> </div>
                            </a>
                        </div>
                    </div>

                    <filters v-if="!reseting" :filters="filters"></filters>
                </div>
                <div class="col-sm-9">
                    <!-- btns -->
                    <div class="car_btn scroll car_btn_custom">
                        <div class="fieldset">
                        </div>
                    </div>
                    <search></search>
                    <div class="row ch-row-ch">
                        <div class="col-lg-12">
                            <div class="color-dots pt-2 text-left">
                                <span class="dot1"></span>
                                <span class="dot100 dot101">متاح</span>
                                <span class="dot3"></span>
                                <span class="dot100 dot103">قريباً</span>
                                <span class="dot4"></span>
                                <span class="dot100 dot104">غير متاح</span>
                            </div>
                        </div>
                    </div>
                    <results :results="results" :book_period="filters.book_period" :price_period="filters.price_period" :offset="filters.offset"></results>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // Import plugins if any
    require("../../assets/global/plugins/waitme/waitMe.js");
    require("../../assets/global/plugins/waitme/waitMe.css");

    // Import custom components if any
    import Search from "./Search.vue";
    import Filters from "./Filters.vue";
    import Results from "./Results.vue";

    // Component local properties if any

    // component export
    export default {
        components: {
            Search,
            Filters,
            Results,
        },
        props: {},
        data() {
            return {
                filters: {
                    search_text: "",
                    book_period: 0,
                    price_period: "day",
                    price_from: 0,
                    price_to: 100000,
                    order_by: "ASC",
                    cb_uid: 0,
                    cm_uid: 0,
                    ct_uid: 0,
                    year_from: 2016,
                    year_to: 2020,
                    transmission: null,
                    color: [],
                    offset: 0,
                },
                results: {},
                cached_num_rows: 0,
                reseting: false, 
            };
        },
        computed: {},
        created() {
            const component = this;

            this.$bus.$on('query_changed', function(data){
                component.filters.search_text = data;
                
                // fetch data from back-end
                component.fetchResults();
            });    

            this.$bus.$on('filter_changed', function(data){
                component.filters[data.key] = data.value;
                
                if(data.key == "price_period"){
                    
                }else if(data.key == "offset"){
                    // fetch data from back-end
                    component.fetchResults("only_pagination");
                }else {
                    // fetch data from back-end
                    component.fetchResults();
                }
            });  

            this.$bus.$on('reset_filters', function(data){
                component.reseting = true;
                component.resetFilters();
                component.fetchResults();
            });  

            this.fetchResults();
        },
        mounted() {},
        watch: {},
        methods: {
            resetFilters() {
                this.filters = {
                    search_text: "",
                    book_period: 0,
                    price_period: "day",
                    price_from: 0,
                    price_to: 100000,
                    order_by: "ASC",
                    cb_uid: 0,
                    cm_uid: 0,
                    ct_uid: 0,
                    year_from: 2016,
                    year_to: 2020,
                    transmission: null,
                    color: [],
                    offset: 0,
                }; 
            },
            fetchResults: function(status){
                const component = this;
                this.results = {};

                // console.log("filters: ", this.filters);
                // fetch car models

                //var form_data = new FormData();
                // for ( var key in this.filters ) {
                //     if(key != 'color' && key != 'transmission'){
                //         form_data.append(key, this.filters[key]);
                //     }
                // }

                this.run_waitMe($('body'), 1, 'ios');

                $.ajax({
                    type: 'POST',
                    url: this.$API.endpoints.explore.get_results,
                    data: this.filters,
                    success:function(data){
                        if(status == "only_pagination"){
                            data.num_rows = component.cached_num_rows;
                        }else {
                            component.cached_num_rows = data.num_rows;
                        }
                        
                        component.results = data;
                        // console.log(component.results);
                        $('body').waitMe('hide');
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $('.generalSearch').offset().top
                        }, 1600);
                        component.reseting = false;
                    },
                    error: function(data){
                        if(status == "only_pagination"){
                            data.num_rows = component.cached_num_rows;
                        }else {
                            component.cached_num_rows = data.num_rows;
                        }
                        component.results = data.responseJSON;
                        $('body').waitMe('hide');
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $('.generalSearch').offset().top
                        }, 1600);
                        component.reseting = false;
                    }
                });

                // this.$REQUESTS.axiosRequest.post(this.$API.endpoints.explore.get_results, form_data)
                // .then(response => {
                //     console.log("results: ", response.data.result);
                //     // component.results = response.data.result;
                // })
                // .catch(error => {
                //     console.log(error.request);
                // });
            },
            run_waitMe: function (el, num, effect){
                let text = 'الرجاء الانتظار...';
                let fontSize = '';
                let maxSize = '';
                let textPos = '';

                switch (num) {
                    case 1:
                    maxSize = '';
                    textPos = 'vertical';
                    break;
                    case 2:
                    text = '';
                    maxSize = 30;
                    textPos = 'vertical';
                    break;
                    case 3:
                    maxSize = 30;
                    textPos = 'horizontal';
                    fontSize = '18px';
                    break;
                }

                el.waitMe({
                    effect: effect,
                    text: text,
                    bg: 'rgba(255,255,255,0.7)',
                    color: '#000',
                    maxSize: maxSize,
                    waitTime: -1,
                    source: 'img.svg',
                    textPos: textPos,
                    fontSize: fontSize,
                    onClose: function(el) {}
                });
            },
        },
    }
</script>

<style>
</style>