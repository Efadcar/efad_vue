<template>
    <div>

        <section class="section-modify">
            <div>
                <ul class="nav nav-tabs">
                    <li class="active "> 
                        <a href="#tab1" align="center" class="profileTabs ftProfile p-4"><i class="fa fa-user" style="font-size:36px;color:#01355d;padding-bottom: 5px;"></i><br>بياناتي</a>
                        <div class="arrow-down justify-content-between tab1"></div>
                    </li>
                    <li class="secondLiTabNavRespo">
                        <a href="#tab2" align="center" class="profileTabs stProfile p-4 "><i class="fas fa-car" style="font-size:36px;color:#01355d;padding-bottom: 5px;"></i><br>الحجوزات</a>
                        <div class="arrow-down justify-content-between tab2"></div>
                    </li>
                    <li class="thirdLiTabNavRespo">
                        <a href="#tab3" align="center" class="profileTabs ttProfile p-4 "><i class="fas fa-clock" style="font-size:36px;color:#01355d;padding-bottom: 5px;"></i><br>الدفع السريع</a>
                        <div class="arrow-down justify-content-between tab3"></div>
                    </li>
                </ul>   
            </div>
            <section id="tab1" class="tab-content pTab1 active" style="margin: 0px 20%;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="firstname" class="">الاسم الأول</label>
                                <input type="text" class="form-control customEnable" id="firstname" name="member_fname" placeholder="ادخل الاسم الأول" :value="auth.member_fname">
                            </div>
                            <div class="form-group">
                                <label for="lastname" class="">الاسم الأخير</label>
                                <input type="text" class="form-control customEnable" id="lastname" name="member_lname" placeholder="ادخل الاسم الأخير" :value="auth.member_lname">
                            </div>

                            <div class="form-group">
                                <label for="country" class="">الدولة</label>
                                <select class="form-control customEnable" id="country" name="country_uid">
                                    <option value="187">السعودية</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="city" class="">المدينة</label>
                                <select class="form-control customEnable selectlistv" id="inputState" name="city_uid">
                                    <option value="0">اختر مدينة</option>
                                    <option value="4" :selected="auth.city_uid == 4">الدمام</option>
                                    <option value="1" :selected="auth.city_uid == 1">الرياض</option>
                                    <option value="3" :selected="auth.city_uid == 3">المدينة المنورة</option>
                                    <option value="2" :selected="auth.city_uid == 2">جدة</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="mobile" class="">رقم الجوال</label>
                                <input type="text" class="form-control customEnable mobile" id="mobile" name="member_mobile" placeholder="ادخل رقم الجوال" :value="auth.member_mobile">
                            </div>
                            <div class="form-group">
                                <label for="email" class="">البريد الإلكتروني</label>
                                <input type="text" class="form-control customEnable" id="email" name="member_email" placeholder="ادخل البريد الإلكتروني" :value="auth.member_email">
                            </div>
                            <div class="form-group">
                                <label for="password" class="">كلمة المرور</label>
                                <input type="password" class="form-control customEnable" name="member_password" id="password" placeholder="********">
                            </div>
                            <div class="form-group">
                                <label for="password_confirmation" class="">إعادة كتابة كلمة المرور</label>
                                <input type="password" class="form-control customEnable" name="password_confirmation" id="password_confirmation" placeholder="********">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="custom-btn btn submitCustom">حفظ التعديلات</button>
                                <button type="button" class="custom-btn btn buttonCustom">تعديل</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tab2" class="tab-content pTab2 hide">
                <div v-if="bookings.length > 0" class="container">
                    <div v-for="bookIndex in bookings" class="row margin-bottom border border custom-row-margin" style="background-color: #f7f6f6;">
                        <div class="col-md-4">
                            <img :src="bookIndex.car_obj.car_image" class="img-fluid">
                        </div>
                        <div class="col-md-4">
                            <p><span class="desc">رقم الحجز: </span>{{ bookIndex.book_uid }}</p>
                            <p><span class="desc">نوع السيارة: </span>{{ bookIndex.car_obj.car_brand_name }} {{ bookIndex.car_obj.car_model_name }} {{ bookIndex.car_obj.car_model_year }}</p>
                            <p><span class="desc">تاريخ بداية الحجز: </span>{{bookIndex.book_start_date}}</p>
                            <p><span class="desc">تاريخ نهاية الحجز: </span>{{bookIndex.book_end_date }}</p>
                            <p><span class="desc">مدينة استلام السيارة: </span>{{ fotmatCityDelivery(bookIndex.delivery_city_uid) }}</p>
                            <p class="color-dots" v-if="bookIndex.book_status == 0">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot4"></span>
                                <span style="margin-right: 19px;">ملغي</span>
                            </p>
                            <p class="color-dots" v-if="bookIndex.book_status == 1">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot1"></span>
                                <span style="margin-right: 19px;">مؤكد</span>
                            </p>
                            <p class="color-dots" v-if="bookIndex.book_status == 2">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot3"></span>
                                <span style="margin-right: 19px;">انتظار تأكيد الحجز </span>
                                <p v-if="bookIndex.book_status == 2" style="color: #ca2121;">( يتم تأكيد الحجز بشكل نهائي بعد سداد قيمة الحجز وسيتم إلغاء الحجز تلقائياً في حال لم يتم دفع. للمساعدة، يرجى التواصل مع فريق إيفاد للعناية بالعملاء من خلال المحادثة المباشرة أو على الواتس آب على الرقم:  078  208 555 966 + )</p>
                            </p>
                            <p class="color-dots" v-if="bookIndex.book_status == 3">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot4"></span>
                                <span style="margin-right: 19px;">منتهي</span>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <div class="amount">
                                <h5>المبلغ الإجمالي</h5>
                                <p class="total-amount" style="color: #01355d;">{{bookIndex.inovice.invoice_total_fees_after_tax }} ر.س.</p>
                            </div>
                            <button class="btn-primary participation-cancel" :data-bookuid="bookIndex.book_uid">إلغاء الحجز</button>
                            <router-link :to="'/bookings/'+bookIndex.book_uid+'?total='+bookIndex.inovice.invoice_total_fees_after_tax">
                                <button class="btn-primary participation-desc" :data-bookuid="bookIndex.book_uid">تفاصيل الحجز</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <router-link to="/" style="color: white;">
                                <p style="text-align: center;font-size: large;color: #01355d;">لا توجد بيانات</p>
                                <div class="efadCustomBtn" style="text-align: center;padding: 12px;border-radius: 13px;">للحجز اضغط هنا
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tab3" class="tab-content pTab3 hide">
                <div v-if="quickPayment.length > 0" class="container">
                    <div v-for="bookIndex in quickPayment" class="row margin-bottom border border custom-row-margin" style="background-color: #f7f6f6;">
                        <div class="col-md-4">
                            <img :src="bookIndex.car_obj.car_image" class="img-fluid">
                        </div>
                        <div class="col-md-4">
                            <p><span class="desc">رقم الحجز: </span>{{ bookIndex.book_uid }}</p>
                            <p><span class="desc">نوع السيارة: </span>{{ bookIndex.car_obj.car_brand_name }} {{ bookIndex.car_obj.car_model_name }} {{ bookIndex.car_obj.car_model_year }}</p>
                            <p><span class="desc">تاريخ الحجز: </span>{{bookIndex.book_start_date}}</p>
                            <p><span class="desc">تاريخ بداية الحجز: </span>{{bookIndex.book_end_date }}</p>
                            <p><span class="desc">تاريخ نهاية الحجز: </span>{{ fotmatCityDelivery(bookIndex.delivery_city_uid) }}</p>
                            <p class="color-dots" v-if="bookIndex.book_status == 0">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot4"></span>
                                <span style="margin-right: 19px;">ملغي</span>
                            </p>
                            <p class="color-dots" v-if="bookIndex.book_status == 1">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot1"></span>
                                <span style="margin-right: 19px;">مؤكد</span>
                            </p>
                            <p class="color-dots" v-if="bookIndex.book_status == 2">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot3"></span>
                                <span style="margin-right: 19px;">انتظار تأكيد الحجز </span>
                                <p v-if="bookIndex.book_status == 2" style="color: #ca2121;">( يتم تأكيد الحجز بشكل نهائي بعد سداد قيمة الحجز وسيتم إلغاء الحجز تلقائياً في حال لم يتم دفع. للمساعدة، يرجى التواصل مع فريق إيفاد للعناية بالعملاء من خلال المحادثة المباشرة أو على الواتس آب على الرقم:  078  208 555 966 + )</p>
                            </p>
                            <p class="color-dots" v-if="bookIndex.book_status == 3">
                                <span class="desc">حالة الحجز: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot4"></span>
                                <span style="margin-right: 19px;">منتهي</span>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <div class="amount">
                                <h5>المبلغ الإجمالي</h5>
                                <p class="total-amount" style="color: #01355d;">{{bookIndex.inovice.invoice_total_fees_after_tax }} ر.س.</p>
                            </div>
                            <router-link :to="'/booking/new/'+bookIndex.car_uid+'?start='+bookIndex.book_end_date+'&book_uid='+bookIndex.book_uid+'&city_uid='+bookIndex.delivery_city_uid">
                                <button style="width: 81%;border-radius: 9px;color: #fff;background-color: #01355d;border-color: #01355d;" class="btn-primary participation-desc-renew" :data-bookuid="bookIndex.book_uid">تجديد الحجز</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <router-link to="/" style="color: white;">
                                <p style="text-align: center;font-size: large;color: #01355d;">لا توجد بيانات</p>
                                <div class="efadCustomBtn" style="text-align: center;padding: 12px;border-radius: 13px;">للحجز اضغط هنا
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
        </section>

   </div>
