<template>
	<div class="drop-zone">
		<div class="drag-el" v-for="(item, index) in items" :key="item.id" draggable="false" @dragenter.prevent
			@dragstart="startDrag($event, item)" @drop="onDrop($event, index)" @dragover.prevent="onOver($event)"
			@dragleave.prevent="onLeave($event)">
			<h2>{{ item.title }}</h2>
			<p>Description</p>
			<svg aria-hidden="true" height="32" viewBox="0 0 16 16" width="32" fill="currentColor"
				@mousedown="mouseStart($event)" @mouseleave="mouseLeave($event)">
				<path
					d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z">
				</path>
			</svg>
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

const findDragEl = (el) => {
	while (el && !el.classList.contains('drag-el')) {
		el = el.parentElement
	}
	return el
}

const mouseLeave = (event) => {
	const dragEl = findDragEl(event.target)
	if (dragEl) dragEl.setAttribute('draggable', 'false')
}

const mouseStart = (event) => {
	const dragEl = findDragEl(event.target)
	if (dragEl) dragEl.setAttribute('draggable', 'true')
}

const startDrag = (event, item) => {
	event.dataTransfer.dropEffect = 'move'
	event.dataTransfer.effectAllowed = 'move'
	event.dataTransfer.setData('itemId', item.id)
}

const onOver = (event) => {
	const dragEl = findDragEl(event.target)
	if (dragEl) {
		dragEl.classList.add('on-over')
	}
}

const onLeave = (event) => {
	const dragEl = findDragEl(event.target)
	if (dragEl) {
		dragEl.classList.remove('on-over')
	}
}

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
	background-color: var(--c-bg-card, #242424);
	color: var(--c-text, #ffffffde);
	padding: 30px;
	border-radius: 8px;
	display: flex;
	flex-wrap: wrap;
	transition: background-color 0.3s ease;

	@media (max-width: 768px) {
		padding: 15px;
	}
}

.drag-el {
	flex: 1 1 auto;
	padding: 16px;
	border: 1px solid var(--c-border, #363636);
	background-color: var(--c-bg-card, #242424);
	border-radius: 7px;
	position: relative;
	transition: background-color 0.3s ease;
	user-select: none;

	p {
		margin-top: 8px;
		font-size: 14px;
	}

	svg {
		padding: 6px;
		position: absolute;
		top: 0px;
		right: 0px;
		cursor: grab;
	}
}

.on-over {
	border-color: #33a06f;
}
</style>