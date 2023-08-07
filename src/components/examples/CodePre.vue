<template>
	<div class="code">
		<pre>{{ items }}</pre>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
	required: true
})
</script>

<style lang="scss" scoped>
.code {
	max-width: 600px;
	padding: 30px;
	margin: 30px auto;
	background-color: #242424;
	border-radius: 8px;
	@media (max-width: 768px) {
		padding: 15px;
		margin: 15px auto;
	}
	pre {
		text-align: left;
		@media (max-width: 425px) {
			font-size: 14px;
		}
	}
}
</style>