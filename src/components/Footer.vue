<template>
	<footer class="footer">
		<div class="footer__container">
			<p class="footer__vue">Official <a href="https://vuejs.org/" target="_blank">Vue.js</a> website</p>
			<p class="footer__copy">Copyright © 2023 <a href="https://www.linkedin.com/in/akulchytskyi/" target="_blank">Artem Kulchytskyi</a></p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	color: #979494;
	border-bottom: 1px solid var(--c-border);
	border-top: 1px solid var(--c-border);
	padding: 25px;
	text-align: center;
	max-height: 88px;
	@media (max-width: 425px) {
		font-size: 14px;
		padding: 23px;
	}
	a {
		transition: all 0.3s ease 0s;
		color: var(--c-f-link);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.2;
		line-height: 1.3;
		&:hover {
			color: #b6b2b2;
		}
	}
}
</style>