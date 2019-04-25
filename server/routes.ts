import { Router } from 'express'

const router = Router()

router.get('/api/random-data', async (req, res, next) => {
  let len: number = Number(req.query.count) || 20
  let list: any[] = require('../assets/random-data')
  if (0 < len && len < list.length) {
    let index = Math.floor(Math.random() * list.length)
    if (index < len) index += len
    list = list.slice(index - len, index)
  }
  res.json(list)
})

export default router
