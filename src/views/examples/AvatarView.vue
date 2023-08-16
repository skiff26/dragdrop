<template>
	<section class="main__example example">
		<h1 class="example__title">Avatar</h1>
		<Avatar @upload="uploadFile" @delete="items = []"/>
		<CodePre :items="items" />
		<PropsList :list="propsList" />
		<PropsList :list="emitsList" emit />
		<ButtonsList link="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Avatar.vue"/>  
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from '@/components/examples/Avatar.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropsList from '@/components/examples/PropsList.vue'
import ButtonsList from '@/components/examples/ButtonsList.vue'

const items = ref([])

const propsList = [
	{ name: 'trash', text: 'Boolean - add trash for delete image. Default = true.' },
]

const emitsList = [
	{ name: 'uploadFile', text: 'Arguments: file.' },
	{ name: 'delete', text: 'No arguments.' },
]

const uploadFile = (file) => {
	const copyFile = {
		name: file.name,
		size: file.size,
		type: file.type,
		date: file.lastModifiedDate
	}
	items.value[0] = copyFile
}
</script>