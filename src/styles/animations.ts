import { keyframes } from 'styled-components';

export const showBars = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

export const hideBars = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

export const showContent = keyframes`
  100% {
    visibility: visible;
    opacity: 1;
    overflow: auto;
  }
`;

export const headerActive = keyframes`
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const rotateBorder = keyframes`
  100% { transform: rotate(360deg); }
`;

export const displayText = keyframes`
  0%, 20% { opacity: 1; }
  25%, 100% { opacity: 0; }
`;

export const fillText = keyframes`
  10%, 100% { width: 0; }
  70%, 90% { width: 100%; }
`;

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(2rem); }
  to { opacity: 1; transform: translateY(0); }
`;

export const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-3rem); }
  to { opacity: 1; transform: translateX(0); }
`;

export const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(3rem); }
  to { opacity: 1; transform: translateX(0); }
`;
