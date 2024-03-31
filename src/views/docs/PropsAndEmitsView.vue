<template>
  <section class="main__article article">
    <h1 class="article__title">Props and Emits</h1>
    <p>
      Mastering props and emits in the drag and drop elements library for Vue.js
      is pivotal for creating captivating user interfaces. Props enable you to
      fine-tune component attributes, while emits foster smooth communication
      between child and parent components. The library's documentation holds the
      specifics of the props and emits available to you, so be sure to explore
      it for a deeper understanding.
    </p>
    <br />
    <p>
      Remember, these concepts are the heart of interactive drag and drop
      interfaces, elevating user experience to new heights.
    </p>
    <h2>Each component has its own Props and Emits</h2>
    <p>
      You can read more about Props and Emits for each component on the page of
      that component.
    </p>
    <router-link :to="{ name: 'upload' }">Go to components</router-link>
    <br />
    <img
      src="/docs/props-emits.png"
      alt="Props and Emits example"
      loading="lazy"
    />
  </section>
</template>
