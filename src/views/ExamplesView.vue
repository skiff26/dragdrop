<template>
	<div class="main__container">
		<Sidebar :groups="groups" />
		<div class="main__content">
			<RouterView />
		</div>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const groups = [
	{
		title: 'One list',
		links: [
			{ name: 'Simple', link: 'simple' },
			{ name: 'Trello', link: 'trello' },
			{ name: 'Handle', link: 'handle' },
		]
	},
	{
		title: 'Two lists',
		links: [
			{ name: 'Clone', link: 'clone' },
			{ name: 'Clone on control', link: 'controlclone' },
		]
	},
	{
		title: 'Elements',
		links: [
			{ name: 'Trash', link: 'trash' },
			{ name: 'Avatar', link: 'avatar' },
			{ name: 'File upload', link: 'upload' }
		]
	}, 
]
</script>

<style lang="scss" scoped>
.main__container {
	margin: 30px auto;
	@media (max-width: 768px) {
		margin: 25px auto;
	}
}
.main__content {
	display: flex;
	justify-content: end;
	min-height: calc(955px - 55px - 88px - 60px);
	max-height: max-content;
	@media (max-width: 768px) {
		display: block;
	}
}

.example {
	flex: 0 1 calc(100% - 250px);
	padding: 30px;
	border: 1px solid var(--c-border);
	border-radius: 8px;
	@media (max-width: 840px) {
		flex: 0 1 calc(100% - 150px);
	}
	@media (max-width: 768px) {
		padding: 15px;
	}
}
</style>