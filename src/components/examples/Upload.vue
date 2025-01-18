<template>
  <div class="demo">
    <label for="upload" class="drop-zone">
      <div class="drop-zone__label">File upload</div>
      <div
        class="drop-zone__field"
        :class="{ withFiles: data.length, error: error }"
        @drop.prevent="fileUpload"
        @dragenter.prevent
        @dragover.prevent
      >
        <input ref="fileInputRef" type="file" id="upload" @change="fileUpload" />
        <div class="files" v-if="data.length">
          <div class="file" v-for="file in data" :key="file.name" @click.prevent.stop="deleteFile(file)">
            <ul>
              <li><strong>Name: </strong>{{ file.name }}</li>
              <li><strong>Size: </strong>{{ sizeToMb(file.size) + 'MB' }}</li>
              <li><strong>Type: </strong>{{ file.type }}</li>
            </ul>
          </div>
        </div>
        <p v-else>Drag and drop or <span>Browse file</span></p>
      </div>
    </label>
    <p class="error-message" v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['changeData'])
const { collection, maxSize, image, pdf } = defineProps({
  collection: {
    type: Number,
    default: 1
  },
  maxSize: {
    type: Number,
    default: 5
  },
  image: {
    type: Boolean,
    default: false
  },
  pdf: {
    type: Boolean,
    default: false
  }
})

const data = ref([])
const fileInputRef = ref(null)
const error = ref('')

const sizeToMb = (size) => Math.max(0.01, (size / (1024 * 1024)).toFixed(2))

const fileUpload = (event) => {
  error.value = ''
  const file =
    event.target?.files?.length > 0
      ? event.target.files[0]
      : event?.dataTransfer?.files[0]

  if (file === undefined) return

  if (image && !['image/jpeg', 'image/png'].includes(file.type)) {
    error.value = 'Incorrect image format.'
    return
  }
  if (pdf && !['application/pdf'].includes(file.type)) {
    error.value = 'Format must be .pdf'
    return
  }

  if (sizeToMb(file.size) > maxSize) {
    error.value = 'Maximum size is 5MB.'
    return
  }

  if (
    data.value.findIndex((item) => item.name === file.name && item.type === file.type) !== -1
  ) {
    error.value = 'This file has already been uploaded.'
    return
  }

  if (data.value.length >= collection) {
    error.value = 'Maximum number of files reached ' + collection + '.'
    return
  }

  data.value.push(file)

  emit('changeData', data.value)
}

const deleteFile = (file) => {
  const filePosition = data.value.findIndex((item) => item.lastModified === file.lastModified)
  if (filePosition !== -1) {
    data.value.splice(filePosition, 1)
    emit('changeData', data.value)
    error.value = ''
  }

  if (fileInputRef.value) fileInputRef.value.value = ''
}
</script>

<style lang="scss" scoped>
.demo {
  max-width: 600px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  background-color: #242424;
  color: #ffffffde;
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
  cursor: pointer;
  width: 100%;

  &__label {
    margin-bottom: 10px;
  }

  &__field {
    width: 100%;
    min-height: 100px;
    border: 2px dashed rgb(228, 232, 240);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;

    &:hover {
      background-color: #313030;
    }

    &.withFiles {
      border: 2px dashed #42b883;
    }

    &.error {
      border: 2px dashed #f44336;
    }

    p {
      span {
        color: #2d64fa;
      }
    }
  }

  input {
    display: none;
  }
}

.files {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;

  @media (max-width: 390px) {
    gap: 5px;
    padding: 10px 5px;
  }
}

.file {
  font-size: 14px;
  line-height: 1.2;
  padding: 5px;
  background: #42b883;
  transition: all 0.3s ease 0s;
  border-radius: 8px;

  &:hover {
    background: #c40a0a;
  }
}

.error-message {
  margin-top: 10px;
  color: #f44336;
}
</style>
