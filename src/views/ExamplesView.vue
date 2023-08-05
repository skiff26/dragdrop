<template>
	<div class="main__container">
		<div class="main__content">
			<Sidebar :groups="groups" />
			<RouterView />
		</div>
	</div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const groups = [
	{
		title: 'Basic',
		links: [
			{ name: 'Simple', link: 'simple' },
			{ name: 'Trello', link: 'trello' },
			{ name: 'Avatar', link: 'avatar' },
			{ name: 'File upload', link: 'upload' }
		]
	}
]
</script>

<style lang="scss" scoped>
.main__content {
	margin: 30px auto;
	display: flex;
	min-height: calc(100vh - 55px - 88px - 60px);
	@media (max-width: 768px) {
		display: block;
		margin: 25px auto;
	}
}

.example {
	flex: 1 1 calc(100% - 250px);
	padding: 30px;
	border: 1px solid #363636;
	border-radius: 8px;
	@media (max-width: 768px) {
		padding: 15px;
	}
}
</style>