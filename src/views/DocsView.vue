<template>
	<div class="main__container">
		<div class="main__content">
			<Sidebar :groups="groups" />
			<RouterView />
		</div>
	</div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'

const groups = [
	{
		title: 'Getting Started',
		links: [
			{ name: 'Introduction', link: 'introduction' },
			{ name: 'Quick Start', link: 'start' },
		]
	},
	{
		title: 'Essentials',
		links: [
			{ name: 'Tutorial', link: 'tutorial' },
			{ name: 'Props and Emits', link: 'PropsAndEmits' },
		]
	},
	{
		title: 'Other',
		links: [
			{ name: 'Support', link: 'support' },
		]
	}, 
]
</script>

<style lang="scss" scoped>
.main__content {
	margin: 30px auto;
	display: flex;
	min-height: calc(955px - 55px - 88px - 60px);
	max-height: max-content;
	@media (max-width: 768px) {
		display: block;
		margin: 25px auto;
	}
}

.article {
	flex: 1 1 calc(100% - 250px);
	padding: 30px;
	border: 1px solid #363636;
	border-radius: 8px;
	@media (max-width: 768px) {
		padding: 15px;
	}
}
</style>