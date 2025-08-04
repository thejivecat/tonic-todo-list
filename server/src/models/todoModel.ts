import mongoose from 'mongoose';

export interface ITodo {
  text: string;
  completed: boolean;
  user: string;
}

const todoSchema = new mongoose.Schema<ITodo>(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;