import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor= 'bg-black',
    textColor= 'text-slate-500',
    className = "",
    ...props
}) {

  return (
    <button className={`button p-4 relative border border-white inline-flex items-center justify-center h-11 transition-colors hover:text-color-6 ${bgColor} ${textColor} ${className}`} {...props} >
         {children}
    </button>
  )
}

export default Button