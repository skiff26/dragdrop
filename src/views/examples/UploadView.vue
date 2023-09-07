<template>
	<section class="main__example example">
		<h1 class="example__title">Upload Files</h1>
		<Upload :collection="6" @changeData="changeData"/>
		<CodePre :items="items" />
		<PropsList :list="propsList" />
		<PropsList :list="emitsList" emit />
		<ButtonsList link="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Upload.vue"/>  
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Upload from '@/components/examples/Upload.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropsList from '@/components/examples/PropsList.vue'
import ButtonsList from '@/components/examples/ButtonsList.vue'

const propsList = [
	{ name: 'collection', text: 'Number | Default = 1, number of files.' },
	{ name: 'maxSize', text: 'Number | Default = 5MB, maximum file size.' },
	{ name: 'image', text: 'Boolend | Default = false, files must be in jpeg or png format.' },
	{ name: 'pdf', text: 'Boolend | Default = false, file must be in pdf format.' },
]

const emitsList = [
	{ name: 'changeData', text: 'Arguments: file or files[].' },
]

const items = ref([])

const changeData = (data) => {
	items.value = data.map(file => {
		return { 
			name: file.name,
			size: file.size,
			type: file.type
		}
	})
}
</script>