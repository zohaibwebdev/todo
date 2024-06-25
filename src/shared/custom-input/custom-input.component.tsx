import { FC } from 'react'
import { InputPropsTypes } from './custom-input.types'

const CustomInput: FC<InputPropsTypes> = ({
    label,
    type,
    placeholder,
    required,
    errorMessage,
    name,
    defaultValue,
    className,
    changeEvent,
    readonly,
    labelClasses,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeEvent?.(e)
    }

    return (
        <div className="flex flex-col gap-1 items-center text-gray-800 ">
            {label && <label className={labelClasses}>{label}:</label>}
            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                required={required}
                onChange={handleChange}
                className={`rounded-md text-gray-800 ${className}`}
                readOnly={readonly}
                style={{ color: 'rgb(31 41 55)', padding:'2px 4px' }}
            />
            {errorMessage && <div className="text-sm text-red-600 font-bold">{errorMessage}</div>}
        </div>
    )
}

export default CustomInput