import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const ChallengeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ChallengePair = styled.li`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Panel = styled.div<{ $tone: 'challenge' | 'solution' }>`
  padding: 22px;
  border: 1px solid
    ${({ theme, $tone }) =>
      $tone === 'solution' ? 'rgba(243, 114, 44, 0.35)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme, $tone }) =>
    $tone === 'solution' ? 'rgba(243, 114, 44, 0.07)' : theme.colors.surface};
`;

export const PanelLabel = styled.h3<{ $tone: 'challenge' | 'solution' }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme, $tone }) =>
    $tone === 'solution' ? theme.colors.accentHover : theme.colors.textMuted};
`;

export const PanelText = styled.p<{ $tone: 'challenge' | 'solution' }>`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme, $tone }) =>
    $tone === 'solution' ? theme.palette.platinum : theme.colors.textSecondary};
`;
