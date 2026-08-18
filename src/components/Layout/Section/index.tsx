import type { ReactNode } from 'react';
import * as S from './styles';

interface SectionProps {
  children: ReactNode;
  isActive: boolean;
  id: string;
}

export function Section({ children, isActive, id }: SectionProps) {
  return (
    <S.Container $isActive={isActive} id={id}>
      {children}
    </S.Container>
  );
}
