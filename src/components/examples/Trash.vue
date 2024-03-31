<template>
  <div class="demo">
    <div class="drop-zone">
      <h3>List</h3>
      <div
        class="drag-el"
        v-for="item in items"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
        @drop="onDropSort($event, item)"
        @dragover.prevent="onOver($event)"
        @dragleave.prevent="onLeave($event)"
        @dragenter.prevent
      >
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone">
      <h3>Remove item</h3>
      <div
        class="trash"
        :class="{ over: overTrash }"
        @dragstart="startDrag($event)"
        @drop="onDrop($event)"
        @dragover.prevent="overTrash = true"
        @dragleave.prevent="overTrash = false"
        @dragenter.prevent
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 16 16"
          data-testid="trash"
        >
          <path
            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { items } = defineProps({
  items: {
    type: Array,
    requried: true
  }
})

const overTrash = ref(false)

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'copy'
  event.dataTransfer.effectAllowed = 'copy'
  event.dataTransfer.setData('itemId', item.id)
}

const onOver = event => event.target.classList.add('on-over')
const onLeave = event => event.target.classList.remove('on-over')

const onDropSort = (event, droppedItem) => {
  onLeave(event)
  const itemId = event.dataTransfer.getData('itemId')
  const item = items.find(item => item.id == itemId)
  const itemPosition = items.findIndex(item => item.id == itemId)
  const droppedItemPosition = items.findIndex(el => el.id == droppedItem.id)
  items.splice(itemPosition, 1)
  items.splice(droppedItemPosition, 0, item)
}

const onDrop = event => {
  overTrash.value = false
  const itemId = event.dataTransfer.getData('itemId')
  const itemPosition = items.findIndex(item => item.id == itemId)
  items.splice(itemPosition, 1)
}
</script>

<style lang="scss" scoped>
.demo {
  max-width: 600px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  background-color: var(--c-bg-card, #242424);
  color: var(--c-text, #ffffffde);
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
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }
}

.drag-el {
  padding: 10px 15px;
  background-color: var(--c-border, #363636);
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;
  cursor: grab;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.trash {
  background-color: var(--c-border, #363636);
  height: 100px;
  max-width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  transition: all 0.3s ease;
  margin: 20px auto;

  &:hover {
    background-color: var(--c-bg-btn, #2e2e2e);
  }

  &.over {
    background-color: rgb(184, 28, 28);
    color: white;
  }
}

.on-over {
  border-color: #33a06f;
}
</style>
