<template>
  <div class="buttons">
    <a class="buttons__view-code" target="_blank" :href="link">
      <BaseIcon name="github" wh="20" />View code
    </a>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'

defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid var(--c-border);

  @media (max-width: 768px) {
    padding-top: 15px;
  }

  &__view-code {
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
}
</style>
