interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex justify-between items-center py-2 border-b border-gray-600 text-gray-200 font-medieval">
      <span>{todo.text}</span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo._id, !todo.completed)}
          className="text-sm text-blue-400 hover:underline"
        >
          {todo.completed ? 'Mark Incomplete' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="text-sm text-red-400 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;