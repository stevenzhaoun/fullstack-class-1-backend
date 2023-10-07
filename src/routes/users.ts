import { Router } from 'express'
import * as User from '../controllers/user'

const router = Router()

router.get('/', User.getUsers)
router.get('/:id', User.getUser)

export default router