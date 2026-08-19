import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.sectionLg} ${({ theme }) => theme.spacing.page}
    ${({ theme }) => theme.spacing.section};
`;

export const HeaderGrid = styled.div<{ $asideWidth: string }>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
  display: grid;
  grid-template-columns: minmax(0, 1fr) ${({ $asideWidth }) => $asideWidth};
  gap: clamp(24px, 4vw, 60px);
  align-items: end;

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Title = styled.h1`
  margin-top: 26px;
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-stretch: 106%;
  line-height: 0.92;
  letter-spacing: ${({ theme }) => theme.letterSpacings.display};
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: anywhere;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
