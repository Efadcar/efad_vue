<template>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top sb-navbar nav-new">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img class="logo" src="/assets/rtl/images/latest-logo.png" alt="Efad Logo" />
            </router-link>
            <div class="collapse navbar-collapse" id="mainMenu">
                <div class="navbar-buttons  mbr-section-btn ml-auto loginAuthMenu"> 
                 
                    <a class="btn btn-login" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-left: 5px;">
                         Mohamed Rezk <i class="fa fa-user-circle"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <span class="dropdown-menu-arrow"></span>
                        <div class="row ml-0 mr-0">
                            <div class="col-md-7">
                                <h6 class="mb-0">Mohamed Rezk</h6>
                                <p class="mb-0" style="font-size: small;">رقم عضوية : </p>
                            </div>
                            <div class="col-md-5" align="left">
                                <img src="../../assets/rtl/images/favicon.png" class="custom-fav-img">
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<?= site_url('members/profile') ?>#tab1">بياناتي</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<?= site_url('members/profile') ?>#tab2">اﻹشتراكات</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<?= site_url('members/profile') ?>#tab3">
                            العضوية
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<?= site_url('members/logout') ?>">تسجيل خروج</a>
                    </div>                                      
                    <a href="<?= site_url('memberships/subscribe') ?>" class="btn" style="background-color: #eb3f31; color: #fff; ">
                        <span><span>مميزات العضوية</span></span>
                    </a>
                </div>
                <div class="navbar-buttons  mbr-section-btn  ml-auto nonAuthMenu"> 
                    <a id="top-login-button" href="#login_form_ajax" class="mr-2 login-link">
                    تسجيل دخول
                    </a>
                    <a href="#" class="btn btn--accent">
                    <span><span style="padding: 0px 20px;">اشتراك العضوية</span></span>
                    </a> 
                </div>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger"> <span></span> <span></span> <span></span> <span></span> </div>
            </button>
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