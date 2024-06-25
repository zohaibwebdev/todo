import { useTodoContext } from '@/context/todo-context/todo-context';
import CustomButton from '@/shared/custom-button/custom-button.component';
import { CustomButtonTypes } from '@/shared/custom-button/custom-button.types';
import React from 'react';

const Todos = () => {
  const { todos, deleteTodo } = useTodoContext();

  const handleDelete = (id:string) => {
        deleteTodo(id)
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className='bg-gray-400 my-1 rounded-md p-1'>
          <p>{todo.todo}</p>
          <div className='flex justify-center items-center my-2'>
            <CustomButton type={CustomButtonTypes.LIGHT} onClick={() => handleDelete(todo.id)}>
              Delete
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
