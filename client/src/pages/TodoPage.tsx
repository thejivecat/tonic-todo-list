import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../api/todoApi';
import TodoList from '../components/TodoList';
import TodoInputList from '../components/TodoInputList';
import Tabs from '../components/Tabs';
import SaveTodoButton from '../components/SaveTodoButton';
import type { Todo } from '../types/todo';

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoInputs, setNewTodoInputs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'unfolding' | 'attained'>('unfolding');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      navigate('/');
      return;
    }
    fetchTodos();
  }, [tab]);

  const fetchTodos = async () => {
    try {
      const { data } = await getTodos(username!);
      const filtered = data.filter((todo: Todo) =>
        tab === 'unfolding' ? !todo.completed : todo.completed
      );
      setTodos(filtered);
    } catch (err) {
      console.error('Failed to fetch todos', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddInput = () => {
    setNewTodoInputs((prev) => [...prev, '']);
  };

  const handleInputChange = (index: number, value: string) => {
    const updated = [...newTodoInputs];
    updated[index] = value;
    setNewTodoInputs(updated);
  };

  const handleSaveTodos = async () => {
    try {
      const createPromises = newTodoInputs
        .filter((text) => text.trim())
        .map((text) => createTodo(text.trim(), username!));
      await Promise.all(createPromises);
      setNewTodoInputs([]);
      fetchTodos();
    } catch (err) {
      console.error('Failed to create todos', err);
    }
  };

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      await updateTodo(id, { completed }, username!);
      fetchTodos();
    } catch (err) {
      console.error('Failed to update todo', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id, username!);
      fetchTodos();
    } catch (err) {
      console.error('Failed to delete todo', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4 text-slate-200 bg-[#0b0c1d] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">The Chamber of Attainment</h1>

      <Tabs activeTab={tab} onTabChange={setTab} />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : todos.length === 0 ? (
        <p className="text-center text-slate-400 mb-4">Welcome {username}. Your journey starts here</p>
      ) : (
        <TodoList todos={todos} onToggle={handleToggleComplete} onDelete={handleDelete} />
      )}

      <TodoInputList inputs={newTodoInputs} onInputChange={handleInputChange} />

      <div className="flex gap-2">
        <button
          onClick={handleAddInput}
          className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded shadow-md"
        >
          ➕
        </button>
        {newTodoInputs.length > 0 && (
          <SaveTodoButton onClick={handleSaveTodos} disabled={newTodoInputs.length === 0} />
        )}
      </div>
    </div>
  );
};

export default TodoPage;