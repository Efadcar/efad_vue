<template>
    <div>
        <section class="mt-8">
            <div class="container">
                <div class="row" style=" margin: 0 10px 0 10px; ">
                    <div class="col-12 ">
                        <div class="main-heading ">
                            <h1>الأسئلة المتكررة</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section >
            <div class="container">
                <div class="row custom-faq-res">
                    <div class="col">
                        <div class="cd-faq">
                            <div class="cd-faq-items custom-cd-faq-items">
                                <ul v-for="faq in details" class="cd-faq-group">
                                    <li class="cd-faq-title">
                                        <h2><span style="border-bottom: 3px solid #000;">{{faq.fc_name}}</span></h2>
                                    </li>
                                    
                                    <li v-for="item in faq.faqs" class="cd-faq-question"> 
                                        <a class="cd-faq-trigger trigger">{{ item.faq_question }}</a>
                                        <div style="padding: 0 24px 30px;" class="hide">
                                            <p v-html="item.faq_answer"></p>
                                        </div>
                                    </li>
                                </ul>
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

    // Component local properties if any

    // component export
    export default {
        components: {},
        props: {},
        data() {
            return {
                details: {},
            };
        },
        computed: {},
        created() {},
        mounted() {
            let component = this;
            $(document).ready(function(){
                $('body').on('click', '.trigger', function(){
                    $(this).next().show();
                    if ($(this).next().hasClass('hide')){
                        $(this).next().removeClass('hide');
                    }
                    else{
                        $(this).next().addClass('hide');
                    }
                });

                $.ajax({
                    url: 'https://www.efadcar.com/api/v1/faq',
                    type: 'GET',
                    success: function(data) {
                        console.log(data);
                        if(data.status == 1) {
                            component.details = data.result;

                        }
                        else {

                        }
                    },
                    error: function(data) {

                    },
                });
            });
        },
        watch: {},
        methods: {},
    }
</script>

<style>
    .hide{
        display: none !important;
    }
</style>