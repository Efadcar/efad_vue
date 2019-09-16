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