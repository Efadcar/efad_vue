<template>
    <div class="carListItemResponse col-sm-12 col-md-6 col-lg-4 col-12 mix  superior blueplan كيا green y2018" data-size="69">
        <div class="thumbnail-container">
            <div class="car-img">
                <img :src="car.image" class="img-fluid">
            </div>
            <div class="car-price d-flex">
                <div class="price-car mr-auto" style="margin-top: 10px;">
                    <span id="هيونداي" class="value calculateCarPriceBasedOnDuration" style="float: right;">
                        {{ calculatePrice(car["car_"+paramName+"_price"]) }}
                    </span>
                    <input type="hidden" class="car_daily_price" value="46">
                    <span v-if="price_period == 'day'" class="duration" style="margin-right: 4px;"> ريال يومياً</span>
                    <span v-else-if="price_period == 'week'" class="duration" style="margin-right: 4px;"> ريال أسبوعياً</span>
                    <span v-else-if="price_period == 'month'" class="duration" style="margin-right: 4px;"> ريال شهرياً</span>                
                    <span v-else-if="price_period == 'year'" class="duration" style="margin-right: 4px;"> ريال سنوياً</span>
                </div>
                <div class="carname d-flex">
                    <div class="ml-auto">
                        <h5>
                            <span style="font-weight: 500;">{{car.cb_uid}}</span><span>{{car.car_model_year}}</span>
                        </h5>
                        <h6 style="float: left;">{{car.cm_uid}}</h6>
                    </div>
                </div>
            </div>
            <div class="car-price d-flex row">
                <div class="col-lg-12" v-if="car.car_in_stock == 1 && car.car_status == 1">
                    <span class="dot11" style="background-color: rgb(61,145,16)"></span>
                    <div class="btn-reserve btn-reserve1"> 
                        <a :href="'https://www.efadcar.com/book/addnew/'+ car.car_uid" class="btn btn-default">احجز الآن</a>
                    </div>
                </div>
                <div class="col-lg-12" v-if="car.car_in_stock == 0">
                    <span class="dot11" style="background-color: rgb(132, 132, 132)"></span>
                    <div class="btn-reserve btn-reserve1"> 
                        <a href="#" class="btn btn-default">احجز الآن</a>
                    </div>
                </div>
                <div class="col-lg-12" v-if="car.car_in_stock == 1 && car.car_status == 0">
                    <span class="dot11" style="background-color: rgb(230,1,1)"></span>
                    <div class="btn-reserve btn-reserve1"> 
                        <a href="#" class="btn btn-default">احجز الآن</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import plugins if any

    // Import custom components if any
    

    // Component local properties if any

    // component export
    export default {
        components: {
        },
        props: {
            car: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            price_period: {
                type: String,
                default: function () {
                    return "day";
                }
            },
            book_period: {
                type: [String, Number],
                default: function () {
                    return "";
                }
            }
        },
        data() {
            return {
            };
        },
        computed: {
            paramName: function(){
                return (this.book_period == 0) ? "daily" : "monthly";
            }
        },
        created() {},
        mounted() {},
        watch: {},
        methods: {
            calculatePrice: function(price){
                if(this.price_period == "week"){
                    return price * 7;
                }else if(this.price_period == "month"){
                    return price * 30;
                }else if(this.price_period == "year"){
                    return price * 365;
                }

                return price;
            },
        },
    }
</script>

<style>
</style>