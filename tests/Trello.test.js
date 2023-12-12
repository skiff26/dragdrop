import { render, screen, fireEvent } from '@testing-library/vue'
import Trello from '../src/components/examples/Trello.vue'

let items = []

beforeEach(() => {
  items = [
    { id: 0, title: 'Item A', list: 1 },
    { id: 1, title: 'Item B', list: 1 },
    { id: 2, title: 'Item C', list: 1 },
    { id: 3, title: 'Item D', list: 2 }
  ]
})

function renderItems(sort = false) {
  const options = {
    props: {
      items,
      sort
    }
  }

  render(Trello, options)
}

describe('rendering', () => {
  it('with items', () => {
    renderItems()

    screen.getByText('In progress')
    screen.getByText('Done')
    items.forEach(item => screen.getByText(item.title))
  })
})

describe('moving', () => {
  it('Item A to list 2', async () => {
    renderItems()

    const dropZone = screen.getByText('Done').closest('.drop-zone')

    await fireEvent.drop(dropZone, {
      dataTransfer: { getData: () => '0' }
    })

    expect(dropZone.contains(screen.getByText('Item A'))).toBeTruthy()
  })

  it('Item B on Item C', async () => {
    const sort = true
    renderItems(sort)

    await fireEvent.drop(screen.getByText('Item C'), {
      dataTransfer: { getData: () => '1' }
    })

    const itemsFromDom = await screen.findAllByText(
      (content, element) =>
        content.startsWith('Item') && element.className.includes('drag-el')
    )

    const resultItems = ['Item A', 'Item C', 'Item B', 'Item D']

    expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
  })
})
