import { CSSProperties, PropsWithChildren } from "react";

export interface ICustomButton extends PropsWithChildren {
    className?:string
    hidden?:boolean
    disable?:boolean
    styles?:CSSProperties
    type:CustomButtonTypes
    onClick?:()=>void
}

enum CustomButtonTypes {
    AWAIS = 'AWAIS',
    ZOHAIB = 'ZOHAIB'
}

export const customButtonStyles = {
    [CustomButtonTypes.AWAIS]:'text-white bg-blue-600 text-lg inline-block border rounded-md px-3 py-2 mt-1',
    [CustomButtonTypes.ZOHAIB]:'text-white bg-gray-600 text-lg inline-block border rounded-md px-3 py-2 mt-1',
}