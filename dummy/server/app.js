//modules
import express from "express"
import cors from "cors"
import router from "./router/route.js"
import cookieParser from "cookie-parser"
// import connDB from "./db/conn.js"
import connectDB from "./db/conn.js"
import  dotenv,{config} from "dotenv"
// import passport from "passport"
// const dotenv = require("dotenv");

const app = express();
// connDB();

//middle wares

config({
    path:'./db/.env'
})

app.use(cookieParser());
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
dotenv.config();

const port = process.env.PORT || 4000;

app.get('/', cors(), (req, res, next) => {
    
})

app.listen(port, () => {
    console.log(`Server is running at port No: ${port}`);
});

export default port
connectDB();