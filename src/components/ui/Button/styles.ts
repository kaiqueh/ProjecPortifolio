import styled, { css } from 'styled-components';

import { sweep } from '../../../styles/animations';

export type ButtonVariant = 'primary' | 'ghost' | 'underline';
export type ButtonSize = 'sm' | 'md';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.onAccent};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    box-shadow: ${({ theme }) => theme.glow.accentShadow};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.glow.accentShadowHover};
    }
  `,
  ghost: css`
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.palette.platinum};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      background: ${({ theme }) => theme.colors.accentSurface};
    }
  `,
  underline: css`
    padding: 0 0 4px;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.textTertiary};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
    }
  `,
} as const;

const sizes = {
  sm: css`
    padding: 13px 20px;
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,
  md: css`
    padding: 16px 28px;
    font-size: ${({ theme }) => theme.fontSizes.body};
  `,
} as const;

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-family: ${({ theme }) => theme.fonts.display};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  transition:
    transform ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  ${({ $size }) => sizes[$size]}
  ${({ $variant }) => variants[$variant]}

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
    box-shadow: none;
  }
`;

/** Brilho que atravessa o botão de destaque, reforçando a chamada principal. */
export const Shine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  animation: ${sweep} 3.4s ease-in-out infinite;
  pointer-events: none;
`;
