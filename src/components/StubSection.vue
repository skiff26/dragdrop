<template>
  <section class="stub" :class="{ 'with-margin': margin }">
    <h1>This page is under development.</h1>
  </section>
</template>

<script setup>
defineProps({
  margin: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.stub {
  padding: 30px;
  color: var(--c-text);
  background-color: var(--c-bg-card);
  border-radius: 8px;

  &.with-margin {
    margin: 30px auto;

    @media (max-width: 670px) {
      margin: 20px 0px;
    }
  }

  h1 {
    font-size: 30px;
  }

  @media (max-width: 670px) {
    padding: 20px;

    h1 {
      font-size: 23px;
      line-height: 1.3;
    }
  }
}
</style>
