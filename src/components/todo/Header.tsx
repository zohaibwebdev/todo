import CustomButton from '@/shared/custom-button/custom-button.component'
import CustomInput from '@/shared/custom-input/custom-input.component'
import { CustomButtonTypes } from '@/shared/custom-button/custom-button.types'
import React, {  useState } from 'react'
import { useTodoContext } from '@/context/todo-context/todo-context'

const Header = () => {
    const [todo, setTodo] = useState('')

    const {addTodo} = useTodoContext()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setTodo(value)
    }
    const handleAdd = ()=>{
       addTodo(todo)
       setTodo('')
    }
  return (
    <div>
        <h2 className='capitalize'>welcome to Todo App</h2>
        <div className='flex items-center gap-3'>
            <CustomInput  
                type="text"
                placeholder="ADD TODO"
                required
                changeEvent={handleInput} />
            <CustomButton  type={CustomButtonTypes.SUBMIT} onClick={handleAdd}>Add Todo</CustomButton>
        </div>
    </div>
  )
}

export default Header