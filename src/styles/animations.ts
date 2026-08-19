import { keyframes } from 'styled-components';

/** Entrada progressiva de blocos de conteúdo. */
export const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(26px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

/** Aparição suave, sem deslocamento. */
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/** Movimento lento dos halos de luz do fundo. */
export const drift = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(4%, -3%, 0) scale(1.12);
  }
`;

/** Pulso do indicador de status. */
export const blink = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.15;
  }
`;

/** Brilho que atravessa os botões de destaque. */
export const sweep = keyframes`
  from {
    transform: translateX(-120%);
  }
  to {
    transform: translateX(220%);
  }
`;

/** Entrada lateral do menu mobile. */
export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
