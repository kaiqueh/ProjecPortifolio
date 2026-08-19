import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { media } from '../../../styles/theme';
import type { ProjectHighlight } from '../../../types';

export const Card = styled.article<{ $highlight: ProjectHighlight }>`
  position: relative;
  display: flex;
  flex-direction: ${({ $highlight }) => ($highlight === 'wide' ? 'row' : 'column')};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
  transition:
    border-color ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow};

  &:hover,
  &:focus-within {
    border-color: rgba(243, 114, 44, 0.55);
    transform: translateY(-4px);
  }

  ${media.sm} {
    flex-direction: column;
  }
`;

export const Body = styled.div<{ $highlight: ProjectHighlight }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  padding: ${({ $highlight }) => ($highlight === 'large' ? '24px' : '20px')};
`;

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h3<{ $highlight: ProjectHighlight }>`
  margin-top: ${({ $highlight }) => ($highlight === 'large' ? '14px' : '12px')};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  color: ${({ theme }) => theme.colors.text};

  ${({ $highlight, theme }) =>
    $highlight === 'large'
      ? css`
          font-size: ${theme.fontSizes.cardTitleLg};
          font-stretch: 104%;
        `
      : css`
          font-size: ${theme.fontSizes.cardTitle};
        `}
`;

/**
 * O título é o link do card: o pseudo-elemento cobre toda a área, então o
 * card inteiro é clicável sem aninhar âncoras.
 */
export const TitleLink = styled(Link)`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`;

export const Summary = styled.p<{ $highlight: ProjectHighlight }>`
  max-width: 520px;
  margin-top: ${({ $highlight }) => ($highlight === 'large' ? '12px' : '10px')};
  font-size: ${({ theme, $highlight }) =>
    $highlight === 'large' ? theme.fontSizes.bodyLg : theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.65;
  color: ${({ theme, $highlight }) =>
    $highlight === 'large' ? theme.colors.textSecondary : theme.colors.textMuted};
`;

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 18px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: auto;
  padding-top: 22px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const DetailsCue = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

/** Links externos ficam acima da área clicável do card. */
export const ExternalLink = styled.a`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
