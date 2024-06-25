import React from 'react'
import Header from './Header'
import Todos from './Todos'
import TodoContainer from '@/context/todo-context/todo-context-container'
const Todo = () => {
  return (
    <div className='bg-gray-600 p-2 rounded-md flex flex-col'>
       <TodoContainer>
         <Header/>
         <Todos />
        </TodoContainer>
    </div>
  )
}

export default Todo