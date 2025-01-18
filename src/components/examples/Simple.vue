<template>
  <div class="drop-zone">
    <div
      class="drag-el"
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

const onOver = (event) => event.target.classList.add('on-over')
const onLeave = (event) => event.target.classList.remove('on-over')

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
  background-color: var(--c-bg-card, #242424);
  color: var(--c-text, #ffffffde);
  padding: 30px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px;
  }
}

.drag-el {
  padding: 10px 15px;
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;
  background-color: var(--c-bg-card, #242424);
  transition: background-color 0.3s ease;
  cursor: grab;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.on-over {
  border-color: #33a06f;
}
</style>
