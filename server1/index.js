import express from 'express';
import mongoose from 'mongoose';
const app = express ()

app.get ("/",(req,res)=>{
    res.send("I have created my first api")
})
app.get("/Aboutme",(req,res)=>{
   res.json(
    {
        Name:"K.Sandhya",
        FatherName:"k.Mallesham",
        Village:"Choppadandi"
    }
)
})
app.get("/Skills",(req,res)=>{
    res.json({
        Frontend:"React",
        Languages:"Javascript",
        Componentlibraries:"MUI"
     })
})
app.get("/Qualification",(req,res)=>{
    res.json({
        School:"Siddartha high school",
        Intermediate:"Alphores junior college",
        BTech:"sree chaitanya institute of techonolgical sciences"
    })
})       
app.get("/Projects",(req,res)=>{
    res.json({
        CapstoneProject:"Insurance Decisioning System",
        MiniProject:"The Internet of Things:Multi-Dimensional Scaling Assisted Clone Detection"
    })
})        
app.get("/Experiences",(req,res)=>{
    res.json(
        {
        PowerBI:"I have experience in PowerBI and certified by Microsoft",
        Python:"I have completed python course in ByteXL"
    }
    )
})   
app.get("/Workshops",(req,res)=>{
    res.json({  
        Python:"Completed python workshop from ByteXl",
        PowerBI:"Completed PowerBi workshop from ICT Academy",
        ArtificialIntelligence:"I have completed this workshop from Edunet Foundation"
    })
})
app.get("/Certifications",(req,res)=>{
    res.json({
        1:"Certificate of Partification in Flipkart Grid 4.0",
        2:"Certificate in participation in ReImagine Challenge organised by Swiss Me",
        3:"Certificate in PowerBI Data Analyst Associate by Microsoft"
    })
})        
app.get("/Hobbies",(req,res)=>{
    res.json({
        1:"Dancing",
        2:"Cooking",
        3:"Playing Badminton",
        4:"Singing"
    })
})       
app.get("/ContactMe",(req,res)=>{
    res.json({
        Email:"sandhyakalleti4@gmail.com",
        MobileNumber:8186018041,
        Address:"1-56/A,Bhupalapatnam,Choppadandi",
        Pincode:505415
    })
})

    app.listen(8000,()=>{
    console.log("Server runnig on port 8000")
})
                
        
        
