import styled from 'styled-components';

export const Container = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  border-right: 0.2rem solid ${({ theme }) => theme.colors.primary};
  padding-right: 0.2rem;
`;
