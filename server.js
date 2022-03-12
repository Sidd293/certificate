const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { request } = require('express');
const path = require('path')
const app = express();
const pathToData = path.resolve(__dirname, "db/db")
const publicPath = path.resolve(__dirname, 'public')
var cors = require("cors");
app.use( express.static(publicPath))
////cors dependency for securing the server
app.use('/public', express.static('/public'));
app.set('view engine', 'ejs');
app.use(cors());

const Schema = mongoose.Schema 
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://sidhu:7398438689@mernapp.oucv3.mongodb.net/quizDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

certificateSchema = new Schema({
    user: String,
    score:String,
    date:String,
    subject:String
  });


  app.get("/certificate/:id",(req,res)=>{
    const Certificate = mongoose.model("Certificate", certificateSchema);
    
      const id = req.params.id
      Certificate.findById(id).then((doc)=>{
        res.render('index',{ user : doc.user,date : doc.date,subject:doc.subject ,score : doc.score,id:id});
      }).catch((err)=>res.send(err));
    
    
    
     
    
    
    })
      



app.listen(process.env.PORT || 8080,()=>{
    console.log("ruing");
})