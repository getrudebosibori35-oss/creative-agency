import React from 'react'
import '@testing-library/jest-dom/vitest'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('CreativeSpace App', () => {
  it('displays the main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /explore our projects/i })
    ).toBeInTheDocument()
  })

  it('displays the initial projects', () => {
    render(<App />)

    expect(screen.getByText('Portfolio Website')).toBeInTheDocument()
    expect(screen.getByText('E-commerce Website')).toBeInTheDocument()
  })
})
// RT



// test('displays the main heading', () => {
//   render(<App />)

//   expect(
//     screen.getByRole('heading', { name: /explore our projects/i })
//   ).toBeInTheDocument()

// })


