import { useLocale } from '../../../hooks/useLocale';
import type { WorkPrinciple } from '../../../types';
import { CardWrapper, Description, Index, Title } from './styles';

interface WorkPrincipleCardProps {
  principle: WorkPrinciple;
  index: number;
}

/** Característica da forma de trabalho, numerada como um item editorial. */
export function WorkPrincipleCard({ principle, index }: WorkPrincipleCardProps) {
  const { localize } = useLocale();

  return (
    <CardWrapper>
      <Index>{String(index + 1).padStart(2, '0')}</Index>
      <Title>{localize(principle.title)}</Title>
      <Description>{localize(principle.description)}</Description>
    </CardWrapper>
  );
}
