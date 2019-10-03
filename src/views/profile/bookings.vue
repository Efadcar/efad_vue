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

