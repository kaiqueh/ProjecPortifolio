import styled from 'styled-components';

import { media } from '../../../styles/theme';

/**
 * Grid modular de seis colunas. Cada card ocupa a largura definida pelo
 * seu destaque, criando a variação de tamanho da listagem.
 */
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 20px;
  padding: 20px ${({ theme }) => theme.spacing.page} 70px;

  li[data-highlight='large'] {
    grid-column: span 4;
  }

  li[data-highlight='wide'] {
    grid-column: span 3;
  }

  li[data-highlight='medium'] {
    grid-column: span 2;
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    li[data-highlight='large'],
    li[data-highlight='wide'] {
      grid-column: span 4;
    }
  }

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;

    li {
      grid-column: span 1 !important;
    }
  }
`;

export const GridItem = styled.li`
  display: flex;

  > * {
    width: 100%;
  }
`;

export const EmptyState = styled.p`
  padding: 20px ${({ theme }) => theme.spacing.page} 70px;
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.textMuted};
`;
