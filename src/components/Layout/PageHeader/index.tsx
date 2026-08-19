import type { ReactNode } from 'react';

import { SectionLabel } from '../../ui/SectionLabel';
import { Description, HeaderGrid, HeaderWrapper, Title } from './styles';

interface PageHeaderProps {
  /** Numeração editorial da seção, ex.: "02 — SOBRE MIM". */
  label: string;
  title: string;
  /** Texto de apoio exibido ao lado do título. */
  description?: string;
  /** Conteúdo alternativo à direita, como os filtros da listagem. */
  aside?: ReactNode;
  asideWidth?: string;
  /** Halos de luz posicionados no fundo do cabeçalho. */
  glow?: ReactNode;
}

/** Abertura das páginas internas: rótulo, título em escala e apoio. */
export function PageHeader({
  label,
  title,
  description,
  aside,
  asideWidth = '420px',
  glow,
}: PageHeaderProps) {
  return (
    <HeaderWrapper>
      {glow}
      <HeaderGrid $asideWidth={asideWidth}>
        <div>
          <SectionLabel tone="accent">{label}</SectionLabel>
          <Title>{title}</Title>
        </div>
        {description ? <Description>{description}</Description> : aside}
      </HeaderGrid>
    </HeaderWrapper>
  );
}
