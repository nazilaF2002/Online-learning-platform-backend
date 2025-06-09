import * as bcrypt from 'bcrypt';

export const hashPassword = async(password) => {
    const salt = bcrypt.genSalt(10);
    return hashPassword= bcrypt.hash(password,salt);
};

export const comparePassword = async (password,hash) => {
    return bcrypt.compare(password,hash);
};