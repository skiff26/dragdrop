<script setup>
import HomeWelcome from '@/components/home/HomeWelcome.vue';
import HomeSponsors from '@/components/home/HomeSponsors.vue';
import HomeInfo from '@/components/home/HomeInfo.vue';
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
