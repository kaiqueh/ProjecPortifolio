import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 34px;

  ${media.xs} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SocialCard = styled.a`
  display: block;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

export const SocialName = styled.span`
  display: block;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const SocialPurpose = styled.span`
  display: block;
  margin-top: 6px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.textMuted};
`;
