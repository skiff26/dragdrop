<template>
	<div class="info">
		<ul><strong>Props:</strong> 
			<li v-for="item in list" :key="item.name"><span>{{ item.name }}:</span> {{ item.type }}</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	list: {
		type: Array,
		required: true
	}
})
</script>

<style lang="scss" scoped>
.info {
	margin-bottom: 20px;
	ul {
		strong {
			display: inline-block;
			color: var(--base-white); 
			margin-bottom: 10px;
		}
		li {
			margin-left: 15px;
			&:not(:last-child) {
				margin-bottom: 10px;
			}
			span {
				display: inline-block;
				margin-right: 5px;
				border-radius: 8px;
				background: #242424;
				padding: 8px;
				color: var(--base-grey);
			}
		}
	}
}	
</style>