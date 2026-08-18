import type { ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  download?: boolean;
  onClick?: () => void;
}

export function Button({ children, href, variant = 'primary', download, onClick }: ButtonProps) {
  return (
    <S.Container
      href={href}
      $variant={variant}
      download={download || undefined}
      onClick={onClick}
    >
      {children}
    </S.Container>
  );
}
