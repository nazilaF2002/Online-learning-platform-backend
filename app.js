import express from 'express';
import passport from 'passport';
import './config/passport.js';
import './middlewares/passport_auth.js';
import userRoutes from './routes/userRoutes.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api/v1/',userRoutes);
app.get('/home',(req,res)=>{
 res.send(`<a href='/api/v1/auth/google'>Login with Google</a>`);
});
export default app;