import { render, screen, fireEvent } from '@testing-library/vue'
import Simple from '../src/components/examples/Simple.vue'

const items = [
  { id: 0, title: 'Item A' },
  { id: 1, title: 'Item B' },
  { id: 2, title: 'Item C' }
]

const resultItems = ['Item B', 'Item C', 'Item A']

function renderList() {
  const options = {
    props: {
      items
    }
  }

  render(Simple, options)
}

describe('rendering', () => {
  it('with items', async () => {
    renderList()

    const itemsFromDom = await screen.findAllByText(
      (content, element) =>
        content.startsWith('Item') && element.className.includes('drag-el')
    )

    expect(itemsFromDom).toHaveLength(items.length)
  })

  it('without items', () => {
    const { container } = render(Simple)

    const dropZone = container.querySelector('div.drop-zone')

    expect(dropZone.innerHTML).toBeFalsy()
  })
})

describe('moving', () => {
  it('Item A on Item C', async () => {
    renderList()

    await fireEvent.drop(screen.getByText('Item C'), {
      dataTransfer: { getData: () => '0' }
    })

    const itemsFromDom = await screen.findAllByText(
      (content, element) =>
        content.startsWith('Item') && element.className.includes('drag-el')
    )

    expect(itemsFromDom.map(item => item.textContent)).toEqual(resultItems)
  })
})
