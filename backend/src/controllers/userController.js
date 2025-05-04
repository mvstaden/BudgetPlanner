import { generateToken } from "../lib/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    //Check for empty values
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //Check password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    //check if user exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      //If user create generateToken
      generateToken(newUser._id, res);
      await newUser.save();
      return res.status(200).json({ message: "User created", user: newUser });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error signing up", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Check if user entered fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //Check password with hashed password
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error loggin in", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("auth_token", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log("Error logging out");
    return res.status(500).json({ message: "Server error" });
  }
};

export const userAuth = async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.log("Error getting auth user", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
