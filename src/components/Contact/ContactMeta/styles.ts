import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const MetaGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 34px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${media.xs} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const MetaLabel = styled.dt`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const MetaValue = styled.dd`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
