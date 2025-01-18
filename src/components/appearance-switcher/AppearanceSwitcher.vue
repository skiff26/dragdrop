<template>
  <button class="appearance-switcher" :class="{ light: !darkMode }" @click="changeTheme">
    <span>
      <MoonIcon v-if="darkMode" />
      <SunIcon v-else />
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MoonIcon from './icons/Moon.vue'
import SunIcon from './icons/Sun.vue'

const darkMode = ref(
  window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
)

const toggleDarkMode = (safeColorScheme) => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    if (safeColorScheme) localStorage.setItem('darkMode', true)
  } else {
    document.documentElement.classList.remove('dark')
    if (safeColorScheme) localStorage.setItem('darkMode', false)
  }
}

const changeTheme = () => {
  darkMode.value = !darkMode.value
  const safeColorScheme = true
  toggleDarkMode(safeColorScheme)
}

onMounted(() => {
  if (localStorage.getItem('darkMode') !== null) {
    darkMode.value = JSON.parse(localStorage.getItem('darkMode'))
  }
  toggleDarkMode()
})
</script>

<style scoped lang="scss">
.appearance-switcher {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid var(--c-border-switch);
  background-color: var(--c-bg-btn);
  cursor: pointer;
  user-select: none;
  transition:
    border-color 0.25s,
    background-color 0.25s;

  span {
    position: absolute;
    top: 1px;
    right: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--c-bg);
    transition:
      background-color 0.25s,
      transform 0.25s;
  }

  &.light {
    span {
      transform: translate(-18px);
    }
  }

  &:hover {
    border-color: var(--c-border-hover);
  }
}
</style>
