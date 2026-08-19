import styled from 'styled-components';

export const CardWrapper = styled.li`
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;

export const CategoryLabel = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
