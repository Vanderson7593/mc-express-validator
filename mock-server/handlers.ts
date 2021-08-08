import { rest } from 'msw'
import { BILLS } from 'client/mocks/bills'

export const handlers = [
  rest.get('/validate/:id', (req, res, ctx) => {
    const { id } = req.params
    return res(ctx.delay(2000), ctx.json(BILLS.filter(x => x.id == id)))
  })
]
