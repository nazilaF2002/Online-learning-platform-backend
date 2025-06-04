import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel";
import dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,          
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,  
        callbackURL: `${process.env.BASE_URL}/api/v1/auth/google/callback` 
    }, 
    async ( profile, done) => {
        try {
            let existingUser = await User.findOne({ googleId: profile.id });
    
            if (!existingUser) {
                existingUser = await User.create({
                    googleId: profile.id,
                    fullName: profile.displayName,
                    email: profile.emails[0].value
                });
            }
            done(null, existingUser);
        } catch (err) {
            done(err, null);
        }}
    ));