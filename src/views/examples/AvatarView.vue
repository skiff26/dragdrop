<template>
  <section class="main__example example">
    <h1 class="example__title">Avatar</h1>
    <Avatar
      @upload="uploadFile"
      @delete="data = ['Files must be in jpeg or png format.']"
    />
    <CodePre :data="data" />
    <PropList :list="props" />
    <PropList :list="emits" emit />
    <ButtonList>
      <ViewCodeButton url="https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Avatar.vue" />
    </ButtonList>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from '@/components/examples/Avatar.vue'
import CodePre from '@/components/examples/CodePre.vue'
import PropList from '@/components/examples/components/PropList.vue'
import ButtonList from '@/components/examples/components/ButtonList.vue'
import ViewCodeButton from '@/components/examples/components/ViewCodeButton.vue'

const data = ref(['Files must be in jpeg or png format.'])

const props = [
  {
    name: 'trash',
    text: 'Boolean - add trash button for delete image. Default = true.'
  }
]

const emits = [
  { name: 'uploadFile', text: 'Arguments: file.' },
  { name: 'delete', text: 'No arguments.' }
]

const uploadFile = (file) => {
  const copyFile = {
    name: file.name,
    size: file.size,
    type: file.type,
    date: file.lastModifiedDate
  }
  data.value[0] = copyFile
}
</script>
