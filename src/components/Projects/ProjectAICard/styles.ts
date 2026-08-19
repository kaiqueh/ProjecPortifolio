import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const AICard = styled.div`
  padding: 26px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.glass.backgroundStrong};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;

export const AIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const AILabel = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const AIText = styled.p`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const EstimateRow = styled.div`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const EstimateValue = styled.p`
  font-size: clamp(32px, 4vw, 44px);
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.accent};
`;

export const EstimateNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
`;
