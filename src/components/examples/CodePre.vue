<template>
  <div class="code">
    <pre>{{ data }}</pre>
    <pre v-if="data2">{{ data2 }}</pre>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  },
  data2: {
    type: Array
  }
})
</script>

<style lang="scss" scoped>
.code {
  max-width: 600px;
  padding: 30px;
  margin: 30px auto;
  background-color: var(--c-bg-card);
  transition: background-color 0.3s ease;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 15px auto;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    row-gap: 15px;
  }

  pre {
    text-align: left;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
}
</style>
