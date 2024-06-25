'use client'
import React, { FC, PropsWithChildren, useState } from 'react'
import { ITodoContext, defaultTodos } from './todo-context.types'
import { TodoProvider } from './todo-context'

const TodoContainer:FC<PropsWithChildren> = ({children}) => {
    const [state, setState]=useState<ITodoContext>(defaultTodos)
    
    function generateRandomId(length = 10) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      
   
   
      const addTodo = (todo:string)=>{
        const randomId = generateRandomId();
        const newTodo = {todo:todo, id: randomId}
        setState((prev)=>({
            ...state,
            todos:[...state.todos,newTodo]
        }))
    }

        const deleteTodo =(id:string)=>{
            setState((prev) => ({
                ...prev,
                todos: prev.todos.filter((todo) => todo.id !== id),
              }));
        }
  return (
    <TodoProvider value={{...state, addTodo, deleteTodo}}>{children}</TodoProvider>
  )
}

export default TodoContainer