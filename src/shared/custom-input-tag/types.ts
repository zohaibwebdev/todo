export interface IInputTag {
    label?: string
    type?: 'text' | 'email' |'number' |'password'
    className?: string
    changeEvent?:(e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    required?:boolean
    errorMessage?: string
}

export const defaultClass = "text-gray-600 p-1"