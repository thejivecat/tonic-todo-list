import NewTodoInput from './TodoInput';
import type { ChangeEvent } from 'react';

interface TodoInputListProps {
  inputs: string[];
  onInputChange: (index: number, value: string) => void;
}

const TodoInputList = ({ inputs, onInputChange }: TodoInputListProps) => (
  <>
    {inputs.map((text, idx) => (
      <NewTodoInput
        key={idx}
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onInputChange(idx, e.target.value)
        }
      />
    ))}
  </>
);

export default TodoInputList;