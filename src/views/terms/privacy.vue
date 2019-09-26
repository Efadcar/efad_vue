<template>
    <div>
        <section class="mt-10">
            <div class="container-fluid">
                <div class="row" style=" margin: 0 10px 0 10px; ">
                    <div class="col-12 ">
                        <div class="main-heading ">
                            <h1 v-html="page_title"></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section >
            <div class="container-fluid">
                <div class="row" style=" margin: 0 10px 0 10px;">
                    <div class="col-sm-12">
                        <div v-html="page_html" class="article-body article" style="min-height: 28vh;">
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
                page_html: "",
                page_title: ""
            };
        },
        computed: {},
        created() {
            const component = this;
            document.title = 'إفاد | سياسة الخصوصية';
            $('html, body').animate({scrollTop:0}, 'slow');
            $.ajax({
                type: 'GET',
                url: 'https://www.efadcar.com/api/v1/page?link=privacy-policy',
                success:function(data){
                    component.page_html = data.result[0].page_text;
                    component.page_title = data.result[0].page_title;
                },
                error: function(data){
                }
            });
        },
        mounted() {},
        watch: {},
        methods: {},
    }
</script>

<style>
</style>