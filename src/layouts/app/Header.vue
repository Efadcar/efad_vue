<template>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top sb-navbar nav-new">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img class="logo" src="/assets/rtl/images/new-logo.png" alt="Efad Logo" />
            </router-link>
            <div class="collapse navbar-collapse" id="mainMenu">
                <div class="navbar-buttons mbr-section-btn ml-auto loginAuthMenu" v-show="isAuthenticated()"> 
                 
                    <a class="btn btn-login" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-left: 5px;">
                        {{ (auth) ? auth.member_full_name : "" }} &nbsp;<i class="fa fa-user-circle"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <span class="dropdown-menu-arrow"></span>
                        <div class="row ml-0 mr-0">
                            <div class="col-md-7">
                                <h6 class="mb-0">{{(auth) ? auth.member_full_name : ""}}</h6>
                                <p class="mb-0" style="font-size: small;">رقم عضوية : {{(auth) ? auth.member_uid : ""}}</p>
                            </div>
                            <div class="col-md-5" align="left">
                                <img src="../../assets/rtl/images/efad-logo.png" class="custom-fav-img">
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile?#tab1" class="dropdown-item clickPTab1">
                            بياناتي
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile?#tab2" class="dropdown-item clickPTab2">
                            الحجوزات
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile?#tab3" class="dropdown-item clickPTab3">
                            الدفع السريع
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item logoutBtn" href="#" v-on:click='logout'>تسجيل خروج</a>
                    </div>                                      
                    <!-- <a href="<?= site_url('memberships/subscribe') ?>" class="btn" style="background-color: #eb3f31; color: #fff; ">
                        <span><span>مميزات العضوية</span></span>
                    </a> -->
                </div>
                <div class="navbar-buttons  mbr-section-btn  ml-auto nonAuthMenu" v-show="!isAuthenticated()"> 
                    <a id="top-login-button" href="#login_form_ajax" class="mr-2">
                    تسجيل دخول
                    </a>
                    <a href="#login_form_ajax" class="btn btn--accent register-popup">
                        <span>تسجيل حساب جديد</span>
                    </a> 
                </div>
            </div>
            <div class="collapse navbar-collapse" id="mainMenuResp">
                <div class="navbar-buttons  mbr-section-btn loginAuthMenu" style="margin-top: 16px;" v-show="isAuthenticated()"> 
                 
                    <a class="btn btn-login" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 100%;float: right;">  {{ (auth) ? auth.member_full_name : "" }} &nbsp;<i class="fa fa-user-circle"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <span class="dropdown-menu-arrow"></span>
                        <div class="row ml-0 mr-0">
                            <div class="col-md-7">
                                <h6 class="mb-0">{{(auth) ? auth.member_full_name : ""}}</h6>
                                <p class="mb-0" style="font-size: small;">رقم عضوية : {{(auth) ? auth.member_uid : ""}}</p>
                            </div>
                            <div class="col-md-5" align="left">
                                <img src="../../assets/rtl/images/efad-logo.png" class="custom-fav-img">
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile?#tab1" class="dropdown-item" id="tab1">
                            بياناتي
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile?#tab2" class="dropdown-item" id="tab2">
                            الحجوزات
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/profile?#tab3" class="dropdown-item" id="tab3">
                            الدفع السريع
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item logoutBtn" href="#" v-on:click='logout'>تسجيل خروج</a>
                    </div>                                      
                    <!-- <a href="<?= site_url('memberships/subscribe') ?>" class="btn" style="background-color: #eb3f31; color: #fff;margin-right: 51px;width: 62%;font-size: 12px;">
                        <span><span>مميزات العضوية</span></span>
                    </a> -->
                </div>
                <div class="navbar-buttons  mbr-section-btn nonAuthMenu" v-show="!isAuthenticated()"> 
                    <a id="top-login-button2" href="#login_form_ajax" class="mr-2 login-link" style="width: 100%;font-size: 12px;float: right;">
                    <i class="fa fa-user-circle"></i>
                    </a>
                    <!-- <a href="#login_form_ajax" class="btn btn--accent register-popup" style="width: 50%;font-size: 9px;margin-top: 29px;">
                        <span>تسجيل حساب جديد</span>
                    </a>  -->
                </div>
            </div>
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger"> <span></span> <span></span> <span></span> <span></span> </div>
            </button> -->
        </div>
    </nav>
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
                auth: JSON.parse(localStorage.getItem('auth'))
            };
        },
        computed: {},
        created() {
            const component = this;

            this.$bus.$on('success-login', function(data){
                component.auth = JSON.parse(localStorage.getItem('auth'))
            });   
        },
        mounted() {
            $('body').bind('beforeunload',function(){
                localStorage.removeItem('auth');
                this.auth = null;
            });

            $(document).ready(function(){
                $('#top-login-button2').fancybox();

                $('body').on('click', '#top-login-button2', function(){
                    $('#login').show();
                    $('#forgotpassword').hide();
                    $('#register').hide();
                });

                $('body').on('click', '#top-login-button', function(){
                    $('#login').show();
                    $('#forgotpassword').hide();
                    $('#register').hide();
                });

                $('.register-popup').fancybox();

                $('body').on('click', '.register-popup', function(){
                    $('#register').show();
                    $('#login').hide();
                    $('#forgotpassword').hide();
                });

                function tempAlert(msg,duration)
                {
                    var el = document.createElement("div");
                    el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
                    el.innerHTML = msg;
                    setTimeout(function(){
                        el.parentNode.removeChild(el);
                        localStorage.removeItem('auth');
                                this.auth = null;
                    },duration);
                    document.body.appendChild(el);
                }

                tempAlert("",5*60000);
            });
        },
        watch: {},
        methods: {
            isAuthenticated: function(){
                if (this.auth){
                    return true;
                }
                else{
                    return false;
                }
            },
            logout: function(){
                localStorage.removeItem('auth');
                this.auth = null;
                if (window.location.href.indexOf("bookings") > -1 || window.location.href.indexOf("profile") > -1 ) {
                   window.location = "/";
                }
            }
        },
    };
</script>
