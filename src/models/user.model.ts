import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: 'Soy la descripcion'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserModel = model('users', UserSchema);

export default UserModel;
