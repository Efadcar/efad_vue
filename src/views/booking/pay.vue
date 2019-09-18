<template>
    <div>
        
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 ">
                        <div class="main-heading ">
                            <h1>
                                افاد | تأكيد الحجز
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section rol="form-reservation">
            <div class="container  mb-2 pb-4">
                <div class="row">
                    <div class="col-12"> <a href="#" class="btn btn-default cutom-btn active"> تفاصيل الاشتراك</a> <!--<a href="#" class="btn btn-default cutom-btn">الحجز المجانى</a> --> </div>
                </div>
                <div class="reservation-form  bg-secondary">
                    <div class="row d-flex align-items-center ">
                        <div class="col-sm-7">
                            <div class="carnamePay ml-2 text-left">
                                <h3>نوع السيارة : <span>هيونداي</span><span>النترا</span><span>2019</span></h3>
                               
                            </div>
                            
                            <ul class="cartype">
                                <li style="width: 24%">
                                    <div class="cartype-logo"> <img alt="gear" src="../../assets/rtl/images/gear-icon.png" /> </div>
                                    <span >أوتوماتيك</span> </li>
                                <li style="width: 24%">
                                    <div class="cartype-logo"> <img alt="bag" src="../../assets/rtl/images/bag-icon.png" /> </div>
                                    <span >1> شنطة</span> </li>
                                <li style="width: 24%">
                                    <div class="cartype-logo"> <img alt="persons" src="../../assets/rtl/images/person-icon.png" /> </div>
                                    <span >2 أفراد</span> </li>
                                <li style="width: 24%">
                                    <div class="cartype-logo"> <img alt="doors" src="../../assets/rtl/images/door-icon.png" /> </div>
                                    <span >4 أبواب</span>
                                </li>
                            </ul>
                            <br>
                            <ul class="cartype">
                                    
                                <li style="width: 24%">
                                    <div class="cartype-logo"> مدة الاشتراك </div>
                                    <span >7 ايام</span> 
                                </li>
                                <li style="width: 24%">
                                    <div class="cartype-logo"> تاريخ الاستلام  </div>
                                    <span >11/11/2019</span> </li>
                                <li style="width: 24%">
                                    <div class="cartype-logo"> تاريخ التسليم  </div>
                                    <span>11/11/2019</span> </li>
                                <li style="width: 24%">
                                    <div class="cartype-logo"> مدينة الاستلام </div>
                                    <span >الدمام</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-4 custom-margin-car-slider">
                            
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
                                    رقم حساب بنك الإنماء :<br>
                                    68202326900000<br><br>
                                    رقم حساب البنك الأهلي التجاري :<br>
                                    26900000231101
                                </p>
                                </div>
                            </div>
                            <div class="custom-control custom-radio col-sm-12 ml-4">
                                <input type="radio" id="cash" name="customRadio" class="custom-control-input" value="cash">
                                <label class="custom-control-label" for="cash">
                                    <ul class="payment-img custom-pay-img">
                                        <li> نقدي (كاش) <span style="color: red">* 5 ر.س. إضافية</span> </li>
                                    </ul>
                                </label>
                            </div>
                            
                            <div class="row" id="paymentCard">
                                <div class="col-sm-9 ">
                                    <h4 class="text-left text-muted"> أدخل بيانات البطاقة</h4>
                                    <div class="checkout">
                                        <div class="cardvisa d-none d-sm-block">

                                            <div class="card__wrapper mb-4">

                                            </div>
                                            <div class="form-group secure">
                                                <input type="text" name="number" id="number" class="jp-card-valid card__number form-control" placeholder="رقم بطاقة الإئتمان"/>
                                                <span> <img src="../../assets/rtl/images/secure.png" alt=""> </span> 
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="name" id="name" class="card__name form-control" placeholder="الاسم كما فى البطاقة"/>
                                            </div>
                                            <div class="form-row">

                                                <div class="col-sm-6">
                                                    <input placeholder="MM/YY" type="text" name="expiry" class="jp-card-valid form-control mb-2 mr-sm-2">
                                                </div>
                                                <div class="col-6 cvc">
                                                    <input type="text" name="cvc" id="cvc" class="card__cvc form-control mb-2 mr-sm-2" placeholder="CVC"/>
                                                    <span> <img src="../../assets/rtl/images/card.png" alt=""> </span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                <td class="text-right"><span><?= $current_booking['total_fees'] ?></span> ر.س.</td>
                                            </tr>
                                            <?php if($current_booking['free_day'] != 0){ ?>
                                            <tr>
                                                <td class="text-left">خصم الأيام المجانية بسبب مدة الاشتراك
                                                </td>
                                                <td class="text-right">- <span><?= $current_booking['free_day'] * $current_booking['daily_rate_after_discount'] ?></span> ر.س.</td>
                                            </tr>
                                            <?php } ?>
                                            <?php if($this->global_model->isFirstBooking($this->session->userdata('member_uid'))){ 
                                                $first_booking = 1;
                                            ?>
                                            <!--<tr>
                                                <td class="text-left">خصم بسبب الاشتراك لأول مرة مع إفاد
                                                </td>
                                                <td class="text-right">- <span><?= $current_booking['daily_rate_after_discount'] ?></span> ر.س.</td>
                                            </tr> -->
                                            <?php }else{ $first_booking = 0;} ?>
                                            <?php if($current_booking['early_booking'] != 0){ ?>
                                            <tr>
                                                <td class="text-left">خصم الحجز المبكر
                                                </td>
                                                <td class="text-right">- <span><?= $current_booking['early_booking_discount_total'] ?></span> ر.س.</td>
                                            </tr>
                                            <?php } ?>
                                            <tr>
                                                <td class="text-left">ضريبة القيمه المضافة 5% للخدمة
                                                </td>
                                                <td class="text-right"><span id="tax-total"><?= $current_booking['tax_total'] ?></span> ر.س.</td>
                                            </tr>


                                            <tr class="cash-fees-tr">
                                                <td class="text-left"> رسوم الدفع النقدي للخدمة
                                                </td>
                                                <td class="text-right">
                                                    <span id="tax-total">
                                                        <?= CASH_PAYMENT_FEES ?>
                                                    </span> ر.س.</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <?php //print_r($_SESSION); ?>
                                    <table class="table mb-0">
                                        <?php if($_SESSION['current_booking']['new_member'] != 0){ ?>
                                        <tbody>
                                            <tr>
                                                <td class="text-left">رسوم اشتراك العضوية الحمراء
                                                </td>
                                                <td class="text-right">
                                                    <span>
                                                        <?= RED_MEMBERSHIP_YEARLY_FEES ?>
                                                    </span> ر.س.</td>
                                            </tr>
                                            <tr>
                                                <td class="text-left">ضريبة القيمه المضافة 5% للعضوية
                                                </td>
                                                <td class="text-right">
                                                    <span id="tax-total">
                                                        <?php echo (RED_MEMBERSHIP_YEARLY_FEES / 100) * 5 ?>
                                                    </span> ر.س.</td>
                                            </tr>
                                            <tr class="cash-fees-tr">
                                                <td class="text-left">
                                                     رسوم الدفع النقدي للعضوية
                                                </td>
                                                <td class="text-right">
                                                    <span id="tax-total">
                                                        <?= CASH_PAYMENT_FEES ?>
                                                    </span> ر.س.</td>
                                            </tr>
                                        </tbody>
                                        <?php } ?>

                                        <?php
                                        if($current_booking['new_member'] != 0){
                                            $total_with_cash = $current_booking['total_fees_after_tax'] + (CASH_PAYMENT_FEES * 2) + RED_MEMBERSHIP_YEARLY_FEES + ((RED_MEMBERSHIP_YEARLY_FEES / 100) * 5 );
                                            $total_without_cash = $current_booking['total_fees_after_tax'] + RED_MEMBERSHIP_YEARLY_FEES + ((RED_MEMBERSHIP_YEARLY_FEES / 100) * 5 );
                                        }else{
                                            $total_with_cash = $current_booking['total_fees_after_tax'] + CASH_PAYMENT_FEES;
                                            $total_without_cash = $current_booking['total_fees_after_tax'];
                                        }
                                        /*
                                        if($first_booking != 0){
                                            $total_with_cash = $current_booking['total_fees_after_tax'] + CASH_PAYMENT_FEES  - $current_booking['daily_rate_after_discount'];
                                            $total_without_cash = $current_booking['total_fees_after_tax'] - $current_booking['daily_rate_after_discount'];
                                        }
                                        */
                                        ?>
                                        <input type="hidden" id="total_with_cash" name="total_with_cash" value="<?= $total_with_cash ?>" />
                                        <input type="hidden" id="total_without_cash" name="total_without_cash" value="<?= $total_without_cash ?>" />
                                        <tfoot>
                                            <tr>
                                                <td class="text-left ">
                                                    <h3>المبلغ الإجمالي </h3>
                                                </td>
                                                <td class="text-right">
                                                    <h4><span class="total-price"><?= $total_without_cash ?> </span> ر.س.</h4>
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
</template>

<!-- footer -->

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