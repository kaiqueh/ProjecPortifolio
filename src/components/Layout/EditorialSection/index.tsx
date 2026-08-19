import type { ReactNode } from 'react';

import { SectionLabel } from '../../ui/SectionLabel';
import { SectionWrapper } from './styles';

interface EditorialSectionProps {
  /** Rótulo monoespaçado exibido na coluna da esquerda. */
  label: string;
  children: ReactNode;
  /** Duas colunas de conteúdo, como em formação e certificações. */
  columns?: 1 | 2;
  divider?: boolean;
  id?: string;
}

/**
 * Bloco editorial padrão do portfólio: rótulo à esquerda, conteúdo à
 * direita. Em telas menores o rótulo passa a ficar acima do conteúdo.
 */
export function EditorialSection({
  label,
  children,
  columns = 1,
  divider = true,
  id,
}: EditorialSectionProps) {
  const labelId = id ? `${id}-label` : undefined;

  return (
    <SectionWrapper id={id} aria-labelledby={labelId} $divider={divider} $columns={columns}>
      <SectionLabel id={labelId}>{label}</SectionLabel>
      {children}
    </SectionWrapper>
  );
}
