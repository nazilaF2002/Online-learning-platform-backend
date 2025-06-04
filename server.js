import env from 'dotenv';
env.config();
import app from "./app.js";
import dbconected from './config/db.js';

const PORT = process.env.PORT || 3000;

dbconected();
app.listen(PORT,()=>{
    console.log(`APP  is runing on prot : ${PORT}`);
})