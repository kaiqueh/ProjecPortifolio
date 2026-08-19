import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const NavWrapper = styled.nav`
  position: fixed;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({ theme }) => theme.zIndices.nav};

  display: flex;
  align-items: center;
  gap: 8px;
  max-width: calc(100vw - 32px);
  padding: 9px 10px 9px 20px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.blur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.blur};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

  ${media.md} {
    top: 14px;
    left: 16px;
    right: 16px;
    max-width: none;
    transform: none;
    justify-content: space-between;
    padding: 14px 18px;
  }
`;

export const Initials = styled(Link)`
  padding-right: 12px;
  border-right: 1px solid ${({ theme }) => theme.glass.border};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.text};

  ${media.md} {
    padding-right: 0;
    border-right: none;
  }
`;

export const DesktopLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.md} {
    display: none;
  }
`;

export const NavPill = styled(NavLink)`
  display: block;
  padding: 8px 15px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1;
  color: ${({ theme }) => theme.colors.textTertiary};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  &.active {
    background: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.onAccent};
  }
`;

export const DesktopToggle = styled.div`
  margin-left: 6px;

  ${media.md} {
    display: none;
  }
`;

export const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 14px;

  ${media.md} {
    display: flex;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 22px;
  padding: 4px 0;

  span {
    height: 1.5px;
    background: ${({ theme }) => theme.colors.text};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  span:last-child {
    width: 14px;
    align-self: flex-end;
  }

  &:hover span:last-child {
    width: 100%;
  }
`;
