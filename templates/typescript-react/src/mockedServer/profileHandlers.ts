import { rest } from "msw"

export const profileHandlers = [
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Jackie Chan",
      })
    )
  }),
]
