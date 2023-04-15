import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import UserOAuth from './models/auth';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    async function(accessToken,refreshToken,profile,done){
        try {
            const user=await UserOAuth.findOne({goodeId:profile.id});
            if(user){
                done(null,user);
            }
            else{
                user= await UserOAuth.create({
                    googleId:profile.id,
                    name:profile.displayName,
                    id:[]
                });
                done(null,user);
            }
        } catch (e) {
            console.log(e);
        }
    }));
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    UserOAuth.findById(id,(err,user)=>{
        done(err,user);
    });
});
