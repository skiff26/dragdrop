<template>
  <section class="main__article article">
    <h1 class="article__title">Support</h1>
    <p>
      Encountering an issue or need assistance with our Vue.js drag and drop
      library? We're here to help you navigate through any challenges you might
      face.
    </p>
    <ol style="list-style: decimal">
      <li>
        <strong>Documentation:</strong> Before reaching out, make sure to
        explore our comprehensive documentation. It covers a wide range of
        topics, from installation to advanced usage, and could offer solutions
        to common questions.
      </li>
      <li>
        <strong>Frequently Asked Questions (FAQ):</strong> Check our
        <router-link :to="{ name: 'FAQ' }">FAQ section</router-link> where we've
        addressed some of the most common queries users have encountered. You
        might find a quick solution to your concern here.
      </li>
      <li>
        <strong>Contact Us:</strong>
        If you can't find the answer you're looking for, don't hesitate to get
        in touch with our support team. We're available to assist you via email
        and Telegram.
        <ol>
          <li class="small">
            <strong>Email:</strong> Drop us an email at
            <a href="mailto:artem.kulchitsky@gmail.com"
              >artem.kulchitsky@gmail.com</a
            >. Our team will review your query and get back to you as soon as
            possible.
          </li>
          <li class="small">
            <strong>Telegram:</strong> Feel free to reach out to my personal
            Telegram account
            <a href="https://t.me/id00909" target="_blank">@id00909</a> for any
            support-related inquiries. Whether you have questions, feedback, or
            need help with troubleshooting, I'm here to assist you.
          </li>
        </ol>
      </li>
      <li>
        <strong>Reporting Issues</strong> If you've come across a bug or
        technical glitch, please report it to us. You can submit an issue on our
        GitHub
        <a href="https://github.com/skiff26/dragdrop" target="_blank"
          >repository</a
        >, providing as much detail as possible. This will help us understand
        the problem and work towards a solution faster.
      </li>
    </ol>
    <h2>In Closing</h2>
    <p>
      Remember, your feedback is invaluable to us 😊. It helps us enhance the
      user experience and continually improve our library. We appreciate your
      support and are dedicated to making your journey with our Vue.js drag and
      drop components as smooth as possible.
    </p>
  </section>
</template>
