import { render, screen, fireEvent } from '@testing-library/vue'
import Clone from '../src/components/examples/Clone.vue'

let firstList, secondList

beforeEach(() => {
	firstList = [
		{ id: 0, title: 'Item A'},
		{ id: 1, title: 'Item B'},
		{ id: 2, title: 'Item C'}
	]

	secondList = [
		{ id: 0, title: '2L: Item A'}
	]
})


function renderItems () {
	const options = {
		props: {
			firstList,
			secondList
		}
	}

	render(Clone, options)
}

describe('rendering', () => {
	it('with items', () => {
		renderItems()
	
		screen.getByText('First list')
		screen.getByText('Second list')
		firstList.forEach(item => screen.getByText(item.title))
		secondList.forEach(item => screen.getByText(`${item.title} id: ${item.id}`))
	})
})

describe('moving', () => {
	it('Item A to list 2', async () => {
		renderItems()

		const dropZone = screen.getByText('Second list').closest('.drop-zone')

		await fireEvent.drop(dropZone, {
			dataTransfer: { getData: () => '0' }
		})

		expect(dropZone.contains(screen.getByText('Clone: Item A id: 1'))).toBeTruthy()

		await fireEvent.drop(dropZone, {
			dataTransfer: { getData: () => '1' }
		})

		expect(dropZone.contains(screen.getByText('Clone: Item B id: 2'))).toBeTruthy()
	})

	it('Item A on Item C in the first list', async () => {
		renderItems()

		await fireEvent.drop(screen.getByText('Item C'), {
			dataTransfer: { getData: () => '0' }
		})
	
		const itemsFromDom = await screen.findAllByText((content, element) => content.startsWith('Item') && element.className.includes('drag-el'))

		const resultItems = ['Item B', 'Item C', 'Item A']
		
		expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
	})
})