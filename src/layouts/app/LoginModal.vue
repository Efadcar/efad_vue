<template>
    <div style="display:none">
        <div id="login_form_ajax" class="login-wrap">
            <div id="login_inputs">
                <div class="panel" id="login">
                    <h3>تسجيل الدخول</h3>
                    <div class="form-group">
                        <input type='text' name='username' id='mobile' class="form-control username" placeholder="البريد الإلكتروني أو رقم الجوال بدون كود الدولة"/>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <input type="password" class="form-control password-field password" name="password" placeholder="كلمة المرور">
                            <div class="input-group-prepend"> <span class=" input-group-text"> <span toggle=".password-field" class=" fa fa-fw fa-eye field-icon toggle-password"></span></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group"> 
                        <a class="right_a switchPanelButton  " panelclass="panel" panelid="forgotpassword" href="#">نسيت كلمة المرور؟</a> 
                    </div>
                    <input type='submit' name='Submit' class="btn btn-default  btn-block loginBtn" value='تسجيل الدخول'/>
                    <div class="bottom">
                        <a class="switchPanelButton" panelclass="panel" panelid="register" href="#">ليس لديك حساب؟ إنشاء حساب جديد.</a>
                    </div>
                </div>
                </form>
                <div class="panel" id='register'>
                    <h3>تسجيل حساب جديد</h3>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="الأسم الاول" id="member_fname" name="member_fname">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="الأسم الأخير" id="member_lname" name="member_lname">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <select name="country_uid" id="countries" data-placeholder="أختر الدولة" class="country_uid" style="width:100%;">
                                    <option v-for="country in countries" :value='country.id' :data-image="'assets/global/img/flags/sa.png'" :data-imagecss="country.iso.toLowerCase()" data-title="">&nbsp;{{country.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <select id="inputState" data-placeholder="أختر مدينه" class="form-control city_uid" name="city_uid">
                                    <option value="0">أختار مدينة</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="البريد الإلكتروني" id="member_email" name="member_email">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input id="phone" type="tel" class="form-control tel member_mobile" name="member_mobile">
                            </div>
                        </div>
                    </div>
                    <div class="row  my-2">
                        <div class="col-sm-12">
                            <label for="user_password"> كلمة المرور</label>
                            <div class="input-group">
                                <input type="password" class="form-control password-field" id="member_password" name="member_password">
                                <div class="input-group-prepend"> <span class=" input-group-text"> <span toggle=".password-field" class=" fa fa-fw fa-eye field-icon toggle-password"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-12">
                            <label for="user_password">اعادة كتابة كلمة المرور</label>
                            <div class="input-group">
                                <input type="password" class="form-control password-field2" name="member_password1">
                                <div class="input-group-prepend"> <span class=" input-group-text"> <span toggle=".password-field2" class=" fa fa-fw fa-eye field-icon toggle-password"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type='submit' name='Submit' class="btn btn-default  btn-block my-4 registerBtn" value='تسجيل حساب'/>
                    <div class="bottom"> <a class="switchPanelButton" panelclass="panel" panelid="login" href="#">لديك حساب خاص بك؟ سجل دخول الآن هنا</a> </div>
                </div>
                </form>
                <div class="panel" id='forgotpassword'>
                    <h3>إعاده تعين كلمة مرور جديدة</h3>
                    <input type='tel' name='mobile' id='phone2' value='' class="form-control tel" placeholder="أدخل رقم الجوال"/>
                    <input type='submit' name='Submit' class="btn btn-default  btn-block my-4" value='أستعادة كلمة المرور'/>
                    <div class="bottom"> <a class="switchPanelButton" panelclass="panel" panelid="login" href="#">لديك حساب خاص بك؟ سجل دخول الآن هنا</a> </div>
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
        components: {},
        props: {},
        data() {
            return {
                countries: []
            };
        },
        computed: {
        },
        created() {},
        mounted() {
            const component = this;
            $(document).ready(function(){
                $('#top-login-button').fancybox();
                // $('#countries').msDropdown();
                $('#countries2').msDropdown();
                /* login */
                $('.toggle-password, .toggle-password2').click(function () {
                    $(this).toggleClass('fa-eye fa-eye-slash');
                    var input = $($(this).attr('toggle'));
                    if (input.attr('type') == 'password') {
                        input.attr('type', 'text');
                    } 
                    else 
                    {
                        input.attr('type', 'password');
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

                $.ajax({
                    type: 'GET',
                    url: component.$API.endpoints.countries,
                    success:function(data){
                        component.countries = data.result;

                        component.$nextTick(function(){
                            $('#countries').msDropdown();
                        });
                    },
                    error: function(data){

                    }
                });


                $('.registerBtn').click(function(){
                    let member_fname = $('#member_fname').val();
                    let member_lname = $('#member_lname').val();
                    let country_uid = $( ".country_uid option:selected" ).val();
                    let city_uid = $( ".city_uid option:selected" ).val();
                    let member_email = $('#member_email').val();
                    let member_mobile = $('.member_mobile').val();
                    let member_password = $('#member_password').val();
                    let pass_confirm = $('.password-field2').val();
                    $.ajax({
                        type: 'POST',
                        url: component.$API.endpoints.auth.register,
                        data:{member_fname: member_fname, member_lname:member_lname, country_uid:country_uid, city_uid:city_uid, member_email:member_email, member_mobile:member_mobile, member_password:member_password},
                        success:function(data){
                            
                            toastr.success(data.message, "نجاح");

                            var esc = $.Event("keydown", { keyCode: 27 });
                            $("body").trigger(esc);

                        },
                        error: function(data){
                            var errors = data.responseJSON;
                            toastr.error(errors.message, "خطأ");
                        }
                    });
                });

                $('.loginBtn').click(function(){
                    let username = $('.username').val();
                    let password = $('.password').val();
                    $.ajax({
                        type: 'POST',
                        url: component.$API.endpoints.auth.login,
                        data:{
                            username: username, 
                            password:password
                        },
                        success:function(data){
                            
                            toastr.success(data.message, "نجاح");
                            var esc = $.Event("keydown", { keyCode: 27 });
                            $("body").trigger(esc);


                        },
                        error: function(data){
                            var errors = data.responseJSON;
                            toastr.error(errors.message, "خطأ");
                        }
                    });
                });

                function getCitiesBasedonCountry(){
                    var country_uid = 187;
                    if (country_uid != "") {
                        var post_url = "https://www.efadcar.com/api/v1/cities?id=" + country_uid;
                        $.ajax({
                            type: "GET",
                            url: post_url,
                            success: function(cities) //we're calling the response json array 'cities'
                            {
                                cities = cities.result;
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


                $('#countries').change(function() {
                    getCitiesBasedonCountry();
                }); //end change


                let telInput = $("#phone")

                // initialize
                telInput.intlTelInput({
                    initialCountry: 'sa',
                    preferredCountries: ['sa','ae','kw','bh'],
                    autoPlaceholder: 'aggressive',
                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js"
                })

                let telInput2 = $("#phone2")

                // initialize
                telInput2.intlTelInput({
                    initialCountry: 'sa',
                    preferredCountries: ['sa','ae','kw','bh'],
                    autoPlaceholder: 'aggressive',
                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js"
                })
            });
        },
        watch: {},
        methods: {},
    }
</script>

<style>
</style>