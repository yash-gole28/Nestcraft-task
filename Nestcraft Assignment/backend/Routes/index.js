import { Router } from "express";
import categoryRoutes from "./category.routes.js"
import serviceRoutes from "./service.routes.js"
const router = Router()

router.use('/category',categoryRoutes)
router.use('/service',serviceRoutes)

export default router