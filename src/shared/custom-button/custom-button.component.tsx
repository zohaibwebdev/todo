import React, { FC } from 'react'
import { CustomButtonProps } from './custom-button.types'
import { customButtonStyles } from './custom-button.styles'

const CustomButton: FC<CustomButtonProps> = ({ onClick, type, styles, classNames, children, hidden, disable }) => {
    if (hidden) {
        return null
    }
    return (
        <button
            disabled={disable}
            style={styles}
            className={`${customButtonStyles[type]} ${classNames}`}
            onClick={() => onClick?.()}
        >
            {children}
        </button>
    )
}

export default CustomButton