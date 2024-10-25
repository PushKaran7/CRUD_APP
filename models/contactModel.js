const mongoose =require("mongoose");

const contactSchema =mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the Contact name"]
    },
    email:{
        type:String,
        required:[true,"Please add the email "]
    },
    phone:{
        type:String,
        required:[true,"Please add the Phone number"]
    },
    address:{
        type:String,
        required:[true,"Please add the address"]
    },
},
    {
        timestamps:true,

    }
);

const Contact=mongoose.model("Contact",contactSchema);
module.exports=Contact;