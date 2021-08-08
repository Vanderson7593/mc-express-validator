import { rest } from 'msw'
import { INVOICES } from 'client/mocks/invoices'

export const handlers = [
  rest.get('/validate/:id', (req, res, ctx) => {
    const { id } = req.params
    return res(ctx.delay(2000), ctx.json(INVOICES.filter(x => x.id == id)))
  })
]
