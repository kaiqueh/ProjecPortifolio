import styled from 'styled-components';
import { showBars, hideBars } from '../../../styles/animations';

interface BarProps {
  $index: number;
}

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 50;
`;

export const Bar = styled.div<BarProps & { $isActive: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  animation: ${({ $isActive }) => ($isActive ? showBars : hideBars)} 0.5s ease-in-out both;
  animation-delay: ${({ $index }) => `calc(0.1s * ${$index})`};
`;
