import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  padding: 26px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.transitions.default};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Period = styled.p<{ $current: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 1.7;
  color: ${({ theme, $current }) => ($current ? theme.colors.accent : theme.colors.textMuted)};
`;

export const Role = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.cardTitle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const Company = styled.p`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Description = styled.p`
  max-width: 640px;
  margin-top: 14px;
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
