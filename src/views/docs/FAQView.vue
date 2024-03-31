<template>
  <section class="main__article article">
    <h1 class="article__title">FAQ</h1>
    <h2 class="small pt-0">How do I install this library?</h2>
    <p>
      Great news! Our Vue.js drag and drop library is designed to be incredibly
      easy to integrate into your project. You won't need to worry about any
      installations. Here's how you can get started:
      <router-link :to="{ name: 'start' }">Quick Start</router-link>.
    </p>
    <h2 class="small">
      Where can I find information about Props and Emits for a component?
    </h2>
    <p>
      Finding information about Props and Emits for our components is a breeze!
      We've designed our documentation to provide you with all the details you
      need. Here's where you can find this information:
      <router-link :to="{ name: 'PropsAndEmits' }">Props and Emits</router-link
      >.
    </p>
    <h2 class="small">How can I customize the appearance of a component?</h2>
    <p>
      To customize a component's appearance, navigate to the "style" section
      within the component, written in SCSS. This independent styling allows you
      to modify colors, sizes, and more. Edit the SCSS section or write CSS, and
      apply your changes to achieve the desired look while keeping your
      project's styling intact.
    </p>
    <h2 class="small">How can I add my own component to your library?</h2>
    <p>
      We're thrilled that you're interested in contributing your own component
      to our Vue.js drag and drop library! Adding your unique touch to our
      library can benefit the community and enhance the variety of options
      available. You can message me on my personal
      <a href="https://t.me/id00909" target="_blank">Telegram</a>,
      <a href="https://www.linkedin.com/in/akulchytskyi/" target="_blank"
        >LinkedIn</a
      >, or send an <a href="mailto:artem.kulchitsky@gmail.com">email</a>.
    </p>
    <h2 class="small">Didn't find an answer?</h2>
    <p>
      If you couldn't find the answer you were looking for, don't worry! Our
      <router-link :to="{ name: 'support' }">Support</router-link> page is here
      to assist you. You can find detailed information on how to get in touch
      with us and get the help you need.
    </p>
  </section>
</template>
