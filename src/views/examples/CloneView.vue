<template>
	<section class="main__example example">
		<h1 class="example__title">Clone</h1>
		<Clone :firstList="firstList" :secondList="secondList" />
		<CodePre :items="firstList" :items2="secondList" />
		<PropsList :list="propsList" />
		<ButtonsList link="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Clone.vue"/>  
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Clone from '@/components/examples/Clone.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropsList from '@/components/examples/PropsList.vue'
import ButtonsList from '@/components/examples/ButtonsList.vue'

const propsList = [
	{ name: 'firstList', text: 'Object[] - items for 1 list.' },
	{ name: 'secondList', text: 'Object[] - items for 2 list.' }
]

const firstList = ref([
	{ id: 0, title: 'Item A🙂'},
	{ id: 1, title: 'Item B✌️'},
	{ id: 2, title: 'Item C👍'},
])

const secondList = ref([
	{ id: 0, title: '2L: Item A'},
])

</script>