const mongoose =require('mongoose');
const recruiter_login_detail =new mongoose.Schema({
   username :{
    type :String,
    required :true
   } ,
    password :{
    type : String,
    required :true
   }
})



const recruiter = new mongoose.model("Recruiter",recruiter_login_detail);


module.exports =recruiter;
