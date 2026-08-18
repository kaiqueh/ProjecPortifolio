import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  margin-bottom: 2rem;
  grid-column: 1 / -1;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

export const DetailsColumn = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    order: 1;
  }
`;

export const CarouselColumn = styled.div``;
