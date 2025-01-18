<template>
  <div class="demo">
    <div class="drop-zone">
      <h3>First list</h3>
      <div
        class="drag-el"
        v-for="item in firstList"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item, 1)"
        @drop="onDropSort($event, item, 1)"
        @dragover.prevent="onOver($event)"
        @dragleave.prevent="onLeave($event)"
        @dragenter.prevent
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drop-zone"
      @drop="onDrop($event)"
      @dragenter.prevent
      @dragover.prevent
    >
      <h3>Second list</h3>
      <div
        class="drag-el"
        v-for="item in secondList"
        :key="item.id"
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
  event.dataTransfer.dropEffect = 'copy'
  event.dataTransfer.effectAllowed = 'copy'
  event.dataTransfer.setData('itemId', item.id)

  if (list) event.dataTransfer.setData('itemList', list)
}

const getItemById = (event, list) => {
  const itemId = event.dataTransfer.getData('itemId')
  const item =
    list === 1
      ? firstList.find(item => item.id == itemId)
      : secondList.find(item => item.id == itemId)

  return { item, itemId }
}

const changeList = (event, list, droppedItem, listNumber) => {
  const { item, itemId } =
    listNumber === 1 ? getItemById(event, 1) : getItemById(event)
  const itemPosition = list.findIndex(item => item.id == itemId)
  const droppedItemPosition = list.findIndex(item => item.id == droppedItem.id)
  list.splice(itemPosition, 1)
  list.splice(droppedItemPosition, 0, item)
}

const onOver = (event) => event.target.classList.add('on-over')
const onLeave = (event) => event.target.classList.remove('on-over')

const onDropSort = (event, droppedItem, list) => {
  onLeave(event)
  if (event.dataTransfer.getData('itemList') == 1 && list === 2) {
    const { item } = getItemById(event, 1)
    const newItem = { id: secondList.length, title: 'Clone ' + item.title }
    secondList.push(newItem)
    const itemPosition = secondList.findIndex((item) => newItem.id == item.id)
    const droppedItemPosition = secondList.findIndex((item) => item.id == droppedItem.id)
    secondList.splice(itemPosition, 1)
    secondList.splice(droppedItemPosition, 0, newItem)
    return
  }

  if (list === 1) changeList(event, firstList, droppedItem, list)
  else changeList(event, secondList, droppedItem, list)
}

const onDrop = (event) => {
  const { item } = getItemById(event, 1)
  const itemList = event.dataTransfer.getData('itemList')
  if (itemList != 2) {
    secondList.push({ id: secondList.length, title: 'Clone: ' + item.title })
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

.on-over {
  border-color: #33a06f;
}
</style>
