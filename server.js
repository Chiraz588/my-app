
const express=require("express")
const Connectdb = require("./config/ConnectDb")

const router = require("./routes/auth")
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

require('dotenv').config()
const app=express()


Connectdb()

app.use(express.json())



app.use('/api/users',router)
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);


 

app.listen(process.env.port,()=>console.log(`port is running on port ${process.env.port}...`))


 