import express from 'express';
import { register,login } from '../controllers/userController.js';
import { googleAuth,googleCallback } from '../middlewares/passport_auth.js';
const router = express.Router();


router.post('/register',register);
router.post('/login',login);

// login with google account 
router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleCallback, (req, res) => {
  res.send("welcome ");
});

export default router;