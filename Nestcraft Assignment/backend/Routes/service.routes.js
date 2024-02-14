import { Router } from "express";
import { addService, deleteService, getServices, updateService } from "../Controllers/service.controller.js";

const router = Router()

router.post("/add-service",addService)
router.get("/get-services",getServices)
router.delete("/delete-service",deleteService)
router.post("/update",updateService)


export default router