<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="wh ? wh : 20" :height="wh ? wh : 20" :fill="color ? color : '#979797'"
		data-testid="base-icon" viewBox="0 0 16 16" v-html="path">
	</svg>
</template>
<script>
import icons from '../icons'
export default {
	props: ['name', 'wh', 'color'],
	data() {
		return {
			path: icons[this.name]
		}
	}
}
</script>