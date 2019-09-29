<template>
    <div class="product_list" data-ref="product_list" style="margin: 0 7px 0 26px;">
        <div v-if="!results.status" class="carListItemResponse row" style="width:100%;">
            <div class="col-lg-4 col-md-4"></div>
            <div class="col-lg-4 col-md-4">
                <h5>{{ results.message }}</h5>
            </div>
        </div>
        <div v-else>
            <div class="row carListBE">
                <car v-for="car in results.result" :car="car" :price_period="price_period" :book_period="book_period"></car>
            </div>
            <div v-if="results.num_rows > 15" class="col-lg-12">
                <ul class="pagin">
                    <input type="hidden" name="pag_end" id="pag_end">
                    <li v-on:click="prePage()"><i class="fas fa-chevron-right float-left"><a href="#"></a></i></li>
                    <div class="text-center paginationDrawResponse">
                        <router-link :to="'?offset=' + page" v-for="page in buildArray(Math.ceil(results.num_rows / 15))">
                            <li v-on:click="changePage(page)" class="items updateSearchContent" :value="page" :class="{ 'active': page == offset }">
                                {{ page + 1 }}
                            </li>
                        </router-link>
                    </div>
                    <input type="hidden" class="paginationValue" value="0">
                    <li v-on:click="nextPage()"><i class="fas fa-chevron-left float-right"><a href="#"></a></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
   // Import plugins if any

   // Import custom components if any
   import Car from "./Car.vue";

   // Component local properties if any

   // component export
   export default {
        components: {
            Car,
        },
        props: {
            results: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            price_period: {
                type: String,
                default: function () {
                    return "day";
                }
            },
            offset: {
                type: Number,
                default: function () {
                    return 0;
                }
            },
            book_period: {
                type: [String, Number],
                default: function () {
                    return "";
                }
            }
        },
        data() {
            return {
                cars: this.results.result
            };
        },
        computed: {
            maxOffest: function () {
                // `this` points to the vm instance
                return Math.floor(this.results.num_rows / 15);
            }
        },
        created() {},
        mounted() {},
        watch: {},
        methods: {
            buildArray: function(len){
                let output = [];

                for (let i = 0; i < len; i++) {
                    output.push(i);
                }

                return output;
            },
            changePage: function(page){
                let data = {
                    key: "offset",
                    value: page,
                };

                this.$bus.$emit('filter_changed', data);
            },
            prePage: function(){
                if(this.offset > 0){
                    let data = {
                        key: "offset",
                        value: this.offset - 1,
                    };

                    this.$bus.$emit('filter_changed', data);
                    this.$router.push({ path: '/', query: { offset: data.value }});
                }
            },
            nextPage: function(){
                if(this.offset < this.maxOffest){
                    let data = {
                        key: "offset",
                        value: this.offset + 1,
                    };

                    this.$bus.$emit('filter_changed', data);
                    this.$router.push({ path: '/', query: { offset: data.value }});
                }
            }
        },
   }
</script>

<style>
    .paginationDrawResponse{
        display: flex !important;
        justify-content: center !important;
    }
</style>