<template>
	<component v-bind:is="$route.meta.layout"></component>
</template>

<script>
	// Import layouts
	import AppLayout from './layouts/app/Index.vue';
	import ErrorLayout from './layouts/error/Index.vue';
	import GuestLayout from './layouts/guest/Index.vue';
	
	export default {
		name: 'App',
		components: {
			AppLayout,
			ErrorLayout,
			GuestLayout,
		},
	}
</script>
