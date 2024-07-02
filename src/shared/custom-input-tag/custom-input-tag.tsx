import {FC} from 'react'
import { IInputTag, defaultClass } from './types'
const CustomInputTag:FC<IInputTag> = ({
    label,
    type,
    className,
    changeEvent,
    placeholder,
    required,
    errorMessage
}) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changeEvent?.(e)
    }
  return (
    <div className='flex flex-col gap-1 items-center'>
        {label && <label>{label}</label>}
        <input type={type} className={`${defaultClass} ${ className}`} placeholder={placeholder} required={required} onChange={handleChange}
        style={{color:'rgb(17 24 39)'}}
        />

        {errorMessage && <p className='text-red-900'>{errorMessage}</p>}
    </div>
  )
}

export default CustomInputTag