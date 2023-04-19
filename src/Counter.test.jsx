import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"

import Counter from "./Counter"

describe("Counter", () => {
  it("renders", () => {
    render(<Counter />)
    expect(true).toBe(true)
  })
})