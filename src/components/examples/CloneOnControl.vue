<template>
	<div class="demo">
		<div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
			<h3>First list</h3>
			<div class="drag-el"
			 v-for="item in firstList" :key="item.id"
			draggable="true"
			@dragstart="startDrag($event, item, 1)"
			@drop.stop="onDropSort($event, item, 1)"
			@dragover.prevent="onOver($event)"
			@dragleave.prevent="onLeave($event)"
			@dragenter.prevent
			 >
			 {{ item.title }} id: {{ item.id }}
			</div>
		</div>
		<div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
			<h3>Second list</h3>
			<div class="drag-el" 
			v-for="item in secondList" :key="item.id"
			draggable="true"
			@dragstart="startDrag($event, item, 2)"
			@drop.stop="onDropSort($event, item, 2)"
			@dragover.prevent="onOver($event)"
			@dragleave.prevent="onLeave($event)"
			@dragenter.prevent
			>
			{{ item.title }} id: {{ item.id }}
			</div>
		</div>
	</div>
</template>

<script setup>
const { firstList, secondList } = defineProps({
	firstList: {
		type: Array,
		required: true
	},
	secondList: {
		type: Array,
		required: true
	}
})

const startDrag = (event, item, list) => {
	event.dataTransfer.dropEffect = 'move'
	event.dataTransfer.effectAllowed = 'move'
	event.dataTransfer.setData('itemId', item.id)
	event.dataTransfer.setData('itemList', list)
}

const onOver = (event) => event.target.style.border = "1px solid #33a06f"
const onLeave = (event) => event.target.style.border = "1px solid #363636"

const generateId = (arr) => arr.length ? Math.max(...arr.map(item => item.id)) + 1 : 0
const getItemPosition = (arr, itemId) => arr.findIndex((item) => item.id == itemId)

const getItemById = (event, list) => {
	const itemId = +event.dataTransfer.getData('itemId')
	const item = list === 1 ? firstList.find((item) => item.id == itemId) : secondList.find((item) => item.id == itemId)
	return { item, itemId }
}

const moveItem = (from, to, itemPosition, droppedItemPosition, item) => {
	from.splice(itemPosition, 1)
	to.splice(droppedItemPosition, 0, {...item, id: generateId(to)})
}

const changeList = (event, list, droppedItem, listNumber) => {
	const { item, itemId } = listNumber === 1 ? getItemById(event, 1) : getItemById(event)
	const itemPosition = getItemPosition(list, itemId)
	const droppedItemPosition = getItemPosition(list, droppedItem.id)
	list.splice(itemPosition, 1)
	list.splice(droppedItemPosition, 0, item)
}

const onDropSort = (event, droppedItem, list) => {
	onLeave(event)
	const itemList = +event.dataTransfer.getData('itemList')
	const { item, itemId } = getItemById(event, itemList)

	const itemPosition = getItemPosition(itemList === 1 ? firstList : secondList, itemId)
	const droppedItemPosition = getItemPosition(list === 1 ? firstList : secondList, droppedItem.id)

	if (itemList === 1 && list === 2) {
		moveItem(firstList, secondList, itemPosition, droppedItemPosition, item)
		return
	}

	if (itemList === 2 && list === 1) {
		moveItem(secondList, firstList, itemPosition, droppedItemPosition, item)
		return
	}

	if (list === 1) changeList(event, firstList, droppedItem, list) 
	else changeList(event, secondList, droppedItem, list)
}

const mutationArray = (from, to, item, itemId) => {
	const itemPosition = getItemPosition(from, itemId)
	from.splice(itemPosition, 1)
	to.push({ id: generateId(to), title: item.title })
}

const onDrop = (event, list) => {
	const itemList = +event.dataTransfer.getData('itemList')
	const { item, itemId } = getItemById(event, itemList)
	if (itemList === 1 && list === 2) {
		mutationArray(firstList, secondList, item, itemId)
	} else if (itemList === 2 && list === 1) {
		mutationArray(secondList, firstList, item, itemId)
	}
}
</script>

<style lang="scss" scoped>
.demo {
	max-width: 600px;
	padding: 30px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
	background-color: #242424;
	color: #ffffffde;
	gap: 30px;
	border-radius: 8px;
	@media (max-width: 768px) {
		padding: 15px;
		gap: 15px;
		margin: 15px auto;
	}
	@media (max-width: 400px) {
		flex-direction: column;
	}
}
.drop-zone {
	flex: 1 1 50%;
	padding: 15px;
	border: 1px solid #363636;
	border-radius: 8px;
	h3 {
		font-size: 18px;
		margin-bottom: 15px;
	}
}
.drag-el {
	padding: 10px 15px;
	background-color: #363636;
	border: 1px solid #363636;
	border-radius: 8px;
	cursor: grab;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
}
</style>