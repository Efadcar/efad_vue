<template>
    <div class="row">
        <div class="col-lg-12 col-xs-12">
            <i class="fa fa-filter custom-show-filters"></i>
            <input v-on:keyup.enter="performSearch" v-model="search_query" class="form-control inp-inp generalSearch" data-ref="input-search" type="search" placeholder="ابحث عن مواصفات سيارتك هنا: الماركة، الموديل، اللون، ناقل الحركة أو سنة الصنع .." aria-label="Search" style="">
            <i class="fas fa-search sear-inp"></i>
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
        props: {
        },
        data() {
            return {
                search_query: this.query,
            };
        },
        computed: {},
        created() {},
        mounted() {
            $(document).ready(function(){
                $('.custom-show-filters').click(function(){
                    $('.search-option').toggleClass('show');
                });
            });
        },
        watch: {
            search_query: function(newValue, oldValue){},
        },
        methods: {
            performSearch: function(){
                this.$bus.$emit('query_changed', this.search_query);
            },
        },
   }
</script>

<style>
</style>