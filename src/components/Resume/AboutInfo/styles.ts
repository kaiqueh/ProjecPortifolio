import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

export const Item = styled.div`
  padding: 0 0 0.5rem;

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1rem;
  font-size: 1.8rem;
`;
