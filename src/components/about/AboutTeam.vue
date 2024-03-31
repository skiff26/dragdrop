<template>
  <section class="team">
    <h2 class="team__title">Creator</h2>
    <PersonCard :team="team" />
  </section>
</template>

<script setup>
import PersonCard from '@/components/about/PersonCard.vue'

const team = [
  {
    img: 'creator',
    name: 'Artem Kulchytskyi',
    org: 'Vue.js Drag&Drop Library',
    details: {
      location: 'Warsaw, Poland',
      projects: [
        {
          name: 'vue-drag&drop',
          link: 'https://skiff26.github.io/dragdrop/'
        }
      ],
      languages: 'English • Russian • Ukrainian',
      website: 'https://skiff26.github.io/portfolio/'
    },
    media: {
      github: 'https://github.com/skiff26',
      linkedin: 'https://www.linkedin.com/in/akulchytskyi/'
    }
  }
]
</script>

<style scoped lang="scss">
.team {
  margin-top: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  &__title {
    color: var(--c-text);
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
  }
}
</style>
