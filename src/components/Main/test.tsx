import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    const element = screen.getByRole('heading', { name: /react avançado/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
