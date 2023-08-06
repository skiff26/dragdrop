<template>
	<section class="main__section section">
		<h1 class="section__title">Drag And Drop<br>Components for Vue.js</h1>
		<p class="section__description">Improve Your Web App with Seamless Drag and Drop Integration!</p>
		<div class="section__buttons">
			<router-link :to="{ name: 'examples' }"><span>Get Started</span> <BaseIcon name="rightArrowShort" color="#aac8e4" wh="20"/></router-link>
		</div>
	</section>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue';
</script>

<style scoped lang="scss">
.section {
	padding: 95px 30px;
	text-align: center;
	@media (max-width: 950px) {
		padding: 60px 30px;
	}
	@media (max-width: 680px) {
		padding: 40px 20px;
	}
	@media (max-width: 540px) {
		padding: 30px 15px;
	}
	@media (max-width: 452px) {
		padding: 25px 0;
	}
	&__title {
		font-size: 76px;
		line-height: 1.25;
		font-weight: 900;
		background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
		background-clip: text;
		-webkit-background-clip: text;
   	-webkit-text-fill-color: transparent;
		@media (max-width: 950px) {
			font-size: 60px;
		}
		@media (max-width: 680px) {
			font-size: 48px;
		}
		@media (max-width: 540px) {
			font-size: 40px;
		}
	}

	&__description {
		font-size: 22px;
		line-height: 1.5;
		color: #979797;
		margin: 24px auto 40px;
		@media (max-width: 950px) {
			margin: 18px auto 30px;
		}
		@media (max-width: 680px) {
			font-size: 20px;
			margin: 16px auto 20px;
		}
		@media (max-width: 540px) {
			margin: 14px auto 18px;
		}
	}

	&__buttons {
		display: flex;
		justify-content: center;
		a {
			color: #aac8e4;
			font-size: 16px;
			font-weight: 500;
			padding: 12px 38px 12px 22px;
			background-color: #2f2f2f;
			border-radius: 8px;
			transition: all 0.3s ease 0s;
			position: relative;
			svg {
				position: absolute;
				top: 10px;
				right: 15px;
				transition: all 0.2s ease 0s;
			}
			&:hover {
				background: #3a3a3a;
				svg {
					right: 12px;
				}
			}
		}
	}
}
</style>