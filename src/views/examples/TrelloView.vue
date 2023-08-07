<template>
	<section class="main__example example">
		<h1 class="example__title">Trello</h1>
		<Trello :items="items" :sort="true" />
		<CodePre :items="items" />
		<PropsList :list="propsList" />
		<ButtonsList link="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Trello.vue"/>  
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Trello from '@/components/examples/Trello.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropsList from '@/components/examples/PropsList.vue'
import ButtonsList from '@/components/examples/ButtonsList.vue'

const items = ref([
	{ id: 0, title: 'Item A', list: 1 },
	{ id: 1, title: 'Item B', list: 1 },
	{ id: 2, title: 'Item C', list: 1 },
	{ id: 3, title: 'Item D', list: 2 }
])

const propsList = [
	{ name: 'items', text: 'Object[] - items for list.' },
	{ name: 'sort', text: 'Boolean - enable / disable sorting as in a simple example.' }
]
</script>