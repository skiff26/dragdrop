<template>
  <a class="view-code-button" target="_blank" :href="url">
    <BaseIcon name="github" wh="20" /> View code
  </a>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'

defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.view-code-button {
  padding: 12px 20px;
  border-radius: 8px;
  color: var(--c-text);
  font-weight: 600;
  background-color: var(--c-bg-card);
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    transition: all 0.3s ease 0s;
  }

  &:hover {
    background: var(--c-bg-btn-code-hover);

    svg {
      fill: var(--media-fill);
    }
  }
}
</style>