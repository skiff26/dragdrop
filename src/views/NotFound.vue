<template>
  <div class="main__container">
    <section class="not-found">
      <h1 class="main__title">Page Not Found</h1>
      <p class="main__text">
        You found a dead link: <span>{{ $route.fullPath }}</span>
      </p>
      <br />
      <p class="main__redirect">
        Redirect to <router-link to="/">main</router-link> page.
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main {
  color: #e3e3e3;
  &__title {
    font-size: 38px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    font-weight: 600;
    margin-bottom: 40px;
    @media (max-width: 400px) {
      margin-bottom: 30px;
      font-size: 32px;
    }
  }

  &__text {
    span {
      color: #aac8e4;
    }
  }

  &__redirect {
    font-weight: 500;
    margin-bottom: 20px;
    a {
      transition: all 0.3s ease 0s;
      color: var(--base-green);
      &:hover {
        color: #42d392;
      }
    }
    @media (max-width: 400px) {
      margin-bottom: 10px;
    }
  }
}
.not-found {
  background: var(--c-bg-card);
  padding: 30px;
  border-radius: 8px;
  margin: 30px;
  @media (max-width: 440px) {
    margin: 20px 0px;
  }
}
</style>
