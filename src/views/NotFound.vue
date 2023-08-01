<template>
	<div class="main__container">
		<h1 class="main__title">Page Not Found</h1>
		<p class="main__text">You found a dead link: <span>{{ $route.fullPath }}</span></p>
		<br />
		<p class="main__redirect">Redirect to <router-link to="/">main</router-link> page.</p>
	</div>
</template>

<style scoped lang="scss">
.main {
	color: #e3e3e3;
	margin: 30px;
	@media (max-width: 400px) {
		margin: 20px 15px;
	}
	&__container {
		background: #242424;
		padding: 30px;
		border-radius: 8px;
	}
	&__title {
		font-size: 38px;
		line-height: 1.4;
		letter-spacing: -.02em;
		font-weight: 600;
		margin-bottom: 40px;
		@media (max-width: 400px) {
			margin-bottom: 30px;
			font-size: 34px;
		}
	}

	&__text {
		span {
			color: #aac8e4;
		}
	}

	&__redirect {
		font-weight: 500;
		margin-bottom: 20px;
		a {
			transition: all 0.3s ease 0s;
			color: #42b883;
			&:hover {
				color: #42d392;
			}
		}
		@media (max-width: 400px) {
			margin-bottom: 10px;
		}
	}
}

</style>