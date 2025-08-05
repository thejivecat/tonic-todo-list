import type { FC } from 'react';

interface SaveTodoButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SaveTodoButton: FC<SaveTodoButtonProps> = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
        className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded ring-1 ring-rose-300 shadow-md transition disabled:opacity-50"
  >
    Save
  </button>
);

export default SaveTodoButton;