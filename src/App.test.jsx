import { render, screen } from '@testing-library/react'
import App from './App'

describe('Jest', () => {
    it('should render', () => {
        render(<App />)
    })

    screen.debug()
})