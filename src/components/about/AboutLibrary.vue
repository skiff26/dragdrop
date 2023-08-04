<template>
	<section class="product">
		<h2 class="product__title">What this library is?</h2>
		<div class="product__text">
			<p>This is a library with <strong>Ready-To-Use Drag-and-Drop</strong> components.</p>
			<p>It is created to facilitate the integration of Drag-and-Drop elements into Vue.js applications.</p>
			<h3><strong>Drag and drop</strong> is a convenient and intuitive way to interact with web applications.<br>Here are a few reasons why it is considered convenient:</h3>
			<ul>
				<li><strong>Intuitiveness:</strong> Users can easily understand how to use drag and drop as it simulates real-world behavior when they move objects between different places on the screen.</li>
				<li><strong>Improved user experience:</strong> Drag and drop makes interacting with the application more interactive and enjoyable for users since they can visually move elements and instantly see the results of their actions.</li>
				<li><strong>Simplifying data manipulation:</strong> Dragging allows easy movement of data between different parts of the interface without the need to use context menus or other control elements.</li>
				<li><strong>Task acceleration:</strong> Drag and drop eliminates the need to switch between various control elements and menus, reducing the number of steps and simplifying task execution.</li>
				<li><strong>Associativity:</strong> The visual nature of dragging allows for easy association between objects, for example, dragging an item to a specific area for its use or processing.</li>
				<li><strong>Enhanced efficiency:</strong> For performing specific tasks such as sorting, grouping, or multiple item selection, dragging provides a faster and more intuitive way.</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.product {
	padding: 40px;
	max-width: 1000px;
	background: #242424;
	border-radius: 8px;
	margin: 30px auto;
	@media (max-width: 768px) {
		margin: 20px auto;
	}
	@media (max-width: 580px) {
		padding: 30px 20px;
	}
	&__title {
		color: var(--base-white);
		font-size: 30px;
		text-align: center;
		margin-bottom: 20px;
		font-weight: 500;
	}

	&__text {
		color: var(--base-grey);
		line-height: 1.4;
		strong {
			color: rgba(255, 255, 255, 0.767);
		}
		h3 {
			margin-bottom: 10px;
		}
		ul {
			li {
				&:not(:last-child) {
					margin-bottom: 5px;
				}
			}
		}
	}
}
</style>