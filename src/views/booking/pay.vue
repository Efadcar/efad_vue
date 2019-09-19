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
</template>

<!-- footer -->