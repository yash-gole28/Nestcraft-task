import { Router } from "express";
import { addCategory, deleteCategory, getCategories } from "../Controllers/category.controller.js";

const router = Router()

router.post('/add-category',addCategory)
router.get('/get-categories',getCategories)
router.post('/delete-category',deleteCategory)



export default router