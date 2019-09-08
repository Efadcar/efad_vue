<template>
	<div id="app">
		<page-header></page-header>
		
		<login-modal></login-modal>

		<router-view/>

		<page-footer></page-footer>
	</div>
</template>

<script>
	// Import navigation components
	import PageHeader from './Header.vue';
	import LoginModal from './LoginModal.vue';
	import PageFooter from './Footer.vue';

	export default {
		name: 'Layout',
		components: {
			PageHeader,
			LoginModal,
			PageFooter,
		},
	}
</script>