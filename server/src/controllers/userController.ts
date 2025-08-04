import User from '../models/userModel';
import { Request, Response } from 'express';

export const findOrCreateUser = async (req: Request, res: Response) => {
  try {
    const name = req.body.name?.trim().toLowerCase();
    if (!name) return res.status(400).json({ message: 'Name is required' });

    let user = await User.findOne({ name });
    if (!user) {
      user = await User.create({ name });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};