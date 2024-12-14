import { render, screen } from '@testing-library/react'
import App from './App'

test("Renders App", () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
})