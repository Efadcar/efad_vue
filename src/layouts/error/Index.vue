<template>
	<div id="app">
		<page-header></page-header>

		<router-view/>

		<page-footer></page-footer>
	</div>
</template>

<script>
	// Import navigation components
	import PageHeader from './Header.vue';
	import PageFooter from './Footer.vue';

	export default {
		name: 'Layout',
		components: {
			PageHeader,
			PageFooter,
		},
	}
</script>