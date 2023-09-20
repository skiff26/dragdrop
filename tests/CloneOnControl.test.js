import { render, screen, fireEvent } from '@testing-library/vue'
import CloneOnControl from '../src/components/examples/CloneOnControl.vue'

let firstList, secondList

beforeEach(() => {
	firstList = [
		{ id: 0, title: 'Item B'},
		{ id: 1, title: 'Item C'},
		{ id: 2, title: 'Item D'}
	]

	secondList = [
		{ id: 0, title: 'Item A'}
	]
})

function renderItems (withoutSecondList = false) {
	const options = {
		props: {
			firstList,
			secondList: withoutSecondList ? [] : secondList
		}
	}

	render(CloneOnControl, options)
}

describe('rendering', () => {
	it('with items', () => {
		renderItems()
	
		screen.getByText('First list')
		screen.getByText('Second list')
		firstList.forEach(item => screen.getByText(`${item.title} id: ${item.id}`))
		secondList.forEach(item => screen.getByText(`${item.title} id: ${item.id}`))
	})
})

describe('moving', () => {
	it('Item B to list 2', async () => {
		renderItems()

		const dropZone = screen.getByText('Second list').closest('.drop-zone')

		await fireEvent.drop(dropZone, {
			dataTransfer: { getData: () => '1' }
		})

		expect(dropZone.contains(screen.getByText('Item C id: 1'))).toBeTruthy()
	})

	it('Item B on Item D in the first list', async () => {
		const withoutSecondList = true
		renderItems(withoutSecondList)

		await fireEvent.drop(screen.getByText('Item D id: 2'), {
			dataTransfer: { getData: () => '0' }
		})
	
		const itemsFromDom = await screen.findAllByText((content, element) => content.startsWith('Item') && element.className.includes('drag-el'))

		const resultItems = ['Item C id: 1', 'Item D id: 2', 'Item B id: 0']
		
		expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
	})
})