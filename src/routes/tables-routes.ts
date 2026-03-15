import { Router } from 'express'

import { TablesController } from '@/controllers/tables-controller'
import { table } from 'console'

const tablesRoutes = Router()
const tablesController = new TablesController()

tablesRoutes.get('/', tablesController.index)

export { tablesRoutes }