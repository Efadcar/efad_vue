<template>
    <div style="display:none">
        <div id="login_form_ajax" class="login-wrap">
            <div id="login_inputs">
                <?php echo form_open('members/login'); ?>
                <div class="panel" id="login">
                    <h3>تسجيل الدخول</h3>
                    <div class="form-group">
                        <input type='text' name='username' id='mobile' class="form-control" placeholder="البريد الإلكتروني أو رقم الجوال بدون كود الدولة"/>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <input type="password" class="form-control password-field" name="password" placeholder="كلمة المرور">
                            <div class="input-group-prepend"> <span class=" input-group-text"> <span toggle=".password-field" class=" fa fa-fw fa-eye field-icon toggle-password"></span></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group"> 
                        <a class="right_a switchPanelButton  " panelclass="panel" panelid="forgotpassword" href="#">نسيت كلمة المرور؟</a> 
                    </div>
                    <input type='submit' name='Submit' class="btn btn-default  btn-block" value='تسجيل الدخول'/>
                    <div class="bottom">
                        <a class="switchPanelButton" panelclass="panel" panelid="register" href="#">ليس لديك حساب؟ إنشاء حساب جديد.</a>
                    </div>
                </div>
                </form>
                <?php echo form_open('members/register'); ?>
                <div class="panel" id='register'>
                    <h3>تسجيل حساب جديد</h3>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="الأسم الاول" name="member_fname">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="الأسم الأخير" name="member_lname">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <select name="country_uid" id="countries" data-placeholder="أختر الدولة" class=" " style="width:100%;">
                                <?php
                                    $countries = $this->global_model->getAllCountries();
                                    if($countries != false)
                                    foreach($countries as $r){
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <select id="inputState" data-placeholder="أختر مدينه" class="form-control " name="city_uid">
                                    <option value="0">أختار مدينة</option>
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
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="البريد الإلكتروني" name="member_email">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input id="phone" type="tel" class="form-control tel " name="member_mobile">
                            </div>
                        </div>
                    </div>
                    <div class="row  my-2">
                        <div class="col-sm-12">
                            <label for="user_password"> كلمة المرور</label>
                            <div class="input-group">
                                <input type="password" class="form-control password-field" name="member_password">
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
                    <input type='submit' name='Submit' class="btn btn-default  btn-block my-4" value='تسجيل حساب'/>
                    <div class="bottom"> <a class="switchPanelButton" panelclass="panel" panelid="login" href="#">لديك حساب خاص بك؟ سجل دخول الآن هنا</a> </div>
                </div>
                </form>
                <div class="panel" id='forgotpassword'>
                    <h3>إعاده تعين كلمة مرور جديدة</h3>
                    <input type='tel' name='mobile' id='Tel1' value='أدخل رقم الجوال' class="form-control" placeholder="mobile ID"/>
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
            return {};
        },
        computed: {},
        created() {},
        mounted() {},
        watch: {},
        methods: {},
    }
</script>

<style>
</style>