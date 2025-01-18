<template>
  <section class="main__example example">
    <h1 class="example__title">Handle</h1>
    <Handle :items="items" />
    <CodePre :data="items" />
    <PropList :list="props" />
    <ButtonList>
      <ViewCodeButton url="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Handle.vue" />
    </ButtonList>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Handle from '@/components/examples/Handle.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropList from '@/components/examples/components/PropList.vue'
import ButtonList from '@/components/examples/components/ButtonList.vue'
import ViewCodeButton from '@/components/examples/components/ViewCodeButton.vue'

const items = ref([
  { id: 0, title: 'Item A' },
  { id: 1, title: 'Item B' },
  { id: 2, title: 'Item C' }
])

const props = [{ name: 'items', text: 'Object[] - items for list.' }]
</script>
