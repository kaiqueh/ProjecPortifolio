import styled from 'styled-components';

export const CardWrapper = styled.li`
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: rgba(243, 114, 44, 0.5);
    transform: translateY(-3px);
  }
`;

export const Index = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h3`
  margin-top: 14px;
  font-size: 17px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textMuted};
`;
