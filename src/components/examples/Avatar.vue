<template>
	<div class="demo">
		<div class="avatar">
			<img class="avatar__image" :src="imageUrl" alt="Avatar" v-if="imageUrl">
			<label class="avatar__upload" @drop.prevent="fileUpload" @dragenter.prevent @dragover.prevent v-else>
				<input ref="fileInputRef" type="file" @change="fileUpload">
				<svg class="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M24.1666 6.66675H15.8333L11.6666 11.6667H6.66659C5.78253 11.6667 4.93468 12.0179 4.30956 12.6431C3.68444 13.2682 3.33325 14.116 3.33325 15.0001V30.0001C3.33325 30.8841 3.68444 31.732 4.30956 32.3571C4.93468 32.9822 5.78253 33.3334 6.66659 33.3334H33.3333C34.2173 33.3334 35.0652 32.9822 35.6903 32.3571C36.3154 31.732 36.6666 30.8841 36.6666 30.0001V15.0001C36.6666 14.116 36.3154 13.2682 35.6903 12.6431C35.0652 12.0179 34.2173 11.6667 33.3333 11.6667H28.3333L24.1666 6.66675Z"
						stroke="#ACB2B6" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M20 26.6667C22.7614 26.6667 25 24.4282 25 21.6667C25 18.9053 22.7614 16.6667 20 16.6667C17.2386 16.6667 15 18.9053 15 21.6667C15 24.4282 17.2386 26.6667 20 26.6667Z"
						stroke="#ACB2B6" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<span class="avatar__text">Upload</span>
			</label>
			<button v-if="imageUrl && trash" class="avatar__trash" @click="deleteFile">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path
						d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['upload', 'delete'])
const { trash } = defineProps({
	trash: {
		type: Boolean,
		default: true
	}
})

const imageUrl = ref('')
const fileInputRef = ref()

const clearValue = () => {
	if (fileInputRef.value) {
		fileInputRef.value.value = ''
	}
}

const fileUpload = (event) => {
	const file = event.target?.files?.length > 0
		? event.target.files[0] : event.dataTransfer.files[0]
	if (!['image/jpeg', 'image/png'].includes(file.type)) {
		alert("Incorrect image format.")
		return
	}
	imageUrl.value = URL.createObjectURL(file)
	emit('upload', file)
	clearValue()
}

const deleteFile = () => {
	imageUrl.value = null
	clearValue()
	emit('delete')
}
</script>

<style lang="scss" scoped>
.demo {
	max-width: 600px;
	padding: 30px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
	background-color: var(--c-bg-card, #242424);
	color: var(--c-text, #ffffffde);
	gap: 30px;
	border-radius: 8px;

	@media (max-width: 768px) {
		padding: 15px;
		gap: 15px;
		margin: 15px auto;
	}

	@media (max-width: 400px) {
		flex-direction: column;
	}
}

.avatar {
	position: relative;
	margin: 0 auto;
	width: 100px;
	height: 96px;
	border-radius: 20px;
	overflow: hidden;
	background-color: var(--c-border, #363636);

	input {
		display: none;
	}

	&__upload {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: var(--c-bg-btn-hover, #3a3a3a);
		}

		.icon {
			margin-top: 15px;
			margin-bottom: 13px;
			flex: 1 1 auto;
		}

		.avatar__text {
			text-align: center;
			font-weight: 500;
			width: 100%;
			padding: 6px;
			transition: all 0.3s ease;
			background-color: var(--c-bg);
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__trash {
		position: absolute;
		top: 0px;
		background: rgb(73, 73, 238);
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 0 50% 0;
		z-index: 5;
		transition: all 0.3s ease 0s;

		&:hover {
			background: rgb(73, 73, 180);
		}

		svg {
			fill: white;
		}
	}
}
</style>