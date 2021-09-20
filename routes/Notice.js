const NoticeModel = require("../models/NoticeModel");
const Route = require("./CodeCheck");

Route.get("/getnotice",(req, res)=>{
    NoticeModel.find()
    .then(val=>res.json(val))
    .catch(err=>res.sendStatus(400).json(err))
});

Route.post("/postnotice",(req, res)=>{
   console.log(req.body);
   const NewData = new NoticeModel({
    NoticeLink:req.body.NoticeLink,
    Notice:req.body.Notice
   })
   NewData.save()
   .then(()=>res.json("successfully added"))
   .catch(Err=> res.sendStatus(400).json(Err))
})
Route.post("/deletenotice/:id",(req, res)=>{
    const id = req.params.id;
    NoticeModel.deleteOne({_id:id})
    .then(()=>res.json("Deleted Successfully."))
    .catch(Err=> res.sendStatus(400).json(Err))
 })
module.exports = Route;