import mongoose from 'mongoose';
import validator from 'validator';

const bookmarkSchema = new mongoose.Schema({
    Article:String,
    Headline:String,
    Keywords:[{
        type:String
    }],
    Publish_Date:String,
    Sentiment:String,
    TextClassification:String,
    images:String,
    summary:String
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(v) {
            if (!validator.isEmail(v)) {
                throw new Error("Enter A valid email")
            }
        }
    },
    password: {
        type: String,
    },
    bookmarks:[bookmarkSchema]
})

const User = mongoose.model('User', userSchema);
export default User;