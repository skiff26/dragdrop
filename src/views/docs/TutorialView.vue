<template>
  <section class="main__article article">
    <h1 class="article__title">Tutorial</h1>
    <iframe
      width="100%"
      height="56.25%"
      src="https://www.youtube.com/embed/NfteKvQ943s?si=_QPAvoLp5EyOPWDF"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
</template>

<style lang="scss" scoped>
.article {
  iframe {
    width: 560px;
    height: 315px;

    @media (max-width: 630px) {
      width: 100%;
      height: 270px;
    }

    @media (max-width: 470px) {
      height: 230px;
    }
  }
}
</style>
