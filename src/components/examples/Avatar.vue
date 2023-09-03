<template>
	<div class="demo">
		<div class="avatar">
			<div class="avatar__wrapper">
				<div class="avatar__image">
					<button v-if="imageUrl && trash" class="avatar__trash" @click="deleteFile"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></button>
					<img class="avatar__image" :src="imageUrl" alt="Avatar" v-if="imageUrl">
					<label class="avatar__label" @drop.prevent="fileUpload" @dragenter.prevent @dragover.prevent>
						<input ref="fileInputRef" type="file" @change="fileUpload">
						<div class="avatar__upload-icon" v-show="!imageUrl">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
								<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
								<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
							</svg>
							<span>Upload</span>
						</div>
					</label>
				</div>
				<div class="avatar__info">Browse or Drop image</div>
			</div>
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
	background-color: #242424;
	color: #ffffffde;
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
	&__trash {
		position: absolute;
		top: 0px;
		left: -5px;
		background: rgb(73, 73, 238);
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		z-index: 5;
		transition: all 0.3s ease 0s;
		&:hover {
			background: rgb(73, 73, 180);
		}
		svg {
			fill: white;
		}
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	&__image {
		position: relative;
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 50%;
		background: #363636;
	}

	&__label {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
		display: flex;
		justify-content: center;
		transition: opacity 0.3s ease 0s;
		&:hover {
			opacity: 0.6;
		}
		span {
			padding: 3px;
			border-radius: 3px;
			background: #3d3d3d;
			font-size: 14px;
			letter-spacing: 2px;
			font-weight: 600;
			user-select: none;
		}
		input {
			display: none;
		}
	}
	&__upload-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 5px;
	}
}
</style>