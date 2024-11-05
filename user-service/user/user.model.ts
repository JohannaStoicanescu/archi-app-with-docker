import mongoose, { Schema } from "mongoose";

export interface User extends Document {
  email: string;
  password: string;
  role: boolean;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model<User>("User", UserSchema);
