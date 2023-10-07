import { Router } from 'express'
import * as User from '../controllers/user'

const router = Router()

// Restful API
// List ALL resource{user} -> GET /users
// Get ONE user -> GET /users/{userId}
// Create user -> POST /users body -> userData{}
// Update user -> PUT(PATCH) /users/{userId} body -> userData{}
// Delete user -> DELETE /users/{userId}

router.get('/', User.getUsers)
router.get('/:id', User.getUser)
router.post('/', User.createUser)
router.put('/:id', User.updateUser)
router.delete('/:id', User.deleteUser)



// POST "/users/create"
// POST /users/update body - { userId, name, email, role }
// POST /users/delete body - {userId}
 

export default router