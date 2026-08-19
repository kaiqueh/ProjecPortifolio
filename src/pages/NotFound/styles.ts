import styled from 'styled-components';

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sectionLg} ${({ theme }) => theme.spacing.page};
`;

export const NotFoundTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 0.92;
  letter-spacing: ${({ theme }) => theme.letterSpacings.display};
  color: ${({ theme }) => theme.colors.text};
`;

export const NotFoundText = styled.p`
  max-width: 460px;
  font-size: ${({ theme }) => theme.fontSizes.lead};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
