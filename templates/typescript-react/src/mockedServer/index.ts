import { setupServer } from "msw/node"

import { profileHandlers } from "./profileHandlers"

export const mockedServer = setupServer(...profileHandlers)
