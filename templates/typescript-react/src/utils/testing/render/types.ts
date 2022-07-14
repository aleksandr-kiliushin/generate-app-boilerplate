import { RenderOptions as IRtlRenderOptions, RenderResult as IRtlRenderResult } from "@testing-library/react"
import React from "react"
import { BrowserHistory } from "history"

interface IRenderResult extends IRtlRenderResult {
  history: BrowserHistory
}

interface IRenderOptions extends Omit<IRtlRenderOptions, "wrapper"> {
  initialUrl?: string
}

export type IRender = (component: React.ReactElement, options?: IRenderOptions) => IRenderResult
