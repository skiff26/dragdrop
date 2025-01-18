<template>
  <section class="main__example example">
    <h1 class="example__title">Clone on control</h1>
    <CloneOnControl :firstList="firstList" :secondList="secondList" />
    <CodePre :data="firstList" :data2="secondList" />
    <PropList :list="props" />
    <ButtonList>
      <ViewCodeButton url="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/CloneOnControl.vue" />
    </ButtonList>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CloneOnControl from '@/components/examples/CloneOnControl.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropList from '@/components/examples/components/PropList.vue'
import ButtonList from '@/components/examples/components/ButtonList.vue'
import ViewCodeButton from '@/components/examples/components/ViewCodeButton.vue'

const props = [
  { name: 'firstList', text: 'Object[] - items for 1 list.' },
  { name: 'secondList', text: 'Object[] - items for 2 list.' }
]

const firstList = ref([
  { id: 0, title: 'Item B' },
  { id: 1, title: 'Item C' },
  { id: 2, title: 'Item D' }
])

const secondList = ref([{ id: 0, title: 'Item A' }])
</script>
