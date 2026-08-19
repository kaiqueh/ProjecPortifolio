import styled from 'styled-components';

import { media } from '../../styles/theme';

export const ContactLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 500px;
  gap: clamp(28px, 4vw, 56px);
  padding: ${({ theme }) => theme.spacing.sectionLg} ${({ theme }) => theme.spacing.page} 70px;

  ${media.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const IntroColumn = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-stretch: 106%;
  line-height: 0.92;
  letter-spacing: ${({ theme }) => theme.letterSpacings.display};
  color: ${({ theme }) => theme.colors.text};
`;

export const Intro = styled.p`
  max-width: 400px;
  margin-top: 26px;
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FormColumn = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
`;
