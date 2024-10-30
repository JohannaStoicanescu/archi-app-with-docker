import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "./user.model";

export class UserService {
  constructor() {}

  async create(newUserData: { email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);
    const user = new User({
      ...newUserData,
      password: hashedPassword,
      role: true,
    });

    return await user.save();
  }

  async login(userCredentials: { email: string; password: string }) {
    const user = await User.findOne({ email: userCredentials.email });

    if (!user) {
      throw new Error("Invalid email");
    }

    const isMatch = await bcrypt.compare(
      userCredentials.password,
      user.password
    );

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    return jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
  }
}
