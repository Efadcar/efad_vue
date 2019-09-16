<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 ">
                        <div class="main-heading ">
                            <h1 >افاد | احجز الان</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section rol="form-reservation">
            <div class="container  mb-2 pb-4">
                <div class="row">
                    <div class="col-12"> <a href="#" class="btn btn-default cutom-btn active">استكمال بيانات الحجز</a> <!--<a href="#" class="btn btn-default cutom-btn">الحجز المجانى</a> --> </div>
                </div>
                <div class="reservation-form  bg-secondary">
                    <div class="row">
                        <div class="col-sm-4 ">
                            <div class="carname d-flex ">
                                <h2>
                                    <span>هيونداي</span> 
                                    <span>النترا</span>
                                    <span>2019</span>
                                </h2>
                            </div>
                            <div class=" align-items-center mt-10 custom-margin-map">
                                <div class="text-left "> 
                                    <span id="daily-rate" class="value">217</span> 
                                    <span class="duration">ريال في اليوم</span> 
                                </div>
                                <br><br>
                                <div class="custom-slider-mob custom-margin-car-slider">
                                    <div class="price-car text-right"> </div>
                                    <div class="car-img">
                                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                          <div class="carousel-inner">
                                            <div class="carousel-item active">
                                              <img class="d-block w-100" src="" alt="First slide">
                                            </div>
                                            
                                          </div>
                                          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                          </a>
                                          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                          </a>
                                        </div>
                                        
                                        
                                        
                                        </div>
                                </div>
                                <ul class="cartype">
                                    <li>
                                        <div class="cartype-logo"> <img alt="gear" src="../../assets/rtl/images/gear-icon.png" /> </div>
                                        <span >أوتوماتيك</span> </li>
                                    <li>
                                        <div class="cartype-logo"> <img alt="bag" src="../../assets/rtl/images/bag-icon.png" /> </div>
                                        <span >1 شنطة</span> </li>
                                    <li>
                                        <div class="cartype-logo"> <img alt="persons" src="../../assets/rtl/images/person-icon.png" /> </div>
                                        <span >5 أفراد</span> </li>
                                    <li>
                                        <div class="cartype-logo"> <img alt="doors" src="../../assets/rtl/images/door-icon.png" /> </div>
                                        <span >4 أبواب</span>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div class="col-sm-7 ml-5 custom-des-web-slider custom-margin-car-slider">
                            <div class="price-car text-right"> </div>
                            <div class="car-img">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                  <div class="carousel-inner">
                                    <div class="carousel-item active">
                                      <img class="d-block w-100" src="" alt="First slide">
                                    </div>                            
                                  </div>
                                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="cd-faq-items">
                    <ul class="cd-faq-group">

                        <li class="cd-faq-question question1" style="border: 1px solid #d1d1d1;"> 
                            <a class="cd-faq-trigger trigger1" href="#0">مميزات السيارة</a>
                            <div class="cd-faq-content">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h5>نمط السيارة</h5>
                                        <span><?= $this->global_model->getTypeByID($car->ct_uid) ?></span>
                                    </div>
                                    <div class="col-sm-3">
                                        <h5>سعة المحرك</h5>
                                        <span><?= $car->car_engine_litre ?> ليتر</span>
                                    </div>
                                    <div class="col-sm-3">
                                        <h5>نظام الدفع</h5>
                                        <span>
                                        <?php
                                        switch($car->car_drivetrain){
                                            case "front";
                                                echo "دفع أمامي";
                                                break;
                                            case "rear";
                                                echo "دفع خلفي";
                                                break;
                                            case "4x4";
                                                echo "دفع رباعي";
                                                break;
                                        }
                                        ?>
                                        
                                        </span>
                                    </div>
                                    <div class="col-sm-3">
                                        <h5>اللون الخارجي</h5>
                                        <span>
                                            <?php 
                                            if($car->car_color_secondary != 0){
                                                echo $this->global_model->getColorByID($car->car_color_secondary);
                                            }else{
                                                echo $this->global_model->getColorByID($car->car_color);
                                            }
                                             
                                            ?>
                                        </span>
                                    </div>
                                </div>
                                <?php if($car->car_features != ""){ ?>
                                <div class="row mt-4">
                                    <div class="col-sm-12">
                                        <h5>مميزات أخري</h5>
                                        <p><?= $car->car_features ?></p>
                                    </div>
                                </div>
                                <?php } ?>
                            </div>
                        </li>
                    </ul>
                </div>

                
                
                <!-- reservation form

                <div id="accordion" class="mb-3">
                    <div class="card">
                        <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                            
                            مميزات السيارة
                            
                            </h5>
                        </div>
                            </a>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>


                </div>
                
                



        -->
                <div class="reservation-form">
                    <div class="date-reserve mb-4">
                        <h3> أدخل بيانات الحجز </h3>
                        <div class="row d-flex align-items-center">
                            <div class="col-sm-8" >
                                <form id="book-form">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>اختر تاريخ أستلام السيارة</label>
                                                <input type="text" id="date-start" class="form-control floating-label" placeholder="اختر تاريخ أستلام السيارة" name="book_start_date" required>
                                                <!--<small class="form-text" style="color: #A62F31">يمكنك الحصول علي خصم <?= EARLY_BOOKING_DISCOUNT ?>% إضافي علي اول أسبوع في حالة أختيار تاريخ أستلام السيارة بعد <?= EARLY_BOOKING_AFTER ?>  يوم من تاريخ الحجز</small> -->
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>اختر تاريخ تسليم السيارة</label>
                                                <input type="text" id="date-end" class="form-control floating-label freeend" placeholder="اختر تاريخ تسليم السيارة" name="book_end_date" required>
                                            </div>

                                        </div>
                                    </div>
                                    <input type="hidden" name="mc_uid" value="<?= $this->session->userdata('mc_uid') ?>" />
                                    <input type="hidden" name="car_uid" value="<?= $car->car_uid ?>" />
                                    <input type="hidden" name="member_uid" value="<?= $this->session->userdata('member_uid') ?>" />
                                </form>
                            </div>
                            
                            <div class="col-sm-4 text-center ">
                                <div class="form-group custom-rec-city-mob">
                                    <label style="float: right;">اختر مدينة أستلام السيارة</label>
                                    <div class="select-wrapper" style="clear: both;">

                                        <select id="inputStatebook" class="form-control width100p inputStatebookMob" name="delivery_city_uid" required>
                                            <option value="0"> اختر المدينة </option>
                                            <?php
                                            $cities = $this->global_model->getCitiesByCountryID();
                                            if($cities != false)
                                            foreach($cities as $r){
                                            ?>


                                            <option value='<?= $r->city_uid ?>'><?= $r->city_name_ar ?></option>

                                        </select>
                                    </div>
                                </div>
                                <h3 class="mb-0 pr-2">عدد أيام الاشترك</h3>
                                <span class="value total-days">0</span> 
                            </div>
                        </div>
                    </div>
                    <form method="post" action="<?= site_url('book/confirm') ?>" id="confirm-booking">
                        <div class="row">
                            <div class="col-sm-4 ">
                                <div class="form-group custom-rec-city-web">
                                    <label>اختر مدينة أستلام السيارة</label>
                                    <div class="select-wrapper">

                                        <select id="inputStatebook" class="form-control width100p inputStatebookWeb" name="delivery_city_uid" required>
                                            <option value="0"> اختر المدينة </option>
                                            <?php
                                            $cities = $this->global_model->getCitiesByCountryID();
                                            if($cities != false)
                                            foreach($cities as $r){
                                            ?>


                                            <option value='<?= $r->city_uid ?>'><?= $r->city_name_ar ?></option>

                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 ">
                            </div>
                            <div class="col-sm-4 text-center ">
                                <h3 class="mb-0 pr-2">المبلغ الإجمالي</h3>
                                <span class="value total-price">0</span> <span id="currency">ريال</span> 
                            </div>
                        </div>




                        <div class="row">
                            <div class="col-sm-12 text-center ">
                                <button class="btn btn-default  mb-2" id="paynow" >استمرار</button>
                            </div>
                        </div>
                    </form>             
                </div>
                
            </div>
        </section>

        <!-- footer -->
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
        },
        data() {
            return {
                booking: booking,
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
                
                $('.button-mobile-container').click(function () {
                    $('.search-option').toggleClass('show');
                });

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
            reserve: function(newValue, oldValue){
                let data = {
                    key: "order_by",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            goTo: function(newValue, oldValue){
                let data = {
                    key: "cb_uid",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            response: function(newValue, oldValue){
                let data = {
                    key: "cm_uid",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            changeValue: function(newValue, oldValue){
                let data = {
                    key: "ct_uid",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            getData: function(newValue, oldValue){
                let data = {
                    key: "transmission",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            requestCarData: function(newValue, oldValue){
                let data = {
                    key: "year_from",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            navigation: function(newValue, oldValue){
                let data = {
                    key: "year_to",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            newValue: function(newValue, oldValue){
                let data = {
                    key: "color",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            currentState: function(newValue, oldValue){
                let data = {
                    key: "price_from",
                    value: newValue,
                };

                this.$bus.$emit('filter_changed', data);
            },
            back: function(newValue, oldValue){
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
.gray .select {color: #333333;border: 2px solid #ff6d00;}
    .gray .select:hover {background-color: #ff6d00;color: #fff;}
    .blue .select{ border: 2px solid #1d54d0; color:#1d54d0}
    .blue .select:hover{  background-color: #1d54d0; color:#fff}
    .exclusive .select {border: 2px solid #29a256;color: #29a256;}
    .exclusive .select:hover {background-color: #29a256; color:#fff;}
    .red .select {border: 2px solid #d81720;color: #d81720;}
    .red .select:hover {background-color: #d81720; color:#fff;} 
</style>