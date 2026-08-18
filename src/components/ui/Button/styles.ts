import styled, { css } from 'styled-components';

interface ButtonProps {
  $variant?: 'primary' | 'ghost';
}

export const Container = styled.a<ButtonProps>`
  display: inline-block;
  padding: 1rem 3rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  ${({ $variant = 'primary', theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.primary};
          border: 0.2rem solid ${theme.colors.primary};
          box-shadow: 0 0 1rem ${theme.colors.primary};
          color: ${theme.colors.bg};

          &:hover {
            background: transparent;
            color: ${theme.colors.primary};
            box-shadow: none;
          }
        `
      : css`
          background: transparent;
          border: 0.2rem solid ${theme.colors.primary};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.bg};
            box-shadow: 0 0 1rem ${theme.colors.primary};
          }
        `}
`;
