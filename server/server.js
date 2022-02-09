const express = require('express')
const cors = require('cors');  // to request form different domain
const { LocalStorage } = require('node-localstorage');

const app = express()

localStorage = new LocalStorage('./scratch')


const PORT =4300 || process.env.PORT;



app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello from server")
})



app.post('/signup',(req,res)=>{
  // console.log(req.body);
   
    localStorage.setItem(req.body.name,JSON.stringify(req.body))  
    //console.log(JSON.parse(localStorage.getItem(`${req.body.name}`))); 

    res.status(201).send({"data":"registered successfully"})
})


app.post('/login',(req,res)=>{
    
    const username = req.body.name
    const userPassword = req.body.password
    const user = JSON.parse(localStorage.getItem(username))

    if(user){
        if(user.password === userPassword){
            console.log(`welcome ${username}`);;
        }
        else console.log("Please enter a valid info");;
    }
    else console.log("please enter a valid info");
 
    res.status(200).send({"data":"registered successfully"})
})




app.listen(PORT,()=>{
    console.log("server runing on port",PORT);
})