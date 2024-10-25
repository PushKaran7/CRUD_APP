const asyncHandler=require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllItems=asyncHandler(async (req,res)=>{
    const contacts= await Contact.find();
    res.json(contacts);
    
});


const getItemById=asyncHandler(async(req,res)=>{
    console.log("the request body is ",req.params.id);
    const item=await Contact.findById(req.params.id);
    if(!item)
    {
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.json(item);
    
    
});

const createItem=asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name,email,phone,address}=req.body;
    if(!name || !email || !address ||!phone)
    {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        address

    });

    res.json(contact);
    
});

const updateItemById=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(400);
        throw new Error("contact not found");
    }

    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateContact);
    
});

const deleteItemById=asyncHandler(async(req,res)=>{
    const contact=await Contact.findByIdAndDelete(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json({ message: 'Contact deleted successfully', contact });
    
});



module.exports={getAllItems,getItemById,createItem,updateItemById,deleteItemById};