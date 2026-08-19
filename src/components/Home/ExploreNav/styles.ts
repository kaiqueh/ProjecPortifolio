import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const ExploreSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionLg} ${({ theme }) => theme.spacing.page}
    ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.hairline};
`;

export const ExploreList = styled.ul`
  margin-top: 34px;

  li:last-child a {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const ExploreRow = styled(Link)`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) 340px 40px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition:
    padding-left ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};

  &:hover {
    padding-left: 16px;
    background: rgba(243, 114, 44, 0.05);
  }

  ${media.lg} {
    grid-template-columns: 48px minmax(0, 1fr) 40px;
    gap: ${({ theme }) => theme.spacing.md};
  }

  ${media.sm} {
    padding: 22px 0;
  }
`;

export const RowIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const RowTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.navItem};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-stretch: 104%;
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  color: ${({ theme }) => theme.colors.text};
`;

export const RowDescription = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};

  ${media.lg} {
    display: none;
  }
`;

export const RowArrow = styled.span`
  justify-self: end;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accent};
`;
