<template>
	<section class="main__info info">
		<article class="article" v-for="article in articles" :key="article.title">
			<h2>{{ article.title }}</h2>
			<p>{{ article.text }}</p>
		</article>
	</section>
</template>

<script setup>
const articles = [
	{
		title: "Library essence",
		text: "Vue.js Drag and Drop is a simple, ready-to-use solution for adding drag-and-drop functionality to your web application. You can easily integrate it by simply copying and pasting our pre-built components."
	},
	{
		title: "User-friendly experience",
		text: "Add dragging functionality to your Vue.js project with just a few lines of code. Our Drag and Drop feature is straightforward and intuitive."
	},
	{
		title: "No extra installations",
		text: "With Vue.js Drag and Drop, there's no hassle of additional dependencies. Easily integrate our components into your project and enjoy seamless element dragging."
	},
]
</script>

<style scoped lang="scss">
.info {
	padding: 40px 30px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 25px;
	@media (max-width: 920px) {
		gap: 15px;
		padding: 25px 0;
	}
}
.article {
	max-width: 260px;
	background: #242424;
	padding: 18px;
	border-radius: 8px;
	transition: all 0.3s ease 0s;
	&:hover {
		background: var(--base-green);
		p {
			color: var(--base-white);
		}
	}
	h2 {
		color: var(--base-white);
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 15px;
	}
	p {
		color: #979797;
		line-height: 1.5;
	}
}

</style>