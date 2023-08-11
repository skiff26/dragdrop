<template>
	<div class="drop-zone">
		<div class="drag-el" 
			v-for="(item, index) in items" 
			:key="item.id"
			draggable="true"
			@dragenter.prevent
			@dragstart="startDrag($event, item)"
			@drop="onDrop($event, index)"
			@dragover.prevent="onOver($event)"
			@dragleave.prevent="onLeave($event)"
		>
			{{ item.title }}
		</div>
	</div>
</template>

<script setup>
const { items } = defineProps({
	items: {
		type: Array,
		requried: true
	}
})

const startDrag = (event, item) => {
	event.dataTransfer.dropEffect = 'move'
	event.dataTransfer.effectAllowed = 'move'
	event.dataTransfer.setData('itemId', item.id)
}

const onOver = (event) => event.target.style.border = "1px solid #33a06f"
const onLeave = (event) => event.target.style.border = "1px solid #363636"

const onDrop = (event, index) => {
	onLeave(event)
	const itemId = event.dataTransfer.getData('itemId')
	const item = items.find((item) => item.id == itemId)
	const itemPosition = items.findIndex((item) => item.id == itemId)
	items.splice(itemPosition, 1)
	items.splice(index, 0, item)
}
</script>

<style scoped lang="scss">
.drop-zone {
	max-width: 600px;
	margin: 0 auto;
	gap: 20px;
	background-color: #242424;
	padding: 30px;
	border-radius: 8px;
	@media (max-width: 768px) {
		padding: 15px;
	}
}
.drag-el {
	padding: 10px 15px;
	border: 1px solid #363636;
	background-color: #242424;
	cursor: grab;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
}
</style>