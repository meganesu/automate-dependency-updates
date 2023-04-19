import { describe, it, expect } from "vitest"
import { render, fireEvent, screen } from "@testing-library/react"

import Counter from "./Counter"

describe("Counter", () => {
  it("renders", () => {
    render(<Counter />)
    expect(screen.getByRole("button")).toHaveTextContent("This button has been clicked 0 times!")
  })

  it("increments count when the button is clicked", () => {
    // render the counter
    const initialCount = 0;
    render(<Counter initialCount={initialCount} />)

    // click the button
    fireEvent.click(screen.getByRole("button"))

    // confirm that the count incremented
    expect(screen.getByRole("button")).toHaveTextContent("This button has been clicked 1 time!")

    // click the button
    fireEvent.click(screen.getByRole("button"))

    // confirm that the count incremented
    expect(screen.getByRole("button")).toHaveTextContent("This button has been clicked 2 times!")
  })
})