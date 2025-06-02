import env from 'dotenv';
env.config();
import app from "./app.js";
import dbconected from './db.js';

const PORT = process.env.PORT || 5000;

dbconected();
app.listen(PORT,()=>{
    console.log(`APP  is runing on prot : ${PORT}`);
})