<template>
  <div class="buttons">
    <slot />
  </div>
</template>

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
}
</style>
