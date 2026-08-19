import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../styles/theme';

/** Fecha o corpo do detalhe antes da barra de navegação final. */
export const DetailSections = styled.div`
  padding-bottom: clamp(48px, 6vw, 76px);
`;

export const ContextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ContextParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const RoleItem = styled.li`
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  span {
    padding-top: 4px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.caption};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FeatureItem = styled.li`
  padding: 14px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.lead};
  color: ${({ theme }) => theme.palette.platinum};
`;

export const ResultsPanel = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DetailFooter = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 28px ${({ theme }) => theme.spacing.page};
  border-top: 1px solid ${({ theme }) => theme.colors.hairline};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const FooterLink = styled(Link)<{ $accent?: boolean }>`
  color: ${({ theme, $accent }) => ($accent ? theme.colors.accent : theme.colors.textMuted)};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
