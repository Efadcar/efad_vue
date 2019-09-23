<template>
    <div>

        <section class="section-modify">
            <div>
                <ul class="nav nav-tabs">
                    <li class="active "> 
                        <a href="#tab1" align="center" class="profileTabs ftProfile p-4"><i class="fa fa-user" style="font-size:36px;color:#01355d;padding-bottom: 5px;"></i><br>بياناتي</a>
                        <div class="arrow-down justify-content-between tab1"></div>
                    </li>
                    <li>
                        <a href="#tab2" align="center" class="profileTabs stProfile p-4 "><i class="fas fa-car" style="font-size:36px;color:#01355d;padding-bottom: 5px;"></i><br>الاشتراكات</a>
                        <div class="arrow-down justify-content-between tab2"></div>
                    </li>
                    <li>
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
                                <select class="form-control customEnable" id="inputState" name="city_uid">
                                    <option value="0">اختر مدينة</option>
                                    <option value="4" :selected="auth.city_uid == 4">الدمام</option>
                                    <option value="1" :selected="auth.city_uid == 1">الرياض</option>
                                    <option value="3" :selected="auth.city_uid == 3">المدينة المنورة</option>
                                    <option value="2" :selected="auth.city_uid == 2">جدة</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="mobile" class="">رقم الجوال</label>
                                <input type="text" class="form-control customEnable" id="mobile" name="member_mobile" placeholder="ادخل رقم الجوال" :value="auth.member_mobile">
                            </div>
                            <div class="form-group">
                                <label for="email" class="">البريد الإلكتروني</label>
                                <input type="text" class="form-control customEnable" id="email" name="member_email" placeholder="ادخل البريد الإلكتروني" :value="auth.member_email">
                            </div>
                            <div class="form-group">
                                <label for="password" class="">الرقم السري</label>
                                <input type="password" class="form-control customEnable" name="member_password" id="password" placeholder="********">
                            </div>
                            <div class="form-group">
                                <label for="password_confirmation" class="">إعادة إدخال الرقم السري</label>
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
                <div class="container">
                    <div class="row margin-bottom border border custom-row-margin">
                        <div class="col-md-4">
                            <img src="https://www.efadcar.com/assets/files/albums/sm_24b059888389d5a7c29d4c8b4cdd3a74.png" class="img-fluid">
                        </div>
                        <div class="col-md-4">
                            <p><span class="desc">نوع السيارة: </span>كيا ريو 4 2019</p>
                            <p><span class="desc">تاريخ الحجز: </span>22-09-2019</p>
                            <p><span class="desc">تاريخ الاستلام: </span>30-10-2019</p>
                            <p><span class="desc">مدينة الاستلام: </span> الرياض</p>
                            <p class="color-dots"><span class="desc">حالة الاشتراك: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot1"></span>
                                <span style="margin-right: 19px;">نشط</span>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <div class="amount">
                                <h5>المبلغ الإجمالي</h5>
                                <p class="total-amount" style="color: #01355d;">918.75 ر.س.</p>
                            </div>
                            <button class="btn-primary participation-cancel">إلغاء الاشتراك</button><a target="_blank" href="https://www.efadcar.com/book/detail/41"><button class="btn-primary participation-desc">تفاصيل الاشتراك</button></a> 
                        </div>
                    </div>
                </div>
            </section>
            <section id="tab3" class="tab-content pTab3 hide">
                <div class="container">
                    <div class="row margin-bottom border border custom-row-margin">
                        <div class="col-md-4">
                            <img src="https://www.efadcar.com/assets/files/albums/sm_24b059888389d5a7c29d4c8b4cdd3a74.png" class="img-fluid">
                        </div>
                        <div class="col-md-4">
                            <p><span class="desc">نوع السيارة: </span>كيا ريو 4 2019</p>
                            <p><span class="desc">تاريخ الحجز: </span>22-09-2019</p>
                            <p><span class="desc">تاريخ الاستلام: </span>30-10-2019</p>
                            <p><span class="desc">مدينة الاستلام: </span> الرياض</p>
                            <p class="color-dots"><span class="desc">حالة الاشتراك: </span> 
                                <span style="margin-top: 6px;margin-right: 4px;" class="dot1"></span>
                                <span style="margin-right: 19px;">نشط</span>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <div class="amount">
                                <h5>المبلغ الإجمالي</h5>
                                <p class="total-amount" style="color: #01355d;">918.75 ر.س.</p>
                            </div>
                            <a target="_blank" href="https://www.efadcar.com/book/detail/41">
                                <button class="btn-primary participation-desc" style="width: 80%;">تجديد الاشتراك</button>
                            </a> 
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
                auth: JSON.parse(localStorage.getItem('auth'))
            };
       },
       computed: {},
       created() {},
       mounted() {
            // Profile page
            $(document).ready(function() {
                let auth = JSON.parse(localStorage.getItem('auth'));
                $('.submitCustom').click(function(){
                    let member_fname = $('#firstname').val();
                    let member_lname = $('#lastname').val();
                    let member_email = $('#email').val();
                    let member_mobile = $('#mobile').val();
                    let country_uid = $('#country').find(':selected').val();
                    let city_uid = $('#inputState').find(':selected').val();
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
                                toastr.success(data.message, 'نجاح');
                            }
                            else
                            {
                                console.log(data);
                                toastr.error(data.message, 'خطأ');
                            }
                            
                            $('.confirm-booking-section').waitMe('hide');
                        },
                    });
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
       methods: {},
   }
