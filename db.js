import mongoose from 'mongoose';

function dbconected(){
  mongoose
   .connect(process.env.MONGO_URL)
   .then ( ()=> console.log('database connected !'))
   .catch( (err) => console.log(`db error : ${err}`));
};

export default dbconected;