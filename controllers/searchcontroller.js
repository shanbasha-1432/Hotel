const itemdata =require('../models/itemschema')

const searchuser = async(req,res) =>{
        try{
                const {list} = req.body;

                const search ={
                        $or: [
                               
                                 {category: list},
                                 {name: list},
                                 {price: list},
                                
                        ]
                }

                const searchData = await itemdata.find(search)

                if(searchData.length === 0){
                        return res.status(404).json({message: "Data not found"})
                }

                return res.status(200).json(searchData)

        }catch (error) {
                res.status(500).json({error: error})
        }

       
}

module.exports=searchuser


