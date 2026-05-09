import express from "express";
import { p_t } from './test.js';

const port =3000;
const app =express();
const __dirname="C:/Users/guest pc/OneDrive/Desktop/cowbook/cowbook";
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.render(__dirname+"/html.code/index.ejs");
});
app.get("/about",(req,res)=>{
    res.render(__dirname+"/html.code/CBabout.ejs");
});
app.get("/profile",(req,res)=>{
    res.render(__dirname+"/html.code/CBprofile.ejs");
});
app.get("/addcow",(req,res)=>{
    res.render(__dirname+"/html.code/CBaddcow.ejs");
});
app.post("/submit",(req,res)=>{

         const DOB=req.body.DOB;
         const serial_no=req.body.serial_no;
         const no_of_lactation=req.body.no_of_lactation;
         const inseminated=req.body.inseminated;
         const doi=req.body.DOI;

         p_t(doi)
         var m_d=p_t(doi)
         var month=m_d[0]
         var days=m_d[1]

       res.render(__dirname+"/html.code/CBsubmit.ejs",{DOB,serial_no,no_of_lactation,inseminated,doi,days,month});});
app.listen(port,()=>{
    console.log("working");
});