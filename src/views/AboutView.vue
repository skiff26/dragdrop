<template>
	<div class="main__container">
		<h1 class="main__title">About</h1>
		<AboutLibrary />
		<AboutTeam />
	</div>
</template>
<script setup>
import AboutLibrary from '@/components/about/AboutLibrary.vue';
import AboutTeam from '@/components/about/AboutTeam.vue';
</script>
<style scoped lang="scss">
.main {
	&__title {
		margin-top: 40px;
		font-size: 40px;
		color: var(--base-white);
		font-weight: 900;
		letter-spacing: 5px;
		text-align: center;
		@media (max-width: 453px) {
			margin-top: 25px;
		}
	}
}
</style>