<script setup>
import HomeWelcome from '@/components/HomeWelcome.vue';
import HomeSponsors from '@/components/HomeSponsors.vue';
import HomeInfo from '@/components/HomeInfo.vue';
</script>

<template>
		<div class="main__container">
			<HomeWelcome />
		</div>
		<HomeSponsors />
		<div class="main__container">
			<HomeInfo />	
		</div>
</template>
