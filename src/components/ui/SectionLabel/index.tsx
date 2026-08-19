import type { ElementType, ReactNode } from 'react';

import { StyledSectionLabel } from './styles';

interface SectionLabelProps {
  children: ReactNode;
  /** `accent` destaca a seção atual; `muted` é o rótulo editorial padrão. */
  tone?: 'muted' | 'accent';
  /** Ajusta o nível semântico conforme a hierarquia da página. */
  as?: ElementType;
  id?: string;
}

/** Rótulo monoespaçado que numera e nomeia as seções do portfólio. */
export function SectionLabel({ children, tone = 'muted', as = 'h2', id }: SectionLabelProps) {
  return (
    <StyledSectionLabel as={as} id={id} $tone={tone}>
      {children}
    </StyledSectionLabel>
  );
}
