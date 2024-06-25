import { CSSProperties, PropsWithChildren } from 'react'

export interface CustomButtonProps extends PropsWithChildren {
    onClick?: () => void
    type: CustomButtonTypes
    styles?: CSSProperties
    classNames?: string
    disable?: boolean
    hidden?: boolean
}

export enum CustomButtonTypes {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    LIGHT = 'LIGHT',
    BLUE = 'BLUE',
    SUBMIT = 'SUBMIT',
}