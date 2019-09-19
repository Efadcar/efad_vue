<template>
    <div>
        <div class="new-booking-section">
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
                                        <span>{{result.cb_uid}}</span> 
                                        <span>{{result.cm_uid}} </span>
                                        <span>{{result.car_model_year}}</span>
                                    </h2>
                                </div>
                                <div class=" align-items-center mt-10 custom-margin-map">
                                    <div class="text-left "> 
                                        <span id="daily-rate" class="value">{{result.car_daily_price}}</span> 
                                        <span class="duration">ريال في اليوم</span> 
                                    </div>
                                    <br><br>
                                    <div class="custom-slider-mob custom-margin-car-slider">
                                        <div class="price-car text-right"> </div>
                                        <div class="car-img">
                                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                              <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    
                                                  <img class="d-block w-100" :src="result.image" alt="First slide">
                                                    
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
                                            <span v-show="result.car_transmission == 'auto'">أوتوماتيك</span> 
                                            <span v-show="result.car_transmission == 'manual'">عادية</span> 
                                        </li>
                                        <li>
                                            <div class="cartype-logo"> <img alt="bag" src="../../assets/rtl/images/bag-icon.png" /> </div>
                                            <span >{{result.car_bags}} شنطة</span> </li>
                                        <li>
                                            <div class="cartype-logo"> <img alt="persons" src="../../assets/rtl/images/person-icon.png" /> </div>
                                            <span >{{result.car_persons}} أفراد</span> </li>
                                        <li>
                                            <div class="cartype-logo"> <img alt="doors" src="../../assets/rtl/images/door-icon.png" /> </div>
                                            <span >{{result.car_doors}} أبواب</span>
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
                                          <img class="d-block w-100" :src="result.image" alt="First slide">
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
                    <div class="cd-faq-items" style="margin-bottom: 15px;">
                        <ul class="cd-faq-group">

                            <li class="cd-faq-question question1" style="border: 1px solid #d1d1d1;"> 
                                <a class="cd-faq-trigger trigger1" href="#0">مميزات السيارة</a>
                                <div class="cd-faq-content">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h5>نمط السيارة</h5>
                                            <span>سيدان</span>
                                        </div>
                                        <div class="col-sm-3">
                                            <h5>سعة المحرك</h5>
                                            <span>{{result.car_engine_litre}} ليتر</span>
                                        </div>
                                        <div class="col-sm-3">
                                            <h5>نظام الدفع</h5>
                                            <span>
                                            دفع أمامي                               
                                            </span>
                                        </div>
                                        <div class="col-sm-3">
                                            <h5>اللون الخارجي</h5>
                                            <span>
                                                {{result.car_color}}                                
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

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
                                                <option value="0">أختار مدينة</option>
                                                                    
                                    
                                                <option value="4">الدمام</option>
                                                
                                                                                
                                                
                                                <option value="1">الرياض</option>
                                                
                                                                                
                                                
                                                <option value="3">المدينة المنورة</option>
                                                
                                                                                
                                                
                                                <option value="2">جدة</option>

                                            </select>
                                        </div>
                                    </div>
                                    <h3 class="mb-0 pr-2">عدد أيام الاشترك</h3>
                                    <span class="value total-days">0</span> 
                                </div>
                            </div>
                        </div>
                        <form method="post" action="#" id="confirm-booking">
                            <div class="row">
                                <div class="col-sm-4 ">
                                    <div class="form-group custom-rec-city-web">
                                        <label>اختر مدينة أستلام السيارة</label>
                                        <div class="select-wrapper">

                                            <select id="inputStatebook" class="form-control width100p inputStatebookWeb" name="delivery_city_uid" required>
                                                <option value="0">أختار مدينة</option>
                                                                    
                                    
                                                <option value="4">الدمام</option>
                                                
                                                                                
                                                
                                                <option value="1">الرياض</option>
                                                
                                                                                
                                                
                                                <option value="3">المدينة المنورة</option>
                                                
                                                                                
                                                
                                                <option value="2">جدة</option>
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
        <div class="subscribe-booking-section">
            <section>
                <div class="row ml-0 mr-0" style="margin-top: 120px;">    
                    <div class="col-12">
                        <div class="col-lg-12 text-center pb-2">
                            <h2>اختر خطة وفئة العضوية</h2>
                        </div>
                        <div class="pricing-switcher mb-4">
                            <div class="car_btn">
                                <div class="fieldset">
                                    <input type="radio" name="price" value="monthly" id="monthly-1" checked="">
                                    <label for="monthly-1" class="active-price all">6 أشهر</label>
                                    <input type="radio" name="price" value="9month" id="9month">
                                    <label for="9month" class="economic">9 أشهر</label>
                                    <input type="radio" name="price" value="12monthly" id="12monthly">
                                    <label for="12monthly" class="small">12 شهر</label>
                                    <div class="animation start-home"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="row ml-0 mr-0 membership-row">    
                    <div class="col-md-3 membership-column">
                        <div class="membership-box" style="background-color: #ff6d00;"></div>

                        <div class="membership-custom-header">
                            <p class="custom-title">الطالبات و الطلاب</p>
                            <span class="custom-price">49</span>
                            <span class="custom-text-color"> ريال</span>
                        </div>

                        <div class="card m-3">
                            <div class="card-body">
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تأمين شامل 100 ٪</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> توصيل و استلام السيارة مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> الكيلو متر مفتوح</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تسليم السيارة في مدينة أخرى مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الصيانة الدورية للسيارة</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الاطارات</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة المساعدة على الطريق</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> سيارة مزودة بالوقود عند الإستلام</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة فتح الأقفال</p>
                                <button class="btn btn-block btn-outline-primary pt-0 pb-0 first" type="button" style="border-color: #ff6d00;color: black;">اشترك الان</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 membership-column">
                        <div class="membership-box" style="background-color: #1d54d0;"></div>

                        <div class="membership-custom-header">
                            <p class="custom-title">الزرقاء</p>
                            <span class="custom-price">99</span>
                            <span class="custom-text-color"> ريال</span>
                        </div>

                        <div class="card m-3">
                            <div class="card-body">
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تأمين شامل 100 ٪</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> توصيل و استلام السيارة مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> الكيلو متر مفتوح</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تسليم السيارة في مدينة أخرى مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الصيانة الدورية للسيارة</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الاطارات</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة المساعدة على الطريق</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> سيارة مزودة بالوقود عند الإستلام</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة فتح الأقفال</p>
                                <button class="btn btn-block btn-outline-primary pt-0 pb-0 second" type="button" style="border-color: #1d54d0;color: black;">اشترك الان</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 membership-column">
                        <div class="membership-box" style="background-color: #29a256"></div>

                        <div class="membership-custom-header">
                            <p class="custom-title">الخضراء</p>
                            <span class="custom-price">169</span>
                            <span class="custom-text-color"> ريال</span>
                        </div>

                        <div class="card m-3">
                            <div class="card-body">
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تأمين شامل 100 ٪</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> توصيل و استلام السيارة مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> الكيلو متر مفتوح</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تسليم السيارة في مدينة أخرى مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الصيانة الدورية للسيارة</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الاطارات</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة المساعدة على الطريق</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> سيارة مزودة بالوقود عند الإستلام</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة فتح الأقفال</p>
                                <button class="btn btn-block btn-outline-primary pt-0 pb-0 third" type="button" style="color: black;border-color: #29a256;">اشترك الان</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 membership-column">
                        <div class="membership-box" style="background-color: #d81720"></div>

                        <div class="membership-custom-header">
                            <p class="custom-title">الحمراء</p>
                            <span class="custom-price">269</span>
                            <span class="custom-text-color"> ريال</span>
                        </div>

                        <div class="card m-3">
                            <div class="card-body">
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تأمين شامل 100 ٪</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> توصيل و استلام السيارة مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> الكيلو متر مفتوح</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> تسليم السيارة في مدينة أخرى مجانا</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الصيانة الدورية للسيارة</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة الاطارات</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة المساعدة على الطريق</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> سيارة مزودة بالوقود عند الإستلام</p>
                                <p class="items-custom"><i class="fa fa-check-circle"></i> خدمة فتح الأقفال</p>
                                <button class="btn btn-block btn-outline-primary pt-0 pb-0 fourth" type="button" style="color: black;border-color: #d81720;">اشترك الان</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ml-0 mr-0">
                    <div class="col-lg-12 text-center pb-2">
                        <p class="text-muted d-none d-sm-block  mt-2 mb-2">سيتم استرجاع قيمة اشتراك العضوية كاملة 100% عند طلبك لها وفي حال عدم استخدام مميزاتها </p>
                        <button class="btn pt-0 pb-0" type="button" style="border: 1px solid black;color: black;margin-top: 15px;">تفاصيل مميزات العضوية</button>
                    </div>
                </div>
                <div class="row ml-0 mr-0">
                <div class="col-lg-12 text-center pb-2">
                    <button class="btn pt-0 pb-0 escp" type="button" style="border: 1px solid #01355d;color: white;background-color:#01355d;margin-top: 15px;float: left;width: 120px;height: 40px;">تخطي</button>
                </div>
            </div>
            </section>

        </div>
        <div class="confirm-booking-section">
            <section rol="form-reservation">
                <div class="container  mb-2 pb-4">
                    <div class="row">
                        <div class="col-12"> <a href="#" class="btn btn-default cutom-btn active"> تفاصيل الاشتراك</a> <!--<a href="#" class="btn btn-default cutom-btn">الحجز المجانى</a> --> </div>
                    </div>
                    <div class="reservation-form  bg-secondary">
                        <div class="row d-flex align-items-center ">
                            <div class="col-sm-7">
                                <div class="carnamePay ml-2 text-left">
                                    <h3>نوع السيارة : <span>{{result.cb_uid}}</span><span>{{result.cm_uid}}</span><span>{{result.car_model_year}}</span></h3>
                                   
                                </div>
                                
                                <ul class="cartype">
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> <img alt="gear" src="../../assets/rtl/images/gear-icon.png" /> </div>
                                        <span v-show="result.car_transmission == 'auto'">أوتوماتيك</span> 
                                        <span v-show="result.car_transmission == 'manual'">عادية</span> 
                                    </li>
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> <img alt="bag" src="../../assets/rtl/images/bag-icon.png" /> </div>
                                        <span >{{result.car_bags}} شنطة</span> </li>
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> <img alt="persons" src="../../assets/rtl/images/person-icon.png" /> </div>
                                        <span >{{result.car_persons}} أفراد</span> </li>
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> <img alt="doors" src="../../assets/rtl/images/door-icon.png" /> </div>
                                        <span >{{result.car_doors}} أبواب</span>
                                    </li>
                                </ul>
                                <br>
                                <ul class="cartype">
                                        
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> مدة الاشتراك </div>
                                        <span >{{bookingResult.days}} ايام</span> 
                                    </li>
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> تاريخ الاستلام  </div>
                                        <p style="direction: ltr;">{{bookingResult.book_start_date}}</p> </li>
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> تاريخ التسليم  </div>
                                        <p style="direction: ltr;">{{bookingResult.book_end_date}}</p> </li>
                                    <li style="width: 24%">
                                        <div class="cartype-logo"> مدينة الاستلام </div>
                                        <span >{{bookingResult.delivery_city_name}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-4 custom-margin-car-slider">
                                
                                <div class="car-img">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                      <div class="carousel-inner">
                                        <div class="carousel-item active">
                                          <img class="d-block w-100" :src="result.image" alt="First slide">
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
                                    
                                    
                                    
                                    <!--<img src="<?= base_url().ALBUMS_IMAGES.$car->main_image; ?>" class="img-fluid" /> --> </div>
                            </div>
                        </div>
                    </div>
                    <!-- reservation form -->

                        
                    <div class="reservation-form bg-secondary mt-2" style="border-radius: 5px 5px 5px 5px;">

                        <form id="confirm-book">


                            <!-- personal info -->
                            <div class="row pt-1">
                                <div class="col-sm-6">
                                    <h3>أختر طريقة الدفع</h3>
                                    <p style="font-size: 12px; color:#01355d;margin-top: -20px;">*جميع العضويات والاشتراكات لا تعتمد إلا بعد دفع المبالغ</p>
                                </div>
                                <div class="col-sm-6">
                                    <h3>تفاصيل الفاتورة</h3>
                                </div>
                                <div class="col-sm-6">
                                    <!-- 
                                    <div class="custom-control custom-radio col-sm-12 ml-4">
                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="visa" checked>
                                        <label class="custom-control-label" for="customRadio1">
                                            <ul class="payment-img">
                                                <li> <span> <img src="../../assets/rtl/images/payment/mada.png" alt="مدى"/ ></span> </li>
                                                <li> <span> <img src="../../assets/rtl/images/payment/visa.png" alt="فيزا" /></span> </li>
                                                <li> <span> <img src="../../assets/rtl/images/payment/master.png" alt="ماستر كارد" /></span> </li>
                                            </ul>
                                        </label>
                                    </div>
                                    -->
                                    <div class="custom-control custom-radio col-sm-12 ml-4">
                                        <input type="radio" id="transfer" name="customRadio" class="custom-control-input" value="transfer" checked>
                                        <label class="custom-control-label" for="transfer">
                                            <ul class="payment-img custom-pay-img">
                                                <li> تحويل بنكي</li>
                                            </ul>
                                        </label>
                                    </div>
                                    <div class="row" id="transferInfo">
                                        <div class="col-sm-12 ml-5">
                                        <h5>حسابات شركة إفاد البنكية</h5>
                                        <p>
                                            رقم حساب:<br>
                                            xxxxxxxxxxxxxx<br><br>
                                        </p>
                                        </div>
                                    </div>
                                    <div class="custom-control custom-radio col-sm-12 ml-4">
                                        <input type="radio" id="cash" name="customRadio" class="custom-control-input" value="cash">
                                        <label class="custom-control-label" for="cash">
                                            <ul class="payment-img custom-pay-img">
                                                <li> نقدي (كاش) <span style="color: red">* 150 ر.س. إضافية</span> </li>
                                            </ul>
                                        </label>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6">
                                    <div class=" col-md-12  col-sm-12 mx-sm-auto ">
                                        <div class="row">

                                            <table class="table mb-5">
                                                <tbody>
                                                    <!-- 
                                                    <tr>
                                                        <td class="text-left">  سعر الحجز الاساسي  لليوم
                                                        </td>
                                                        <td class="text-right"><span><?= $car->car_yearly_price ?></span> ر.س.</td>
                                                    </tr>
                                                    -->
                                                    <tr>
                                                        <td class="text-left">سعر الاشتراك
                                                        </td>
                                                        <td class="text-right"><span>1500</span> ر.س.</td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td class="text-left">ضريبة القيمه المضافة 5% للخدمة
                                                        </td>
                                                        <td class="text-right"><span id="tax-total">190</span> ر.س.</td>
                                                    </tr>


                                                    <tr class="cash-fees-tr">
                                                        <td class="text-left"> رسوم الدفع النقدي للخدمة
                                                        </td>
                                                        <td class="text-right">
                                                            <span id="tax-total">
                                                                150
                                                            </span> ر.س.</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                            <table class="table mb-0">
                                                
                                                <tfoot>
                                                    <tr>
                                                        <td class="text-left ">
                                                            <h3>المبلغ الإجمالي </h3>
                                                        </td>
                                                        <td class="text-right">
                                                            <h4><span class="total-price">2100 </span> ر.س.</h4>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>                        
                                        </div>
                                    </div>
                                    <div class="col-sm-12 text-center mt-4 ">
                                        <p class="" style="color: #000">بالضغط على " تأكيد الحجز " أنت توافق على <a href="<?= site_url('terms_and_conditions') ?>" target="_blank" style="text-decoration: underline; color: #01355d">شروط الاستخدام </a> و <a href="<?= site_url('privcy_policy') ?>" target="_blank" style="text-decoration: underline; color: #01355d">سياسة الخصوصية </a></p>
                                    </div>
                                    <div class="col-sm-12 text-center ">
                                        <button class="btn btn-default pl-4 pr-4 mb-2 mt-4" id="paynow">تأكيد الحجز</button>
                                    </div>
                                </div>
                                
                            </div>

                            <!-- card -->


                        </form>
                    </div>

                </div>
            </section>

        </div>
    </div>
</template>

<!-- {{ $route.params.id }} -->

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
                result: {},
                bookingResult: {},

                isHidden: false
           };
       },
       computed: {},
       created() {},
       mounted() {
            let component = this;
            document.title = 'افاد | احجز الان';
            $(document).ready(function(){
                function run_waitMe(el, num, effect){
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
                }

            
            
            
                $('#confirm-book').submit(function(e){
                    e.preventDefault();
                });
            
                $('#paymentCard').hide();
                $('.cash-fees-tr').hide();
                
                $('#paynow').click( function() {
                    run_waitMe($('body'), 1, 'ios');
                    // $('#paynow').prop('disabled', true);
                    // confirmBooking();
                });
            
                function confirmBooking()
                {
                    let form = $('#confirm-book');
                    $.ajax({
                        url: '',
                        type: 'POST',
                        data: form.serialize(), // serializes the form's elements.
                        success: function(data) {
                        console.log(data);
                            if(data.status == 1)
                            {
                                //window.location.replace('');
                            }
                            else
                            {
                                console.log(data);
                                toastr.error(data.message, 'خطأ');
                            }
                            
                        },
                    });
                }   
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                });
                
                $('input[type=radio][name="customRadio"]').change(function() {                            
                    if (this.value == 'visa') {
                        $('#paymentCard').show();
                        $('#transferInfo').hide();
                        $('.cash-fees-tr').hide();
                        $('.total-price').html($('#total_without_cash').val());
                        $('#paynow').html('دفع');
                        
                    }
                    else if (this.value == 'cash') {
                        $('#paymentCard').hide();
                        $('#transferInfo').hide();
                        $('.cash-fees-tr').show();
                        $('.total-price').html($('#total_with_cash').val());
                        $('#paynow').html('تأكيد الحجز');
                    }
                    else if (this.value == 'transfer') {
                        $('#transferInfo').show();
                        $('#paymentCard').hide();
                        $('.cash-fees-tr').hide();
                        $('.total-price').html($('#total_without_cash').val());
                        $('#paynow').html('تأكيد الحجز');
                    }
                });


                $.ajax({
                    type: 'GET',
                    url: 'https://www.efadcar.com/api/v1/cars_info?id=' + component.$route.params.id,
                    data: this.filters,
                    success:function(data){
                        component.result = data.result;
                        
                    },
                    error: function(data){

                    }
                });

                $('.escp').click(function(){
                    $('.subscribe-booking-section').hide();
                    $('.confirm-booking-section').show();
                    window.scrollTo(0, 0);
                });

                jQuery(document).ready(function($){
                    var MqM= 768,
                        MqL = 1024;

                    var faqsSections = $('.cd-faq-group'),
                        faqTrigger = $('.cd-faq-trigger'),
                        faqsContainer = $('.cd-faq-items'),
                        faqsCategoriesContainer = $('.cd-faq-categories'),
                        faqsCategories = faqsCategoriesContainer.find('a'),
                        closeFaqsContainer = $('.cd-close-panel');
                    

                    //close faq lateral panel - mobile only
                    $('body').bind('click touchstart', function(event){
                        if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) { 
                            closePanel(event);
                        }
                    });

                    //show faq content clicking on faqTrigger
                    faqTrigger.on('click', function(event){
                        event.preventDefault();
                        $(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
                    });

                    //update category sidebar while scrolling
                    $(window).on('scroll', function(){
                        if ( $(window).width() > MqL ) {
                            (!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory); 
                        }
                    });

                    $(window).on('resize', function(){
                        if($(window).width() <= MqL) {
                            faqsCategoriesContainer.removeClass('is-fixed').css({
                                '-moz-transform': 'translateY(0)',
                                '-webkit-transform': 'translateY(0)',
                                '-ms-transform': 'translateY(0)',
                                '-o-transform': 'translateY(0)',
                                'transform': 'translateY(0)',
                            });
                        }  
                    });

                    function updateCategory(){
                        // updateCategoryPosition();
                        // updateSelectedCategory();
                    }

                    function updateCategoryPosition() {
                        //
                    }
                });
                //  change li background when click  //


                    $('#confirm-booking').submit(function(e){
                        e.preventDefault();
                    });

                    $('#paynow').click( function() {
                        var dateStart = $('#date-start').val();
                        var dateEnd = $('#date-end').val();

                        let inputStatebookWeb = $('.inputStatebookWeb').children('option:selected').val();
                        let inputStatebookMob = $('.inputStatebookMob').children('option:selected').val();

                        if (inputStatebookWeb > 0){
                            $('.inputStatebookMob').val(inputStatebookWeb);
                        }

                        if (inputStatebookMob > 0){
                            $('.inputStatebookWeb').val(inputStatebookMob);
                        }

                        component.bookingResult.delivery_city_uid = inputStatebookWeb;
                        component.bookingResult.delivery_city_name = $('.inputStatebookMob').children('option:selected').text();

                        var inputStatebook = $('#inputStatebook').children('option:selected').val();

                        if (dateStart.length < 1 || dateEnd.length < 1 || inputStatebook == 0) {
                            toastr.error('لإكمال الحجز يجب إختيار تاريخ استلام وتسليم السيارة ومدينة استلام السيارة', 'خطأ');
                        }else{
                            //document.getElementById('confirm-booking').submit();
                            if (!localStorage.auth){
                                $('#top-login-button').trigger('click');
                                toastr.error('من فضلك سجل الدخول اولا لاستمرار عملية الحجز', 'خطأ');
                            }
                            else{
                                $('.new-booking-section').hide();
                                $('.subscribe-booking-section').show();
                                window.scrollTo(0, 0);
                            }
                        }                       
                    });

                    
                        $(function () {
                            $('.switchPanelButton').click(function (event) {
                                event.preventDefault();
                                var panel = $(this).attr('panelclass');
                                $('.' + panel).hide();
                                var panelid = $(this).attr('panelid');
                                $('#' + panelid).show();
                            });
                        });
        
                        $('.print').click(function(){
                            $('.demo').printThis({
                                importCSS: true,  
                                header: null,               // prefix to html
                                footer: null,
                                footer: $('.hidden-print-header-content'),
                                removeInline: false, 
                                });
                        });
                    
                    
                        var dataSet;
                        $('.toggle').click(function () {
                            $('#target').toggle('slow');
                        });

                        
                        var date_start = new Date();
                        var date_end = new Date();
                        var date_end = date_end.setMonth(date_end.getMonth() + 1);
                        date_end = new Date(date_end);

                        var count = 0;
                        while(date_start <= date_end){
                            date_start = new Date(date_start.setDate(date_start.getDate() + 1));
                            if(date_start.getDay() == 6 || date_start.getDay() == 5){ // Friday or Saturday
                                count++;
                            }
                        }

                        date_start = new Date(date_start.setDate(date_start.getDate() + count));

                        date_start.setDate(date_start.getDate());
                        date_end.setDate(date_end.getDate());
                        $('#date-end').bootstrapMaterialDatePicker
                        ({
                            weekStart: 6,
                            format: 'DD-MMMM-YYYY',
                            disabledDays: [5,6],
                            minDate : date_end,
                            time: false,
                            switchOnClick: true,
                            lang: 'en'
                        });
                        
                        $('#date-end').prop( 'disabled', true );
                        


                        $('#date-start').bootstrapMaterialDatePicker
                        ({
                            weekStart: 6, 
                            format: 'DD-MMMM-YYYY',
                            disabledDays: [5,6],
                            minDate : date_start,
                            time: false,
                            switchOnClick: true,
                            lang: 'en'
                        });

                        
                        $(function () {
                            $('[data-toggle=\"tooltip\"]').tooltip()
                        });
                        
                        var timeoutId;
                        $('#date-start').on('input propertychange change', function() {

                            $('#date-end').prop( 'disabled', false );
                            $('#date-end').bootstrapMaterialDatePicker().val('');
                            var datee = $('#date-start').bootstrapMaterialDatePicker().val();

                            datee = date_lang_converter(datee);

                            $('#date-start').bootstrapMaterialDatePicker().val(datee);
                            var newDate = new Date(datee);
                            newDate.setDate(newDate.getDate() + 7);
                            $('#date-end').bootstrapMaterialDatePicker('setMinDate', newDate);

                            $('.total-days').html('0');
                            $('.total-price').html('0');
                        });

                        $('#date-end').on('input propertychange change', function() {

                            var datee = $('#date-start').bootstrapMaterialDatePicker().val();
                            var end_datee = $('#date-end').bootstrapMaterialDatePicker().val();

                            datee = date_lang_converter(datee);
                            end_datee = date_lang_converter(end_datee);

                            $('#date-start').bootstrapMaterialDatePicker().val(datee);
                            $('#date-end').bootstrapMaterialDatePicker().val(end_datee);
                            var newDate = new Date(datee);
                            newDate.setDate(newDate.getDate() + 7);
                            $('#date-end').bootstrapMaterialDatePicker('setMinDate', newDate);
                            $.ajax({
                                type: 'POST',
                                url: 'https://www.efadcar.com/api/v1//bookingCost',
                                data: {
                                    book_start_date: $('#date-start').bootstrapMaterialDatePicker().val(),
                                    book_end_date: $('#date-end').bootstrapMaterialDatePicker().val(),
                                    car_uid: component.$route.params.id
                                },
                                success:function(data){
                                    component.bookingResult = data.result;
                                    
                                    $('.total-days').html(component.bookingResult.days);
                                    $('.total-price').html(component.bookingResult.total_fees);
                                    
                                },
                                error: function(data){

                                }
                            });
                        });

                        function date_lang_converter(datee){
                            // alert(datee);
                            datee = datee.replace('الأحد', 'Sunday');
                            datee = datee.replace('الإثنين', 'Monday');
                            datee = datee.replace('الثلاثاء', 'Tuesday');
                            datee = datee.replace('الأربعاء', 'Wednesday');
                            datee = datee.replace('الخميس', 'Thursday');
                            datee = datee.replace('الجمعة', 'Friday');
                            datee = datee.replace('السبت', 'Saturday');

                            datee = datee.replace('يناير', 'January');
                            datee = datee.replace('فبراير', 'February');
                            datee = datee.replace('مارس', 'March');
                            datee = datee.replace('أبريل', 'April');
                            datee = datee.replace('مايو', 'May');
                            datee = datee.replace('يونيو', 'June');
                            datee = datee.replace('يوليه', 'July');
                            datee = datee.replace('اغسطس', 'August');
                            datee = datee.replace('سبتمبر', 'September');
                            datee = datee.replace('أكتوبر', 'October');
                            datee = datee.replace('نوفمبر', 'November');
                            datee = datee.replace('ديسمبر', 'December');
                            return datee;
                        }

                        function saveToDB()
                        {
                            form = $('#book-form');
                            $.ajax({
                                url: '',
                                type: 'POST',
                                data: form.serialize(), // serializes the form's elements.
                                success: function(data) {
                                    var jqObj = jQuery(data); // You can get data returned from your ajax call here. ex. jqObj.find('.returned-data').html();
                                    dataSet = data;
                                    console.log(data);
                                    // Now show them we saved and when we did
                                    if(data.status == 1){                                       
                                        // set UI values
                                        $('.total-price').html(data.total_fees_after_tax);
                                        $('.total-days').html(data.days);
                                        $('#daily-rate').html(data.daily_rate_after_discount);
                                    }
                                    
                                },
                            });
                        }




            });
       },
       watch: {},
       methods: {},
   }
