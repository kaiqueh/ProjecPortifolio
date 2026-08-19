import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const SectionWrapper = styled.section<{ $divider: boolean; $columns: 1 | 2 }>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns === 2 ? '220px minmax(0, 1fr) minmax(0, 1fr)' : '220px minmax(0, 1fr)'};
  gap: ${({ theme }) => theme.spacing['2xl']};
  /* Sem divisória, o respiro fica só no topo para não dobrar o espaço
     entre seções consecutivas. */
  padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.page}
    ${({ theme, $divider }) => ($divider ? theme.spacing.section : '0')};
  border-top: ${({ theme, $divider }) =>
    $divider ? `1px solid ${theme.colors.hairline}` : 'none'};

  ${media.lg} {
    grid-template-columns: 170px minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};

    > *:nth-child(n + 3) {
      grid-column: 2;
    }
  }

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.md};

    > *:nth-child(n + 3) {
      grid-column: 1;
    }
  }
`;
