const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/contactsDB")
.then(()=>console.log("Mongodb connected"))
.catch(err=>console.log(err))

//  let contacts=[];
 const contactSchema=new mongoose.Schema({
    name:String,
    phone:String
 });
 const Contact=mongoose.model("Contact",contactSchema);



app.get("/contacts",async(req,res)=>{
    const contacts=await Contact.find();
    res.json(contacts);
})
app.post("/contacts",async(req,res)=>{
console.log("post hit",req.body)
    const newContacts= new Contact({
       name:req.body.name,
       phone:req.body.phone
       
        
    });
    await newContacts.save();
    // contacts.push(newContacts);
    res.json(newContacts);
})
app.delete("/contacts/:id",async(req,res)=>{
    // const id=Number(req.params.id);
    // contacts=contacts.filter((contact)=>contact.id!==id);
    await Contact.findByIdAndDelete(req.params.id);
    res.json({message:"contact deleted"});

})
app.put("/contacts/:id",async(req,res)=>{
    try{
    const id=req.params.id;
    const newName =req.body.name;
    const newPhone=req.body.phone;
    
   const updatedContact= await Contact.findByIdAndUpdate(
        id,
        {name:newName,phone:newPhone},
        {new:true}
    );
    res.json(updatedContact);
    }catch(err){
        res.status(500).json({err:err.message})
   }
 
})
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})