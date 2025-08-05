import type { ChangeEvent } from 'react';

interface TodoInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoInput = ({ value, onChange }: TodoInputProps) => (
  <input
    value={value}
    onChange={onChange}
    className="w-full mb-2 px-4 py-2 border rounded bg-gray-800 border-gray-600 text-white font-medieval placeholder-gray-400"
    placeholder="Enter new quest..."
  />
);

export default TodoInput;