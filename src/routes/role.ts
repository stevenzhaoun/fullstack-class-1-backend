import { Router } from 'express'
import * as Role from '../controllers/role'

const router = Router()

router.get('/', Role.getRoles)
router.get('/:id', Role.getRole)
router.post('/', Role.createRole)
router.put('/:id', Role.updateRole)
router.delete('/:id', Role.deleteRole)

export default router