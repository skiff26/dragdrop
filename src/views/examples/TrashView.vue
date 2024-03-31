<template>
  <section class="main__example example">
    <h1 class="example__title">Trash</h1>
    <Trash :items="items" />
    <CodePre :items="items" />
    <PropsList :list="propsList" />
    <ButtonsList
      link="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Trash.vue"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Trash from '@/components/examples/Trash.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropsList from '@/components/examples/PropsList.vue'
import ButtonsList from '@/components/examples/ButtonsList.vue'
const items = ref([
  { id: 0, title: 'Item A' },
  { id: 1, title: 'Item B' },
  { id: 2, title: 'Item C' }
])

const propsList = [{ name: 'items', text: 'Object[] - items for list.' }]
</script>
