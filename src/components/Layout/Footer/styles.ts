import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: 70px ${({ theme }) => theme.spacing.page} 34px;

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
    padding-top: 56px;
  }
`;

export const FooterName = styled.p`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.palette.carbonBlack};
  overflow-wrap: anywhere;
`;

export const FooterEmail = styled.a`
  display: inline-block;
  margin-top: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textSubtle};
  overflow-wrap: anywhere;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
