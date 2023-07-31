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
						<a :class="{'nav-item-active' : item.status}" :href="item.link">{{ item.name }}</a>
					</li>
				</ul>
				<span class="nav__line"></span>
				<ul class="nav__media">
					<li class="nav__media-item" v-for="item in mediaElements" :key="item.name">
						<a :href="item.link" target="_blank"><BaseIcon :name="item.name"/></a>
					</li>
				</ul>
			</nav>
			<div class="header__menu">
				<BaseIcon name="menu" wh="30" @click="toggleMobileNav()"/>
			</div>
			<div class="header__nav-popup nav-popup" v-if="isMobileNavOpen">
				<div class="nav-popup__header">
					<span>Menu</span>
					<BaseIcon name="close" wh="30" @click="toggleMobileNav()"/>
				</div>
				<div class="nav-popup__body">
					<ul class="nav-popup__list">
						<li class="nav-popup__list-item" v-for="item in navitationElements" :key="item.name">
							<a :class="{'nav-popup-item-active' : item.status}" :href="item.link">{{ item.name }}</a>
						</li>
					</ul>
					<ul class="nav-popup__media">
						<li class="nav-popup__media-item" v-for="item in mediaElements" :key="item.name">
							<a :href="item.link" target="_blank"><BaseIcon :name="item.name" wh="30"/></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue';
const isMobileNavOpen = ref(false)
const toggleMobileNav = () => {
	isMobileNavOpen.value = !isMobileNavOpen.value
	document.body.style.overflow = isMobileNavOpen.value ? "hidden" : "visible"
}
const navitationElements = [
	{
		name: 'Docs',
		link: '/',
		status: true
	},
	{
		name: 'Examples',
		link: '/exemples',
		status: false
	},
	{
		name: 'About',
		link: '/about',
		status: false
	}
]
const mediaElements = [
	{
		name: 'github',
		link: 'https://github.com/skiff26'
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