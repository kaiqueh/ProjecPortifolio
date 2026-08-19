import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.page}
    ${({ theme }) => theme.spacing.section};
`;

export const BackLink = styled(Link)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HeaderGrid = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: clamp(24px, 4vw, 56px);
  align-items: end;
  margin-top: 30px;

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Meta = styled.p`
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.displaySm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-stretch: 106%;
  line-height: 0.94;
  letter-spacing: ${({ theme }) => theme.letterSpacings.display};
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: anywhere;
`;

export const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
`;
