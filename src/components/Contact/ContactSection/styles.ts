import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoColumn = styled.div`
  align-self: center;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;
