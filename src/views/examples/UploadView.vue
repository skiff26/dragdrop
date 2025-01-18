<template>
  <section class="main__example example">
    <h1 class="example__title">Upload Files</h1>
    <Upload :collection="6" @changeData="changeData" />
    <CodePre :data="data" />
    <PropList :list="props" />
    <PropList :list="emits" emit />
    <ButtonList>
      <ViewCodeButton url="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Upload.vue" />
    </ButtonList>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Upload from '@/components/examples/Upload.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropList from '@/components/examples/components/PropList.vue'
import ButtonList from '@/components/examples/components/ButtonList.vue'
import ViewCodeButton from '@/components/examples/components/ViewCodeButton.vue'

const props = [
  { name: 'collection', text: 'Number | Default = 1, number of files.' },
  { name: 'maxSize', text: 'Number | Default = 5MB, maximum file size.' },
  {
    name: 'image',
    text: 'Boolend | Default = false, files must be in jpeg or png format.'
  },
  {
    name: 'pdf',
    text: 'Boolend | Default = false, file must be in pdf format.'
  }
]

const emits = [{ name: 'changeData', text: 'Arguments: file or files[].' }]

const data = ref([])

const changeData = (newData) => {
  data.value = newData.map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type
  }))
}
</script>
