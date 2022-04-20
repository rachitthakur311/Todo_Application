const express         =  require("express"); 
const cors            =  require("cors");
const app             =  express()
const mongoose        =  require ("mongoose");
const {MongoClient}   =  require("mongodb");
const dotenv          =  require('dotenv');
const {response}      =  require("express");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false }));


// mongodb connection
mongoose.connect('mongodb+srv://todolistproject:todo1234@myproject22.ija6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
  useNewUrlParser : true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log("mongodb is connected successfully.....");
})
.catch((err)=>{
  console.log("err");
})


// server creation 

//app.listen(process.env.PORT,()=>console.log("app is running "));
app.listen(8080, ()=>{
    console.log("app is running on the port 8080")
});

//create
app.post("/", (request, response)=>{
  
})

//read 
app.get("/getALL", (request, response)=>{
    response.json({
        success: true ,
        
        
      });
    })

//update 
app.post("/update", (request, response)=>{
    
})

//delete
app.post("/delete", (request, response)=>{
    
})
