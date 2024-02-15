import categoryModal from "./../Modals/category.modal.js"
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, res , cb) => {
        cb(null ,"Public/images" )
    },
    filename: (req , res , cb) => {
        cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

export const addCategory = async (req , res)=>{
    try{
        const {categoryName , description ,appointmentColor} = req.body.data
        console.log(req.body)
        if(!categoryName || !description)return res.status(404).json({success:false , message :"not found"})
        const category = await new categoryModal({
            categoryName , description ,appointmentColor
    })
    await category.save()
        console.log(req.body)
        res.status(200).json({success: true , message :"added successfully"})
    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}

export const getCategories = async (req , res)=>{
    try{
        const data = await categoryModal.find({})
    if(!data)return res.status(404).json({success:false , message : "something went wrong"})
    if(data)return res.status(200).json({success:true , message : "here's your data",data})
    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}

export const deleteCategory = async (req , res) =>{
    try{
        const {deleteItem} =req.body
        console.log(deleteItem)
        for(let i = 0 ;i<deleteItem.length ; i++){
            await categoryModal.findByIdAndDelete(deleteItem[i])
        }
        return res.status(200).json({success:true , message : 'deleted'})
    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}