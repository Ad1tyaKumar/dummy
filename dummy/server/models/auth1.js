import mongoose from "mongoose";

const userOAuthSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    googleId: {
        type: String,
        required: true,
    },
    id:[{
        type:Number
    }]
})

const UserOAuth=mongoose.model('UserOAuth',userOAuthSchema);
export default UserOAuth;