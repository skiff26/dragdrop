<template>
	<aside class="main__aside aside">
		<div class="aside__group" v-for="group in groups" :key="group.title">
			<h2 class="aside__group-title">{{ group.title }}</h2>
			<nav class="aside__nav">
				<router-link :to="{ name: item.link }" :class="{'active' : item.link === $route.name }" v-for="item in group.links">{{ item.name }}</router-link>
			</nav>
		</div>
	</aside>
</template>

<script setup>
defineProps({
	groups: {
		type: Array,
		required: true
	}
})
</script>

<style scoped lang="scss">
.aside {
	position: sticky;
	flex: 0 0 250px;
	@media (max-width: 840px) {
		flex: 0 0 auto;
		padding-right: 30px;
	}
	@media (max-width: 768px) {
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
		column-gap: 25px;
		flex-wrap: wrap;
		padding-right: 0;
	}
	&__group {
		&:not(:last-child) {
			margin-bottom: 20px;
		}
	}
	&__group-title {
		color: var(--base-white);
		line-height: 20px;
		margin-bottom: 10px;
		font-weight: 500;
		@media (max-width: 768px) {
			margin-bottom: 7px;
		}
	}

	&__nav {
		a {
			display: block;
			color: var(--base-grey);
			font-weight: 500;
			line-height: 20px;
			font-size: 14px;
			transition: all 0.3s ease 0s;
			padding: 3px 0;
			&.active {
				color: var(--base-green);
			}
			&:not(.active) {
            &:hover {
                color: var(--base-white);
            }
        	}
		}
	}
}
</style>