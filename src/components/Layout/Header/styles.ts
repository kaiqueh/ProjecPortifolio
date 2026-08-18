import styled from 'styled-components';
import { headerActive } from '../../../styles/animations';

export const Container = styled.header<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  opacity: 0;

  ${({ $isVisible }) =>
    $isVisible &&
    `animation: ${headerActive} 1.5s linear forwards;
     animation-delay: 1.2s;`}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 2rem 4%;
  }
`;

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  cursor: pointer;
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  a {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    margin-left: 3.5rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: ${({ theme }) => theme.colors.bg};
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    text-align: center;
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

    a {
      display: block;
      margin: 4rem 0;
    }
  }
`;

export const MenuIcon = styled.i`
  font-size: 4rem;
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export const LangToggle = styled.button`
  background: transparent;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  margin-left: 2rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
  }
`;
