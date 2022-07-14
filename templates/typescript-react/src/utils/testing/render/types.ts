import { RenderOptions as IRtlRenderOptions, RenderResult as IRtlRenderResult } from "@testing-library/react"
import { BrowserHistory } from "history"
import React from "react"

interface IRenderResult extends IRtlRenderResult {
  history: BrowserHistory
}

interface IRenderOptions extends Omit<IRtlRenderOptions, "wrapper"> {
  initialUrl?: string
}

export type IRender = (component: React.ReactElement, options?: IRenderOptions) => IRenderResult
