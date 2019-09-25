<template>
    <div>
        <section class="demo" style="margin-top: 9%;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>تفاصيل الفاتورة: </h5>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="print" style="float: left;color: white;background-color: #01355d;width: 30%;margin-bottom: 10px;border-radius: 10px;font-size: 20px;">طباعة</button>
                    </div>
                </div>
                <div class="border-invoice">
                    <div class="row margin-right">
                        <div class="col-md-3">
                            <h5>بيانات الفاتورة: </h5>
                            <div class=" margin-right-extra">
                                <p><span class="desc">تاريخ الحجز: </span>{{details.book_start_date}}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img class="logo-invoice" :src="details.car_obj.car_image" alt="Efad" />
                        </div>
                    </div>
                    <hr>
                    <div class="row margin-right">
                        <div class="col-md-6">
                            <h5>بيانات المشترك: </h5>
                            <div class=" margin-right-extra">
                                <p><span class="desc">الاسم: </span>{{auth.member_full_name}}</p>
                                <p><span class="desc">رقم الاشتراك: </span>{{auth.member_uid}}</p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row margin-right">
                        <div class="col-md-4">
                            <h5>بيانات الخدمة: </h5>
                            <div class=" margin-right-extra">
                                <p><span class="desc">نوع السيارة: </span>{{details.car_obj.car_brand_name}} {{details.car_obj.car_model_name}} {{details.car_obj.car_model_year}}</p>
                                <p><span class="desc">تاريخ بداية الاشتراك: </span>{{details.book_start_date}}</p>
                                <p><span class="desc">مدينة استلام السيارة: </span>{{ fotmatCityDelivery(details.delivery_city_uid) }}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <!-- <img src="http://localhost/efad/assets/files/albums/sm_928f1942e8199062bab73b8947773b3a.png" class="img-fluid custom-img"> -->
                            <div class="margin-top-extra">
                                <p><span class="desc">تاريخ نهاية الاشتراك: </span>{{details.book_end_date}}</p>
                                <p><span class="desc">مدينة تسليم السيارة: </span>{{ fotmatCityDelivery(details.delivery_city_uid) }}</p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row margin-right">
                        <div class="col-md-12">
                            <h5>بيانات الدفع: </h5>
                            <div class=" margin-right-extra">
                                <div  v-for="invoiceIndex in details.inovice">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <p><span class="desc">رقم الفاتورة: </span><br>{{invoiceIndex.invoice_uid}} </p>
                                        </div>
                                        <div class="col-md-2">
                                            <p><span class="desc">طريقة الدفع: </span><br>{{formatPaymentMethod(invoiceIndex.invoice_payment_method) }}</p>
                                        </div>
                                        <div class="col-md-2" v-if="invoiceIndex.invoice_payment_method == 'cash'"><p><span class="desc">رسوم قيمة الدفع النقدي: </span><br>150 ريال</p></div>
                                        <div class="col-md-3"><p><span class="desc">رسوم قيمة القيمة المضافة (5%): </span><br>{{invoiceIndex.invoice_tax_total}} ريال</p></div>
                                        <div class="col-md-2"><p><span class="desc">مبلغ الحجز: </span><br>{{invoiceIndex.invoice_total_fees}} ريال</p></div>
                                        <div class="col-md-3">
                                            <p><span class="desc">اجمالي الفاتورة: </span><br>{{ invoiceIndex.invoice_total_fees_after_tax}} ريال</p>
                                            
                                        </div>
                                    </div>
                                
                                    <hr>
                                </div>
                                <p class="total-all">المبلغ الاجمالي: {{totalParam}} ريال</p>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // Import plugins if any

    // Import custom components if any
    require('../../assets/global/plugins/printPlugin/js/printThis.js');
    // Component local properties if any

    // component export
    export default {
        components: {},
        props: {},
        data() {
            return {
                auth: JSON.parse(localStorage.getItem('auth')),
                details: [],
                totalParam: this.$route.query.total,
            };
        },
        computed: {},
        created() {},
        mounted() {
            let component = this;
            document.title = "إفاد | تفاصيل الفاتورة";
            $(document).ready(function(){
                let auth = JSON.parse(localStorage.getItem('auth'));
                $.ajax({
                    url: 'https://www.efadcar.com/api/v1/booking',
                    type: 'POST',
                    data: {
                        book_uid: component.$route.params.id,
                    },
                    beforeSend: function(xhr){xhr.setRequestHeader('token', auth.token);},
                    success: function(data) {
                        console.log(data);
                        if(data.status == 1) {
                            component.details = data.result[0];

                        }
                        else {

                        }
                    },
                    error: function(data) {

                    },
                });

                $('body').on('click', '.print', function(){
                    $('.demo').printThis({
                        importCSS: true,
                        header: null,
                        footer: null,
                        footer: $('.hidden-print-header-content'),
                        removeInline: true,
                    });
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
            formatPaymentMethod: function(method){
                if(method == "visa"){
                    return "دفع الكتروني";
                }
                else if (method == "cash"){
                    return "دفع نقدي";
                }
                else if (method == "transfer"){
                    return "تحويل بنكي";
                }
            },
            calculateInvoiceTotal: function(total, method){
                if (method == "cash"){
                    return total + 150;
                }
                else {
                    return total;
                }
            },
        },
    }
</script>


<style type="text/css">


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
        margin-top: 69px;
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
        border: 1px solid #147cb126;
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
</style>