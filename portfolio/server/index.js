const express = require('express');
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');
const app=express();



const roomRoutes = require('./routes/post');
app.use(bodyparser.json({limit: "30mb",extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());
// app.use('/contacts',contactRoutes);
app.use('/portfolio',roomRoutes);
app.get('/',(req,res)=>{
  res.send('hello portfoli api');
})
// const CONNECTION_URL = `mongodb+srv://rooms:mohit1211@cluster0.deigy.mongodb.net/RoomsStore?retryWrites=true&w=majority`;
const CONNECTION_URL = `mongodb+srv://admin:mohit1211@cluster0.lma9u.mongodb.net/Portfolio?retryWrites=true&w=majority`;


mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  app.listen(PORT,()=>console.log(`Server running on PORT: ${PORT}`))
}).catch((e)=>{
   console.log(e.message);
})


mongoose.set('useFindAndModify',false);





