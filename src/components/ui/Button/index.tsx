import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { Shine, StyledButton } from './styles';
import type { ButtonSize, ButtonVariant } from './styles';

type ButtonOwnProps<E extends ElementType> = {
  /** Permite renderizar como `a`, `Link` do router ou qualquer outro elemento. */
  as?: E;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

export function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...rest
}: ButtonProps<E>) {
  return (
    <StyledButton
      as={as as ElementType}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...rest}
    >
      {children}
      {variant === 'primary' && <Shine aria-hidden="true" />}
    </StyledButton>
  );
}
