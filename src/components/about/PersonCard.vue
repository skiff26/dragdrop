<template>
	<article class="card" v-for="person in team" :key="person.name">
		<figure class="card__image">
			<a :href="person.media.linkedin" target="_blank"><img :src="`./about/${person.img}.jpg`" :alt="person.name"></a>
		</figure>
		<div class="card__info">
			<h3 class="card__name">{{ person.name }}</h3>
			<p class="card__org">Creator @ <span>{{ person.org }}</span></p>
			<ul class="card__details">
				<li><BaseIcon name="location" wh="16"/><address>{{ person.details.location }}</address></li>
				<li><BaseIcon name="code" wh="16"/><a :href="person.details.projects[0].link" target="_blank">{{ person.details.projects[0].name }}</a></li>
				<li><BaseIcon name="lang" wh="16"/><div>{{ person.details.languages }}</div></li>
				<li><BaseIcon name="link" wh="16"/><a :href="person.details.website" target="_blank">{{ person.details.website }}</a></li>
			</ul>
			<ul class="card__media">
				<li><a :href="person.media.github" target="_blank"><BaseIcon name="github" wh="20"/></a></li>
				<li><a :href="person.media.linkedin" target="_blank"><BaseIcon name="linkedin" wh="20"/></a></li>
			</ul>
		</div>
	</article>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
const props = defineProps({
	team: Array,
	required: true
})
</script>

<style scoped lang="scss">
.card {
	background: #242424;
	border-radius: 8px;
	max-width: 570px;
	margin: 0 auto;
	display: flex;
	gap: 30px;
	padding: 30px;
	margin-bottom: 20px;
	@media (max-width: 450px) {
		flex-wrap: wrap;
		gap: 20px;
	}
	&__image {
		a img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			object-fit: cover;
		}
	}

	&__name {
		font-size: 20px;
		font-weight: 500;
		color: #ffffffde;
	}

	&__org {
		margin-top: 5px;
		line-height: 20px;
		font-size: 14px;
		font-weight: 500;
		color: #ebebeb99;
		span {
			color: #ffffffde;
		}
	}

	&__details {
		margin-top: 15px;
		font-size: 14px;
		font-weight: 500;
		li {
			display: flex;
			gap: 12px;
			&:not(:last-child) {
				margin-bottom: 10px;
			}
			address {
				color: #ffffffde;
				font-style: normal;
			}
			a {
				color: #42b883;
				transition: color 0.3s ease 0s;
				&:hover {
					color: #33a06f;
				}
			}
		}
	}

	&__media {
		display: flex;
		gap: 20px;
		margin-top: 15px;
		svg {
			transition: fill 0.3s ease 0s;
			&:hover {
				fill: white;
			}
		}
	}
}
</style>