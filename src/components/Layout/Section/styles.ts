import styled from 'styled-components';
import { showContent } from '../../../styles/animations';

export const Container = styled.section<{ $isActive: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10rem 9% 2rem;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;

  ${({ $isActive }) =>
    $isActive &&
    `animation: ${showContent} 1.5s linear forwards;
     animation-delay: 1.6s;`}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 10rem 4% 2rem;
  }
`;
