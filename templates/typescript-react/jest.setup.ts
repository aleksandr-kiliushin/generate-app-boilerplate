import "@testing-library/jest-dom"
import "whatwg-fetch"

import { mockedServer } from "./src/mockedServer"

beforeAll(() => {
  mockedServer.listen()
})
afterEach(() => {
  mockedServer.resetHandlers()
})
afterAll(() => {
  mockedServer.close()
})
