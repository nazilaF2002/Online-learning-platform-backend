import express from 'express';
import userRoutes from './routes/userRoutes.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/',userRoutes);

export default app;