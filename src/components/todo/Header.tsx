
import React, {  useState } from 'react'
import { useTodoContext } from '@/context/todo-context/todo-context'
import CustomInputTag from '@/shared/custom-input-tag/custom-input-tag'
import CustomButton from '@/shared/custom-button-tag/custom-button-component'
import { customButtonStyles } from '@/shared/custom-button-tag/custom-button-types'

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
            <CustomInputTag  
                type="text"
                placeholder="ADD TODO"
                required
                changeEvent={handleInput} />
            <CustomButton  type={customButtonStyles.AWAIS} onClick={handleAdd}>Add Todo</CustomButton>
        </div>
    </div>
  )
}

export default Header