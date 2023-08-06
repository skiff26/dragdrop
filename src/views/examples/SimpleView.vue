<template>
	<section class="main__example example">
		<h1 class="example__title">Simple</h1>
		<div class="demo">
			<Simple :items="items" />
		</div>
		<div class="code">
			<pre>{{ items }}</pre>
		</div>
		<PropsList :list="propsList" />
		<ButtonsList link="#none"/>  
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Simple from '@/components/examples/Simple.vue';
import PropsList from '@/components/examples/PropsList.vue';
import ButtonsList from '@/components/examples/ButtonsList.vue';
const items = ref([
	{ id: 0, title: 'Item A'},
	{ id: 1, title: 'Item B'},
	{ id: 2, title: 'Item C'}
])

const propsList = [
	{ name: 'items', type: 'Object[]' }
]
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
	}
}
</style>