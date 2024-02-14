import serviceModal from "../Modals/service.modal.js"

export const addService = async(req , res) => {
    try{
        const {services, category, price, duration, gender} = req.body.addService
        if(!services || !category || !price || !duration || !gender) return res.status(404).json({success:false , message:"incomplete data"})
            const addData =await new serviceModal({
            services, category, price, duration, gender
        })
        await addData.save()

        return res.status(200).json({success:true , message:"service added"})
    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}


export const getServices = async(req , res) => {
    try{
        const data = await serviceModal.find({})
        if(!data)return res.status(404).json({success:false , message:"not found"})

        return res.status(200).json({success:true , message : "your services data" , data})
    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}

export const deleteService = async (req, res) => {
    try{
        const { id } = req.query
        await serviceModal.findByIdAndDelete(id)
        return res.status(200).json({success: true , message:"deleted"})
    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}

export const updateService = async (req , res) => {
    try{
        const {id , serviceData} = req.body

        const update = serviceData.find(item => item._id === id);

        await serviceModal.findByIdAndUpdate(id , {services:update.services,category:update.category,price:update.price,duration:update.duration,gender:update.gender})

        return res.status(200).json({success:true , message:"updated"})

    }catch(error){
        console.log(error)
        return res.status(500).json({success : false , message: "error"})
    }
}