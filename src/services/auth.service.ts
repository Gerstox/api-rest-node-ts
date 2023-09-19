import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const loginUser = async (auth: Auth) => {
  const existsUser = await UserModel.findOne({email: auth.email});
  if (!existsUser) return 'INVALID_DATA';
  const passwordHash = existsUser.password;
  const isValid = await verify(auth.password, passwordHash);
  if(!isValid) return 'INVALID_DATA';
  const token = generateToken(existsUser.email);
  const data = {
    token,
    user: {
      email: existsUser.email,
      name: existsUser.name
    }
  }
  return data;
};

const registerUser = async (user: User) => {
  const existsUser = await UserModel.findOne({email: user.email});
  if (existsUser) return 'ALREADY_USER';
  const passwordEncrypt = await encrypt(user.password);
  const newUser: User = await UserModel.create({...user, password: passwordEncrypt});
  return newUser;
};

export {
  loginUser,
  registerUser
};
