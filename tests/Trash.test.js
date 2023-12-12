import { render, screen, fireEvent } from '@testing-library/vue'
import Trash from '../src/components/examples/Trash.vue'
import icons from '../src/icons'

let items = []

beforeEach(() => {
  items = [
    { id: 0, title: 'Item A' },
    { id: 1, title: 'Item B' },
    { id: 2, title: 'Item C' }
  ]
})

function renderItems() {
  const options = {
    props: {
      items
    }
  }

  render(Trash, options)
}

function getAllItems() {
  return screen.findAllByText(
    (content, element) =>
      content.startsWith('Item') && element.className.includes('drag-el')
  )
}

it('render with items', () => {
  renderItems()

  items.forEach(item => screen.getByText(item.title))

  expect(screen.getByTestId('trash').innerHTML).toBe(icons['trash'])
})

describe('moving', () => {
  it('Item A on Item C', async () => {
    renderItems()

    await fireEvent.drop(screen.getByText('Item C'), {
      dataTransfer: { getData: () => '0' }
    })

    const itemsFromDom = await getAllItems()

    const resultItems = ['Item B', 'Item C', 'Item A']

    expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
  })

  it('delete Item C', async () => {
    renderItems()

    await fireEvent.drop(screen.getByTestId('trash'), {
      dataTransfer: { getData: () => '2' }
    })

    const itemsFromDom = await getAllItems()

    const resultItems = ['Item A', 'Item B']

    expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
  })
})
