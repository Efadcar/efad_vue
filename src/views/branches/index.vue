<template>
    <div>
        <section class="mt-10">
            <div class="container">
                <div class="row">
                    <div class="col-12 ">
                        <div class="main-heading ">
                            <h1>الفروع</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="branches_section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8 text-center">
                        <h3>متواجدون فى المدن التالية</h3>
                        <div class="row custom-align-branches">
                            <div class="col-sm-3 col-xs-12">
                                <div class="circle">
                                    <h3>جدة</h3>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="circle">
                                    <h3>المدينة</h3>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="circle">
                                    <h3>الدمام</h3>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="circle">
                                    <h3>الرياض</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 custom-margin-map">
                    </div>
                </div>
            </div>
        </section>
        <section role="map">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <img src="assets/rtl/images/ksa-locations.jpg" class="img-fluid " alt="efad Branches">
                    </div>
                </div>
            </div>
        </section>
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
        created() {
            document.title = 'إفاد | الفروع';
            $('html, body').animate({scrollTop:0}, 'slow');
        },
        mounted() {},
        watch: {},
        methods: {},
    }
</script>

<style>
</style>