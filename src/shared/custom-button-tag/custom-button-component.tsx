import React, { FC } from 'react'
import { ICustomButton, customButtonStyles } from './custom-button-types'

const CustomButton:FC<ICustomButton>= ({
    type,styles,className,disable,hidden,children,onClick
}) => {
    if(hidden){
        return null
    }
  return (
    <button
        className={`${customButtonStyles[type]} ${className}`}
        style={styles}
        disabled={disable}
        onClick={()=>onClick?.()}
    >{children}</button>
  )
}

export default CustomButton