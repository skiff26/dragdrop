<template>
	<header class="header">
		<div class="header__container">
			<div class="header__logo" @click="$router.push({ name: 'home' })">
				<img src="/logo.svg" alt="Vue.js">
				<span>Vue.js (Drag&Drop)</span>
			</div>
			<nav class="header__nav nav">
				<ul class="nav__list">
					<li class="nav__list-item" v-for="item in navitationElements" :key="item.name">
						<router-link :class="{ 'nav-item-active': item.link === $route.matched[0]?.name }"
							:to="{ name: item.link }">{{ item.name }}</router-link>
					</li>
				</ul>
				<span class="nav__line"></span>
				<div class="nav__dark-mode-switcher">
					<AppearanceSwitcher />
				</div>
				<span class="nav__line"></span>
				<ul class="nav__media">
					<li class="nav__media-item" v-for="item in mediaElements" :key="item.name">
						<a :href="item.link" target="_blank">
							<BaseIcon :name="item.name" />
						</a>
					</li>
				</ul>
			</nav>
			<div class="header__menu">
				<BaseIcon name="menu" wh="30" @click="toggleMobileNav()" />
			</div>
			<transition name="nav">
				<div class="header__nav-popup nav-popup" v-if="isMobileNavOpen">
					<div class="nav-popup__header">
						<span>Menu</span>
						<BaseIcon name="close" wh="30" @click="toggleMobileNav()" />
					</div>
					<div class="nav-popup__body">
						<ul class="nav-popup__list">
							<li class="nav-popup__list-item" v-for="item in navitationElements" :key="item.name"
								@click="toggleMobileNav()">
								<router-link :to="{ name: item.link }">{{ item.name }}</router-link>
							</li>
						</ul>
						<div class="nav-popup__appearence">
							<p>Appearance</p>
							<AppearanceSwitcher />
						</div>
						<ul class="nav-popup__media">
							<li class="nav-popup__media-item" v-for="item in mediaElements" :key="item.name">
								<a :href="item.link" target="_blank">
									<BaseIcon :name="item.name" wh="28" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</transition>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import AppearanceSwitcher from './AppearanceSwitcher.vue'
const isMobileNavOpen = ref(false)
const toggleMobileNav = () => {
	isMobileNavOpen.value = !isMobileNavOpen.value
	document.body.style.overflow = isMobileNavOpen.value ? "hidden" : "visible"
}
const navitationElements = [
	{
		name: 'Docs',
		link: "docs",
	},
	{
		name: 'Examples',
		link: 'examples',
	},
	{
		name: 'About',
		link: 'about',
	}
]
const mediaElements = [
	{
		name: 'github',
		link: 'https://github.com/skiff26/dragdrop'
	},
	{
		name: 'telegram',
		link: 'https://t.me/id00909'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/akulchytskyi/'
	},
]
</script> 

<style scoped>
.nav-enter-active,
.nav-leave-active {
	transition: all 0.3s ease;
	transform: rotateY(0deg);
	opacity: 1;
}

.nav-enter-from,
.nav-leave-to {
	opacity: 0;
	transform-origin: 0 0;
	transform: rotateX(-90deg);
}</style>