</script>


<style type="text/css">
    body {
        overflow-x: hidden;
    }

    .desc {
        font-size: small;
        font-style: normal;
        margin-bottom: 10px;
        font-weight: 800;
        color: #333;
        margin-left: 5px;
    }

    .img-fluid {
        margin-top: -23px;
    }

    .total-amount {
        font-size: xx-large;
        color: #3baeff;
    }

    .amount {
        margin-right: 66px;
    }

    .margin-bottom {
        margin-bottom: 30px;
    }

    .custom-img {
        width: 50%;
        float: left;
    }

    .border {
        border: 1px solid gainsboro;
        padding: 22px;
    }

    .border-invoice {
        border-color: #103453;
        border-radius: 6px;
        border: 1px solid gainsboro;
        padding: 22px;
    }

    .total-all {
        color: #1b9fec;
        background-color: #e6e6e6;
        padding: 10px;
        font-size: large;
    }

    .margin-top {
        margin-top: 49px;
    }

    .margin-top-extra {
        margin-top: 124px;
    }

    .logo-invoice {
        float: left;
        width: 36%;
        margin-left: 50px;
        margin-top: 42px;
    }

    .margin-right-extra {
        margin-right: 50px;
    }

    .margin-right {
        margin-right: 30px;
    }

    .participation-desc {
        color: #fff;
        background-color: #103453;
        border-color: #103453;
        padding: 6px;
        font-size: medium;
        height: auto;
        border-radius: 6px;
    }

    .participation-desc:hover,
    .participation-cancel:hover {
        color: #fff;
        background-color: #103453;
        border-color: #103453;
    }

    .participation-cancel {
        color: #fff;
        background-color: #c5c5c5;
        border-color: #c5c5c5;
        padding: 6px;
        font-size: medium;
        height: auto;
        border-radius: 6px;
        margin-left: 11px;
    }

    p {
        font-size: small;
        color: #333;
        font-weight: 400;
        margin-bottom: 8px !important;
    }

    .header-img {
        width: 100%;
        height: 370px;
    }

    .nav {
        margin-bottom: 18px;
        margin-left: 0;
        list-style: none;
        margin-right: 40%;
    }

    .nav>li>a {
        display: block;
    }

    .nav-tabs {
        *zoom: 1;
        border-bottom: none !important;
    }

    .nav-tabs:before,
    .nav-tabs:after {
        display: table;
        content: "";
    }

    .nav-tabs:after {
        clear: both;
    }

    .nav-tabs>li {
        float: left;
    }

    .nav-tabs>li>a {
        padding-right: 12px;
        padding-left: 12px;
        margin-right: 2px;
        line-height: 14px;
    }

    .nav-tabs>li>a {
        padding-top: 8px;
        padding-bottom: 8px;
        line-height: 18px;
        -webkit-border-radius: 4px 4px 0 0;
        -moz-border-radius: 4px 4px 0 0;
        border-radius: 4px 4px 0 0;
    }

    .nav-tabs>li>a:hover {
        border-color: #eeeeee #eeeeee #dddddd;
    }

    .nav-tabs>.active>a,
    .nav-tabs>.active>a:hover {
        color: #555555;
        cursor: default;
        background-color: #ffffff;
        border: 1px solid #ddd;
    }

    li {
        line-height: 18px;
    }

    .tab-content.active {
        display: block;
    }

    .tab-content.hide {
        display: none;
    }

    .desc{
        font-size: small;
        font-style: normal;
        margin-bottom: 10px;
        font-weight: 800;
        color: #333;
        margin-left: 5px;
    }

    .img-fluid{
        margin-top: -23px;
    }

    .total-amount{
        font-size: xx-large;
        color: #3baeff;
    }

    .amount{
        margin-right: 66px;
    }

    .margin-bottom{
        margin-bottom: 30px;
    }

    .custom-img{
        width: 50%;
        float: left;
    }

    .border{
        border: 1px solid gainsboro;
        padding: 22px;
    }

    .border-invoice{
        border-color: #103453;
        border-radius: 6px;
        border: 1px solid gainsboro;
        padding: 22px;
    }

    .total-all{
        color: #1b9fec;
        background-color: #e6e6e6;
        padding: 10px;
        font-size: large;
    }

    .margin-top{
        margin-top: 49px;
    }

    .margin-top-extra{
        margin-top: 124px;
    }

    .logo-invoice{
        float: left;
        width: 36%;
        margin-left: 50px;
        margin-top: 42px;
    }

    .margin-right-extra{
        margin-right: 50px;
    }

    .margin-right{
        margin-right: 30px;
    }

    .participation-desc{
        color: #fff;
        background-color: #103453;
        border-color: #103453;
        padding: 6px;
        font-size: medium;
        height: auto;
        border-radius: 6px;
    }

    .participation-desc:hover, .participation-cancel:hover{
        color: #fff;
        background-color: #103453;
        border-color: #103453;
    }

    .participation-cancel{
        color: #fff;
        background-color: #c5c5c5;
        border-color: #c5c5c5;
        padding: 6px;
        font-size: medium;
        height: auto;
        border-radius: 6px;
        margin-left: 11px;
    }

    p{
        font-size: small;
        color: #333;
        font-weight: 400;
        margin-bottom: 8px !important;
    }

    .navbar{
      width: 101%;
    }

    .header-img{
        width: 102%;
        height: 270px;
    }

    .nav {
        margin-bottom: 18px;
        margin-left: 0;
        list-style: none;
        margin-right: 40%;
    }

    .nav > li > a {
        display: block;
    }

    .nav-tabs{
        *zoom: 1;
        border-bottom: none !important;
    }

    .nav-tabs:before,
    .nav-tabs:after {
        display: table;
        content: "";
    }

    .nav-tabs:after {
        clear: both;
    }

    .nav-tabs > li {
        float: left;
    }

    .nav-tabs > li > a {
        padding-right: 12px;
        padding-left: 12px;
        margin-right: 2px;
        line-height: 14px;
    }



    .nav-tabs > li > a {
        padding-top: 8px;
        padding-bottom: 8px;
        line-height: 18px;
        -webkit-border-radius: 4px 4px 0 0;
        -moz-border-radius: 4px 4px 0 0;
        border-radius: 4px 4px 0 0;
    }

    .nav-tabs > li > a:hover {
        border-color: #eeeeee #eeeeee #dddddd;
    }

    .nav-tabs > .active > a,
    .nav-tabs > .active > a:hover {
        color: #555555;
        cursor: default;
        background-color: #ffffff;
        border: 1px solid #ddd;
    }

    li {
        line-height: 18px;
    }

    .tab-content.active{
        display: block;
    }

    .tab-content.hide{
        display: none;
    }


    .section-modify{
        padding-top: 10%;
    }

    .form-control {
        background: #fff;
    }

    .custom-btn{
        color: #fff;
        background-color: #01355d;
        border-color: #01355d;
        border-radius: 21px;
        width: 100%;
        margin-top: 20px;
    }
    .arrow-down {
        width: 0; 
        height: 0; 
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #01355d;
        margin-right: 30%;
    }
    select{
        -webkit-appearance: menulist !important;
    }
    .tab2, .tab3, .submitCustom{
        display: none;
    }
</style>