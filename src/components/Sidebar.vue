<template>
  <aside class="main__aside aside">
    <div class="aside__group" v-for="group in groups" :key="group.title">
      <h2 class="aside__group-title">{{ group.title }}</h2>
      <nav class="aside__nav">
        <router-link
          :to="{ name: item.link }"
          :class="{ active: item.link === $route.name }"
          v-for="item in group.links"
          >
            {{ item.name }}
          </router-link
        >
      </nav>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  groups: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="scss">
.aside {
  position: fixed;
  top: 85px;
  width: 250px;
  height: 100%;
  overflow-y: auto;

  @media (max-height: 600px) and (min-width: 768px) {
    padding-bottom: 120px;
  }

  @media (max-width: 840px) {
    width: max-content;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 10px;
    padding-right: 0;
    margin-bottom: 20px;
  }

  &__group {
    @media (max-width: 312px) {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    @media (min-width: 769px) {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  &__group-title {
    color: var(--c-text);
    line-height: 20px;
    margin-bottom: 10px;
    font-weight: 500;

    @media (max-width: 768px) {
      margin-bottom: 7px;
    }
  }

  &__nav {
    a {
      display: block;
      color: var(--base-grey);
      font-weight: 500;
      line-height: 20px;
      font-size: 14px;
      transition: all 0.3s ease 0s;
      padding: 3px 0;

      &.active {
        color: var(--base-green);
      }

      @media (min-width: 425px) {
        &:not(.active) {
          &:hover {
            color: var(--c-text);
          }
        }
      }
    }
  }
}
</style>