</template>

<script>
    // Import plugins if any

    // Import custom components if any
    require("../../assets/global/plugins/animated-input/css/style.css");
    require("../../assets/rtl/css/responsive.css");
    // Component local properties if any

    // component export
   export default {
       components: {},
       props: {},
       data() {
            return {
                auth: JSON.parse(localStorage.getItem('auth')),
                bookings: [],
                quickPayment: [],
            };
       },
       computed: {},
       created() {},
       mounted() {
            let component = this;
            document.title = 'افاد | الصفحة الشخصية';
            // Profile page
            $(document).ready(function() {
                let auth = JSON.parse(localStorage.getItem('auth'));

                $('body').on('click', '.participation-cancel', function(){
                    let book_uid = $(this).attr('data-bookuid');
                    $.ajax({
                        url: 'https://www.efadcar.com/api/v1/bookingCancel',
                        type: 'POST',
                        data: {
                            book_uid: book_uid,
                        },
                        beforeSend: function(xhr){xhr.setRequestHeader('token', auth.token);},
                        success: function(data) {
                            if(data.status == 1) {
                                toastr.success(data.message, 'نجاح');
                            }
                            else {
                                toastr.error(data.message, 'خطأ');
                            }
                        },
                        error: function(data) {

                        },
                    });
                });


                // $('body').on('click', '.participation-desc', function(){
                //     let book_uid = $(this).attr('data-bookuid');
                //     component.$router.replace({ path: '/bookings/' + book_uid });
                // });

                $.ajax({
                    url: 'https://www.efadcar.com/api/v1/bookings',
                    type: 'POST',
                    beforeSend: function(xhr){xhr.setRequestHeader('token', auth.token);},
                    success: function(data) {
                        if(data.status == 1) {
                            component.bookings = data.result;
                        }
                        else {

                        }
                    },
                    error: function(data) {

                    },
                });


                $.ajax({
                    url: 'https://www.efadcar.com/api/v1/quickPayment',
                    type: 'POST',
                    beforeSend: function(xhr){xhr.setRequestHeader('token', auth.token);},
                    success: function(data) {
                        if(data.status == 1) {
                            component.quickPayment = data.result;
                        }
                        else {

                        }
                    },
                    error: function(data) {

                    },
                });

                $('.submitCustom').click(function(){
                    let member_fname = $('#firstname').val();
                    let member_lname = $('#lastname').val();
                    let member_email = $('#email').val();
                    let member_mobile = $('.mobile').val();
                    let country_uid = $('#country').find(':selected').val();
                    let city_uid = $('.selectlistv').children("option:selected").val();
                    $.ajax({
                        url: 'https://www.efadcar.com/api/v1/updateProfile',
                        type: 'POST',
                        data: {
                            member_fname: member_fname,
                            member_lname: member_lname,
                            member_email: member_email,
                            member_mobile: member_mobile,
                            country_uid: country_uid,
                            city_uid: city_uid,
                        },
                        beforeSend: function(xhr){xhr.setRequestHeader('token', auth.token);},
                        success: function(data) {
                            console.log(data);
                            if(data.status == 1)
                            {
                                auth.member_fname = member_fname;
                                auth.member_lname = member_lname;
                                auth.city_uid = city_uid;
                                auth.member_mobile = member_mobile;
                                auth.member_email = member_email;

                                localStorage.setItem('auth', JSON.stringify(auth));
                                toastr.success(data.message, 'نجاح');
                            }
                            else
                            {
                                toastr.error(data.message, 'خطأ');
                            }
                        },
                        error: function(data) {
                            console.log(data);
                            toastr.error(data.responseJSON.message, 'خطأ');
                        },
                    });
                    $('.customEnable').prop('disabled', true);
                    $(this).hide();
                    $('.buttonCustom').show();
                });

                $('.clickPTab1').click(function(){
                    $('.ftProfile').trigger('click');
                });

                $('.ftProfile').click(function(){
                    $('.tab-content').removeClass('active');
                    $('.tab-content').addClass('hide');
                    $('.pTab1').addClass('active');
                    $('.pTab1').removeClass('hide');
                });

                $('.clickPTab2').click(function(){
                    $('.stProfile').trigger('click');
                });

                $('.stProfile').click(function(){
                    $('.tab-content').removeClass('active');
                    $('.tab-content').addClass('hide');
                    $('.pTab2').addClass('active');
                    $('.pTab2').removeClass('hide');
                });

                $('.clickPTab3').click(function(){
                    $('.ttProfile').trigger('click');
                });

                $('.ttProfile').click(function(){
                    $('.tab-content').removeClass('active');
                    $('.tab-content').addClass('hide');
                    $('.pTab3').addClass('active');
                    $('.pTab3').removeClass('hide');
                });

                function getCitiesBasedonCountry(){
                    var country_uid = 187;
                    if (country_uid != "") {
                        var post_url = "https://www.efadcar.com/api/v1/cities?id=187";
                        $.ajax({
                            type: "GET",
                            url: post_url,
                            success: function(cities) //we're calling the response json array 'cities'
                            {
                                cities = cities.result;
                                // console.log(cities);
                                $('#inputState').empty();
                                $('#inputState').append('<option value="0">اختر مدينة</option>');
                                $('#inputState').prop('disabled', false);

                                if(cities != false){
                                    $.each(cities, function(key, value)
                                    {
                                        $('#inputState').append('<option value="'+value["city_uid"]+'">'+value["city_name_ar"]+'</option>');
                                    });
                                }else{
                                    $('#inputState').html('<option value="0">لا توجد مدن</option>');
                                }


                            }, //end success
                            error: function(xhr, ajaxOptions, thrownError) {
                                alert(xhr.status);
                                alert(thrownError);
                                alert('error');
                            }
                        }); //end AJAX
                    } else {
                        $('#inputState').empty();
                    }//end if
                }

                getCitiesBasedonCountry();

                $('.nav-tabs > li > a').click(function(event){
                    event.preventDefault();//stop browser to take action for clicked anchor
                                
                    //get displaying tab content jQuery selector
                    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');                  
                                
                    //find actived navigation and remove 'active' css
                    var actived_nav = $('.nav-tabs > li.active');
                    actived_nav.removeClass('active');
                                
                    //add 'active' css into clicked navigation
                    $(this).parents('li').addClass('active');
                                
                    //hide displaying tab content
                    $(active_tab_selector).removeClass('active');
                    $(active_tab_selector).addClass('hide');
                                
                    //show target tab content
                    var target_tab_selector = $(this).attr('href');
                    $(target_tab_selector).removeClass('hide');
                    $(target_tab_selector).addClass('active');
                });

                

                let hashURL = $(location).attr('hash');

                if (hashURL){
                    $('.nav-tabs a[href="'+hashURL+'"]').trigger('click');
                    $('.arrow-down').hide();
                    $('.'+hashURL.substring(1)).show();
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                }

                $('.customEnable').prop('disabled', true);

                $('.buttonCustom').click(function(){
                    $('.customEnable').prop('disabled', false);
                    $(this).hide();
                    $('.submitCustom').show();
                });

                $('.profileTabs').click(function(){
                    $('.profileTabs').next().hide();
                    $(this).next().show();
                });
                $( "ul" ).on( "click", "li", function() {
                    var pos = $(this).index()+2;
                    $("tr").find('td:not(:eq(0))').hide();
                    $('td:nth-child('+pos+')').css('display','table-cell');
                    $("tr").find('th:not(:eq(0))').hide();
                    $('li').removeClass('active');
                    $(this).addClass('active');
                });

                // Initialize the media query
                var mediaQuery = window.matchMedia('(min-width: 640px)');

                // Add a listen event
                mediaQuery.addListener(doSomething);

                // Function to do something with the media query
                function doSomething(mediaQuery) {    
                    if (mediaQuery.matches) {
                        $('.sep').attr('colspan',5);
                    } else {
                        $('.sep').attr('colspan',2);
                    }
                }

                doSomething(mediaQuery);
                $(function () {

                    /* login */
                    $(".toggle-password").click(function () {

                        $(this).toggleClass("fa-eye fa-eye-slash");
                        var input = $($(this).attr("toggle"));
                        if (input.attr("type") == "password") {
                            input.attr("type", "text");
                        } else {
                            input.attr("type", "password");
                        }
                    });
                    $('[data-toggle="tooltip"]').tooltip();
                })
                var readURL = function (input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            $('.profile-pic').attr('src', e.target.result);
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
                $(".file-upload").on('change', function () {
                    readURL(this);
                });

                $(".upload-button").on('click', function () {
                    $(".file-upload").click();
                });
                $('.nav-tabs > li > a').click(function(event){
                    event.preventDefault();//stop browser to take action for clicked anchor
                                
                    //get displaying tab content jQuery selector
                    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');                  
                                
                    //find actived navigation and remove 'active' css
                    var actived_nav = $('.nav-tabs > li.active');
                    actived_nav.removeClass('active');
                                
                    //add 'active' css into clicked navigation
                    $(this).parents('li').addClass('active');
                                
                    //hide displaying tab content
                    $(active_tab_selector).removeClass('active');
                    $(active_tab_selector).addClass('hide');
                                
                    //show target tab content
                    var target_tab_selector = $(this).attr('href');
                    $(target_tab_selector).removeClass('hide');
                    $(target_tab_selector).addClass('active');
                });
            });
       },
       watch: {},
       methods: {
            fotmatCityDelivery: function(id){
                if(id == 1){
                    return "الرياض";
                }
                else if (id == 2){
                    return "جدة";
                }
                else if (id == 3){
                    return "المدينة المنورة";
                }
                else if (id == 4){
                    return "الدمام";
                }
            },
       },
   }
</script>


