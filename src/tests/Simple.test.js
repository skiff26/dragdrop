import { render, screen, fireEvent } from '@testing-library/vue'
import Simple from '../components/examples/Simple.vue'

const items = [
	{ id: 0, title: 'Item A' },
	{ id: 1, title: 'Item B' },
	{ id: 2, title: 'Item C' }
]

const resultItems = ['Item B', 'Item C', 'Item A']

function renderList () {
	const options = {
		props: {
			items
		}
	}

	render(Simple, options)
}

test('renders items', async () => {
	renderList()

	const itemsFromDom = await screen.findAllByText((content, element) => content.startsWith('Item') && element.className.includes('drag-el'))

	expect(itemsFromDom).toHaveLength(items.length)
})

test('renders without items', () => {
	const { container } = render(Simple)

	const dropZone = container.querySelector('div.drop-zone')

	expect(dropZone.innerHTML).toBeFalsy()
})

test('moves item', async () => {
	renderList()

	await fireEvent.dragStart(screen.getByText('Item A'), {
		dataTransfer: {
			dropEfect: 'move',
			setData: (item) => item
		}
	})

	await fireEvent.drop(screen.getByText('Item C'), {
		dataTransfer: { getData: (item) => '0' }
	})

	const itemsFromDom = await screen.findAllByText((content, element) => content.startsWith('Item') && element.className.includes('drag-el'))
	
	expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
})