import { render, screen } from '@testing-library/vue'
import BaseIcon from '../components/BaseIcon.vue'

function renderIcon (name, size = '20') {
	const options = {
		props: {
			name,
			width: size,
			height: size
		}
	}

	render(BaseIcon, options)
}

test('renders icon', () => {
	renderIcon('menu')

	expect(screen.getByTestId('base-icon').innerHTML).toBeTruthy()
})

test('renders non-existent icon', () => {
	renderIcon('nonExistentIcon')

	expect(screen.getByTestId('base-icon').innerHTML).toBeFalsy()
})

test('renders icon with default size', () => {
	const defaultSize = '20'

	renderIcon('menu')
	
	const icon = screen.getByTestId('base-icon');

	expect(icon.getAttribute('width')).toBe(defaultSize)
	expect(icon.getAttribute('height')).toBe(defaultSize)
})

test('renders icon with custom size', () => {
	const size = '30'

	renderIcon('menu', size)
	
	const icon = screen.getByTestId('base-icon');

	expect(icon.getAttribute('width')).toBe(size)
	expect(icon.getAttribute('height')).toBe(size)
})