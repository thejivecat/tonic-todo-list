import { Request, Response } from 'express';
import Todo from '../models/todoModel';

export const getTodos = async (req: Request, res: Response) => {
  const user = req.query.user as string;
  if (!user) return res.status(400).json({ message: 'Missing user name' });

  try {
    const todos = await Todo.find({ user });
    res.json(todos);
  } catch {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const user = req.query.user as string;
  const { text } = req.body;

  if (!text || !user) {
    return res.status(400).json({ message: 'Missing text or user' });
  }

  try {
    const todo = await Todo.create({ text, user });
    res.status(201).json(todo);
  } catch {
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const user = req.query.user as string;
  const { id } = req.params;
  if (!user) return res.status(400).json({ message: 'Missing user name' });

  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user },
      req.body,
      { new: true }
    );
console.log('Update payload:', req.body);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json(todo);
  } catch {
    res.status(500).json({ message: 'Failed to update todo' });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const user = req.query.user as string;
  const { id } = req.params;

  if (!user) return res.status(400).json({ message: 'Missing user name' });

  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user });

    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};