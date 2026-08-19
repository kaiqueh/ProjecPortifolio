import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.blur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.blur};

  ${media.xs} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Address = styled.a`
  display: block;
  margin-top: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: anywhere;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CopyButton = styled.button`
  flex: none;
  padding: 11px 18px;
  border: 1px solid rgba(243, 114, 44, 0.5);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(243, 114, 44, 0.12);
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.accentHover};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(243, 114, 44, 0.22);
  }
`;

export const Note = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSubtle};
`;
