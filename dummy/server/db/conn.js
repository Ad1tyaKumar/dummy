import mongoose from "mongoose";

export const connDB = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "backend",
    }).then(() => {
        console.log("DB connected");
    }).catch((e) => {
        console.log(e);
    })
}

// const connectDB = async () => {
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URL,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     }
//     catch(err){
//         console.log(err);
//         process.exit();
//     }
// }
// module.exports = connectDB;
// export default connectDB

export default  connDB