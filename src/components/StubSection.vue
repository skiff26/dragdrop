<template>
	<section class="stub" :class="{ withMargin: margin }">
		<h1>This page is under development.</h1>
	</section>
</template>

<script setup>
defineProps({
	margin: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped lang="scss">
.stub {
	padding: 30px;
	color: #e3e3e3;
	background: #242424;
	border-radius: 8px;
	&.withMargin {
		margin: 30px auto;
		margin: 20px 0px;
	}
	h1 {
		font-size: 30px;
	}
	@media (max-width: 670px) {
		padding: 20px;
		h1 {
			font-size: 23px;
			line-height: 1.3;
		}
	}
}
</style>