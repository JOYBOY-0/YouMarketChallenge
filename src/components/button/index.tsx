import React, { type HTMLAttributes } from 'react'
import './styles.css'

interface ButtonProps<T extends React.ElementType> extends HTMLAttributes<T> {
  disabled?: boolean
  href?: string
  as?: T
}

function Button<T extends React.ElementType = 'button'>({
  className = '',
  disabled,
  children,
  as,
  ...props
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const El = as ?? 'button'
  const style = `button ${disabled ? 'button-disabled' : ''} ${className}`

  return (
    <El className={style} {...props}>
      {children}
    </El>
  )
}

export default Button
