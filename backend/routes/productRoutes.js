import express from 'express'
const router = express.Router()

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)

router.get('/top', getTopProducts)


export default router