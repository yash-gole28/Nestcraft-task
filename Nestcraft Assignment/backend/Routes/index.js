import { Router } from "express";
import serviceRoutes from "./service.routes.js"
const router = Router()

router.use('/service',serviceRoutes)

export default router