const contactServices=require('../services/contactServices')



const addContact=async(req,res)=>{
    let name=req.body.name;

    let mobile=req.body.mobile;

    let obj={name:name,mobile:mobile}

    let resData=await contactServices.createContact(obj);

    res.send(resData)
}

module.exports={
    addContact,
}