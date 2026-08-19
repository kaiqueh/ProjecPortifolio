import styled from 'styled-components';

import { media } from '../../styles/theme';

export const SkillGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PrincipleGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  ${media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.xs} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const GoalsStatement = styled.p`
  max-width: 720px;
  font-size: ${({ theme }) => theme.fontSizes.statement};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.55;
  color: ${({ theme }) => theme.palette.platinum};
`;

export const GoalsActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 38px;
`;
