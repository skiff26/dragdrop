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
		text: "Vue.js Drag and Drop - an effortless solution to implement interactive element dragging in your web application. Simply copy and paste the code without the need for any additional installations."
	},
	{
		title: "User-friendly experience",
		text: "Add dragging functionality to your Vue.js project with just a few lines of code. Our Drag and Drop feature is straightforward and intuitive."
	},
	{
		title: "No extra installations",
		text: "With Vue.js Drag and Drop, there's no hassle of additional dependencies. Easily integrate our library into your project and enjoy seamless element dragging."
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
		background: #42b883;
		p {
			color: #ffffffde;
		}
	}
	h2 {
		color: #ffffffde;
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