import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const Icon = styled.i`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-right: 1.5rem;
`;

export const Detail = styled.div`
  p:first-child {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
