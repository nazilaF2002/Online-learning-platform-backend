import env from 'dotenv';
env.config();
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`APP  is runing on prot : ${PORT}`);
})