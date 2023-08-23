import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './input.module.scss'

export type CardsInputProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  variant?: 'standard' | 'password' | 'search'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const CardsInput = <T extends ElementType = 'input'>(
  props: CardsInputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardsInputProps<T>>
) => {
  const { variant = 'standard', fullWidth, className, as: Component = 'input', ...rest } = props
  const hasIcon = variant === 'password' || variant === 'search'

  return (
    <div className={hasIcon ? s.inputWithIcon : ''}>
      <Component
        className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        {...rest}
      />
    </div>
  )
}
