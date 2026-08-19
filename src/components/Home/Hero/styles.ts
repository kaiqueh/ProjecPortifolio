import styled from 'styled-components';

import { rise } from '../../../styles/animations';
import { media } from '../../../styles/theme';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: min(740px, calc(100vh - 120px));
  overflow: hidden;
`;

/** Clareia levemente o topo, dando profundidade ao fundo preto. */
export const TopSheen = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 26%);
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.page};
`;

export const StatusLine = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  animation: ${rise} 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  ${media.sm} {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Role = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StatusDivider = styled.span`
  width: 64px;
  height: 1px;
  background: ${({ theme }) => theme.colors.borderStrong};

  ${media.sm} {
    display: none;
  }
`;

export const Name = styled.h1`
  max-width: 840px;
  font-size: ${({ theme }) => theme.fontSizes.displayLg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-stretch: 106%;
  line-height: 0.9;
  letter-spacing: ${({ theme }) => theme.letterSpacings.display};
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: anywhere;
  animation: ${rise} 0.8s 0.08s cubic-bezier(0.2, 0.8, 0.2, 1) both;
`;

export const Summary = styled.p`
  max-width: 460px;
  margin-top: 34px;
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  animation: ${rise} 0.9s 0.16s cubic-bezier(0.2, 0.8, 0.2, 1) both;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 26px;
  margin-top: 42px;
  animation: ${rise} 1s 0.24s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  ${media.xs} {
    gap: 18px;

    > a:first-child {
      width: 100%;
    }
  }
`;

export const HeroBar = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.base};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 18px ${({ theme }) => theme.spacing.page};
  border-top: 1px solid ${({ theme }) => theme.colors.hairline};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  line-height: 1;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const ScrollHint = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textMuted};

  /* Apenas a seta recebe o destaque; o texto segue no tom de apoio. */
  span:last-child {
    color: ${({ theme }) => theme.colors.accent};
  }

  ${media.xs} {
    span:first-child {
      display: none;
    }
  }
`;
