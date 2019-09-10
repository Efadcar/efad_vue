<template>
    <div class="row">
        <div id="show_mobile_search_filters" class="button-mobile-container button-mobile-fixed" style="width: 98%;display: none;">
            <div class="button-mobile searchDetails"><i class="fa fa-filter"></i> بحث متقدم</div>
        </div>
        <div class="col-12 search-option mt-2 scrollbar" id="style-1">
            <div class="button-mobile-container button-mobile-close">
                <div class="button-mobile searchViewBtn">مشاهدة</div>
            </div>
            <h4><i class="fa fa-filter"></i> بحث متقدم </h4>
            <div class="col-md-12 col-sm-12 pt-2">
                <span class="labelh py-2">مدة الاشتراك</span>
                <div class="row">
                    <div class="col-lg-12">
                        <label class="customButton">أقل من 6 شهور
                        <input v-model="book_period" type="radio" id="durationOfSubscription" name="month" class="updateSearchContent durationOfSubscription" value="0">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <label class="customButton">أكثر من 6 شهور
                        <input v-model="book_period" type="radio" name="month" class="updateSearchContent durationOfSubscription" value="1">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <span class="labelh py-2">عرض قيمة الإشتراك لمدة</span>
                <div class="car_btn car-y">
                    <p class="fieldset">
                        <input type="radio" name="day" data-value="7" v-model="price_period" data-period="day" value="day"  id="day" class=" subscriptionValueDuration">
                        <label for="day" class="day">يوم</label>
                        <input type="radio" name="year1" data-value="7" v-model="price_period" data-period="week" value="week"  id="week1" class=" subscriptionValueDuration">
                        <label for="week1" class="week">أسبوع</label>
                        <input type="radio" name="year1" data-value="30" v-model="price_period" data-period="month" value="month" id="month1" class=" subscriptionValueDuration" >
                        <label for="month1" class="month"> شهر</label>
                        <!-- <input type="radio" name="year1" data-value="365" v-model="price_period" data-period="year" value="year"  id="year1" class=" subscriptionValueDuration" >
                        <label for="year1" class="year">سنة</label> -->
                    </p>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <span class="labelh py-2" >عرض السعر</span>
                <div col-lg-12>
                    من
                    &nbsp;<input style="background-color: #f0f0f0;color: #01355d;" type="text" name="week1" value="0" id="priceTo" class="item8000 financialValueWeekly" disabled>&nbsp;&nbsp;&nbsp;&nbsp;
                    إلى
                    &nbsp;<input style="background-color: #f0f0f0;color: #01355d;" type="text" name="day1"  value="100000" id="priceFrom" class="item2000 financialValueDaily" disabled >
                </div>
                <div id="nouislider-slider-cash-range" class="mt-2"></div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <span class="labelh py-2">ترتيب</span>
                <div class="row">
                    <div class="col-lg-12">
                        <label class="customButton">من الأقل قيمة إلى الأعلى
                        <input type="radio" v-model="order_by" name="highvalue" class="updateSearchContent displayOrdering" id="displayOrdering" value="ASC">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <label class="customButton">من الأعلى قيمة إلى الأقل
                        <input type="radio" v-model="order_by" name="highvalue" class="updateSearchContent displayOrdering" value="DESC">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <div class="select-wrapper">
                    <select @change="brandChanged($event)" v-model="cb_uid" id="brands" data-placeholder="ماركة السيارة" class="form-control width100p updateSearchContent carBrand select-car">
                        <option value="0">ماركة السيارة</option>
                        <option v-for="brand in car_brands" :value="brand.cb_uid">{{ brand.cb_name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <div class="select-wrapper">
                    <select id="models" v-model="cm_uid" data-placeholder="أختر شكل السيارة" class="form-control width100p updateSearchContent carType select-car">
                        <option value="0">موديل السيارة</option>
                        <option v-for="model in car_models" :value="model.cm_uid">{{ model.cm_name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <div class="select-wrapper">
                    <select data-placeholder="أختر شكل السيارة" v-model="ct_uid" class="form-control width100p updateSearchContent carCategory select-car">
                        <option value="0">نوع السيارة</option>
                        <option v-for="type in car_types" :value="type.ct_uid">{{ type.ct_name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2 mb-5">
                <span class="labelh py-2">سنة الصنع</span>
                <div id="nouislider-slider">
                    <!-- <veeno rtl connect :pipsy="{ mode: 'steps', density: 4, stepped: true }"
                       :handles="[year_from, year_to]" :range = "man_year_range" :step="1" /> -->
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2" >
                <span class="labelh py-2">لون السيارة</span>
                <div class="custom-radios">
                    <div v-for="car_color in cars_colors">
                        <input type="checkbox" id="yellow" class="updateSearchContent carColor" :data-filter="'.'+car_color.cco_name" :value="car_color.cco_uid">
                        <label v-if="car_color.cco_uid == 15" :for="car_color.cco_name" v-on:click="colorToggle(car_color.cco_uid)"> 
                            <span style="background-image: url('/assets/rtl/images/cw.jpg');"> 
                                <i v-show="color.includes(car_color.cco_uid)" class="fa fa-check"></i> 
                            </span> 
                        </label>
                        <label v-else-if="car_color.cco_uid == 1" :for="car_color.cco_name" v-on:click="colorToggle(car_color.cco_uid)"> 
                            <span :style="'background-color: '+car_color.cco_meta_desc"> 
                                <i v-show="color.includes(car_color.cco_uid)" class="fa fa-check"></i> 
                            </span> 
                        </label>
                        <label v-else :for="car_color.cco_name" v-on:click="colorToggle(car_color.cco_uid)"> 
                            <span :style="'background-color: '+car_color.cco_meta_desc"> 
                                <i v-show="color.includes(car_color.cco_uid)" class="fa fa-check color-white"></i> 
                            </span> 
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 pt-2">
                <span class="labelh py-2">ناقل الحركة</span>
                <div class="row">
                    <div class="col-lg-12">
                        <label class="customButton">أتوماتيك
                        <input type="radio" v-model="transmission" id="gearBox" class="updateSearchContent gearBox" name="automanual" value="auto">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-lg-12">
                        <label class="customButton">عادي
                        <input type="radio" v-model="transmission" class="updateSearchContent gearBox" name="automanual" value="manual">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 clearFilters">
                <div @click="resetFilters" style="float: right;margin: 35px 0;">
                    <i class="fas fa-sync" style="color: #003a5d;padding: 0 15px;cursor: pointer;"></i>
                    <div class="" style="cursor: pointer;font-size: 18px;color: #2c343e;display: inline;">مسح الكل</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import plugins if any
    import veeno from 'veeno';

    // Import custom components if any

    // Component local properties if any

    // component export
    export default {
        components: {
            veeno,
        },
        props: {
            filters: {
                type: Object,
                default: function () {
                    return {
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
                        offset: 0,
                        transmission: null,
                        color: [],
                    };
                }
            }
        },
        data() {
            return {
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
                offset: 0,
                color: [],
                car_brands: [],
                car_models: [],
                car_types: [],
                cars_colors: [],
                man_year_range: { 
                    'min': 2016, 
                    'max': 2020, 
                },
                isHidden: false,
            };
        },
        computed: {},
        created() {
            const component = this;

            // fetch car brands
            this.$REQUESTS.axiosRequest.get(this.$API.endpoints.explore.car_brands)
            .then(response => {
                component.car_brands = response.data.result;
            })
            .catch(error => {
                console.log(error.request);
            });

            // fetch car types
            this.$REQUESTS.axiosRequest.get(this.$API.endpoints.explore.car_types)
            .then(response => {
                component.car_types = response.data.result;
            })
            .catch(error => {
                console.log(error.request);
            });

            // fetch car colors
            this.$REQUESTS.axiosRequest.get(this.$API.endpoints.explore.cars_colors)
            .then(response => {
                component.cars_colors = response.data.result;
            })
            .catch(error => {
                console.log(error.request);
            });
        },
        mounted() {
            const component = this;

            $(document).ready(function(){
                var yearSlider = document.getElementById('nouislider-slider');
                noUiSlider.create(yearSlider, {
                    start: [2016, 2020],
                    connect: true,
                    range: {
                        'min': 2016,
                        'max': 2020
                    },
                    direction: 'rtl',
                    step: 1,
                    connect: true,
                     behaviour: 'tap-drag',
                    tooltips: false,

                    // Show a scale with the slider
                    pips: {
                        mode: 'steps',
                        stepped: true,
                        density: 4
                    }
                });

                yearSlider.noUiSlider.on('change', function( values, handle ) {
                    let silderValue = yearSlider.noUiSlider.get();
                    let value = silderValue.toString().split(",");

                    if(component.year_from != Math.trunc( value[0] )){
                        component.year_from = Math.trunc( value[0] );
                    }

                    if(component.year_to != Math.trunc( value[1] )){
                        component.year_to = Math.trunc( value[1] );
                    }
                });

                //////////////////////////////// Price Slider ////////////////////////////////////////
                var priceSlider = document.getElementById('nouislider-slider-cash-range');

                noUiSlider.create(priceSlider, {
                    start: [0, 100000],
                    connect: true,
                    range: {
                        'min': 0,
                        'max': 100000
                    },
                    direction: 'rtl',
                    step: 100,
                    connect: true,
                    behaviour: 'tap-drag',
                    tooltips: false,

                    // Show a scale with the slider

                });

                priceSlider.noUiSlider.on('change', function( values, handle ) {
                    let priceSilderValue = priceSlider.noUiSlider.get();
                    let value = priceSilderValue.toString().split(",");
                    $('#priceFrom').val(Math.trunc( value[1] ));
                    $('#priceTo').val(Math.trunc( value[0] ));
                    if(component.price_from != Math.trunc( value[0] )){
                        component.price_from = Math.trunc( value[0] );
                    }

                    if(component.price_to != Math.trunc( value[1] )){
                        component.price_to = Math.trunc( value[1] );
                    }
                });

                priceSlider.noUiSlider.on('update', function( values, handle ) {
                    let priceSilderValue = priceSlider.noUiSlider.get();
                    let value = priceSilderValue.toString().split(",");
                    $('#priceFrom').val(Math.trunc( value[1] ));
                    $('#priceTo').val(Math.trunc( value[0] ));
                });
                //////////////////////////////////////////////////////////////////////////////////////


                // $('body').on("click", '#show_mobile_search_filters', function(){
                //     console.log("clicked");
                //     $('.search-option').toggleClass('show');
                // });

                // $('.searchViewBtn').click(function(){
                //     $('.search-option').toggleClass('hide');
                // });

            });

        },
        watch: {
            book_period: function(newValue, oldValue){
                let data = {
                    key: "book_period",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            price_period: function(newValue, oldValue){
                let data = {
                    key: "price_period",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            order_by: function(newValue, oldValue){
                let data = {
                    key: "order_by",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            cb_uid: function(newValue, oldValue){
                let data = {
                    key: "cb_uid",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            cm_uid: function(newValue, oldValue){
                let data = {
                    key: "cm_uid",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            ct_uid: function(newValue, oldValue){
                let data = {
                    key: "ct_uid",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            transmission: function(newValue, oldValue){
                let data = {
                    key: "transmission",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            year_from: function(newValue, oldValue){
                let data = {
                    key: "year_from",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            year_to: function(newValue, oldValue){
                let data = {
                    key: "year_to",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            color: function(newValue, oldValue){
                let data = {
                    key: "color",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            price_from: function(newValue, oldValue){
                let data = {
                    key: "price_from",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            price_to: function(newValue, oldValue){
                let data = {
                    key: "price_to",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
        },
        methods: {
            brandChanged: function(event){
                const component = this;
                this.car_models = [];

                if(event.target.value != 0){
                    // fetch car models
                    this.$REQUESTS.axiosRequest.get(this.$API.endpoints.explore.car_models, {
                        params: {
                          id: event.target.value,
                        },
                    })
                    .then(response => {
                        component.car_models = response.data.result;
                    })
                    .catch(error => {
                        console.log(error.request);
                    });
                }
            },
            colorToggle: function(id){
                if(this.color.includes(id)){
                    this.color = this.color.filter(i => i !== id);
                }else {
                    this.color.push(id);
                }
            },
            resetFilters: function(){
                this.$bus.$emit('reset_filters');
            },
            showFiltersBlock: function(){
                this.isHidden = !this.isHidden;
            },
        },
   }
</script>

<style>
.custom-radios input[type="checkbox"] + label span i {
    opacity: 1;
    transition: all .3s ease;
}
.color-white {
    color: white;
}
</style>