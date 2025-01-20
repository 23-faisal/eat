import { Request, Response } from "express";
import User from "../models/user.model";

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;

    const userExists = await User.findOne({ auth0Id });

    if (userExists) {
      res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "New user created successfully!",
      user: newUser.toObject(),
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