</script>

<style>
    #date-start, #date-end{
        direction: ltr;
        text-align: end;
    }

    .subscribe-booking-section, .confirm-booking-section{
        display: none;
    }

    .new-booking-section, .confirm-booking-section{
        margin-top: 100px;
    }

    .first:hover{
        color: white !important;
        background-color: rgb(255, 109, 0);
    }

    .second:hover{
        color: white !important;
        background-color: #1d54d0;
    }

    .third:hover{
        color: white !important;
        background-color: #29a256;
    }

    .fourth:hover{
        color: white !important;
        background-color: #d81720;
    }

    .btn {
        border-radius: 25px;
    }
    .membership-row{
        background-color: #f3f3f3ab;
        text-align: center;
    }

    .membership-block{
        margin: 50px;
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 0% 0% 2200% 0%;
        background-color: #ff6d00;
        height: 200px;
    }

    .custom-title{
        font-size: larger;
        margin-bottom: -9px;
        color: white;
    }

    .custom-price{
        font-size: 50px;
        color: white;
    }

    .custom-text-color{
        color: white;
    }

    .custom-card-content{
        background-color: white;

    }

    .fa-check-circle{
        margin-top: 6px;
        margin-left: 10px;
    }

    .items-custom{
        
    }


    .membership-box {
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 58%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 58%, 0% 100%);
        background: #1f73b7;
        height: 251px;
        border-radius: 2% 2% 0 0;
    }

    .membership-custom-header{
        margin-top: -241px !important;
        position: inherit;
        margin-bottom: -16px;
    }

    .membership-column{
        border: 1px solid #d4cccc;
        padding: 0px;
        border-radius: 2%;
        margin: 13px;
        max-width: 23% !important;
    }

    .card-body{
        text-align: start;
    }
    
    @media (max-width: 330px) and (min-width: 290px){
        .membership-column{
            max-width: 100% !important;   
            margin: 10px;
        }
    }
</style>

