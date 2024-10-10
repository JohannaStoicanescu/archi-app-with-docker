import bcrypt from "bcryptjs";
import User from "./user.model";

export class UserService {
  constructor() {}

  async getAll() {
    try {
      return await User.find();
    } catch (error) {
      console.error(error);
    }
  }

  async create(newUser: any) {
    try {
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      newUser.password = hashedPassword;
      const user = new User(newUser);
      return await user.save();
    } catch (error) {
      console.error(error);
    }
  }

  async connection(user: any) {
    try {
      const connectedUser = await User.findOne({ email: user.email });

      if (!connectedUser) {
        return null;
      }

      const isMatch = await bcrypt.compare(
        user.password,
        connectedUser.password
      );

      if (!isMatch) {
        return null;
      }

      return connectedUser;
    } catch (error) {
      console.error(error);
    }
  }
}
