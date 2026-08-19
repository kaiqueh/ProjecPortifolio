import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const TechGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  ${media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.xs} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const TechCard = styled.li`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`;

export const TechName = styled.h3`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border: 1px dashed ${({ theme }) => theme.colors.borderStrong};
    border-radius: 5px;
  }
`;

export const TechRole = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

/** Resumo técnico em uma linha, no tom de metadado do layout. */
export const ArchitectureSummary = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin-top: 14px;
  padding: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 1.8;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textMuted};

  dt {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  dd {
    margin-right: 8px;
  }
`;

export const SummaryPair = styled.div`
  display: flex;
  gap: 8px;
`;
