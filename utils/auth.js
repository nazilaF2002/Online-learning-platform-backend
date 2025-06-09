import * as bcrypt from 'bcrypt';

export const hashPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return hashPassword= await bcrypt.hash(password,salt);
};

export const comparePassword = async (password,hash) => {
    return bcrypt.compare(password,hash);
};