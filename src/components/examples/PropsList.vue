<template>
	<div class="info">
		<ul><strong>{{ emit ? 'Emits:' : 'Props:' }}</strong> 
			<li v-for="item in list" :key="item.name">
				<p><strong>{{ item.name }}:</strong> {{ item.text }}</p>
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	list: {
		type: Array,
		required: true
	},
	emit: {
		type: Boolean,
		default: false
	}
})
</script>

<style lang="scss" scoped>
.info {
	margin-bottom: 20px;
	ul {
		& > strong {
			display: inline-block;
			margin-bottom: 10px;
		}
		li {
			display: flex;
			align-items: center;
			margin-left: 15px;
			@media (max-width: 768px) {
				margin-left: 5px;
			}
			&:not(:last-child) {
				margin-bottom: 10px;
			}
			p {
				line-height: 1.3;
				strong {
					display: inline-block;
					margin-right: 5px;
					border-radius: 8px;
					background-color: var(--c-bg-card);
					transition: background-color 0.3s ease;
					padding: 8px;
					color: var(--base-grey);
					@media (max-width: 600px) {
						margin-bottom: 5px;
					}
				}
			}
		}
	}
}	
</style>