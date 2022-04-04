const {contactfo}=require('../models/Contact')


const createContact=async(data)=>{
     let contactObj=new contactfo(data);

     await contactObj.save();

     return contactObj;
}

module.exports={
    createContact

}