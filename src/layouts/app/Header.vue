<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top sb-navbar nav-new">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img class="logo" src="/assets/rtl/images/latest-logo.png" alt="Efad Logo" />
            </router-link>
            <div class="collapse navbar-collapse" id="mainMenu">
                <div class="navbar-buttons  mbr-section-btn  ml-auto"> 
                    <a id="top-login-button" href="#login_form_ajax" class="mr-2 login-link">
                    تسجيل دخول
                    </a>
                    <a href="#" class="btn btn--accent">
                    <span><span style="padding: 0px 20px;">اشترك الآن</span></span>
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