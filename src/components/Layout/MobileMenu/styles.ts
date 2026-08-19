import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { fadeIn, slideDown } from '../../../styles/animations';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndices.overlay};
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  animation: ${fadeIn} 0.25s ease both;
  overflow-y: auto;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 26px;
`;

export const MenuInitials = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.button`
  font-size: 26px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1;
  color: ${({ theme }) => theme.colors.accent};
`;

export const MenuList = styled.ul`
  animation: ${slideDown} 0.3s ease both;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 22px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: clamp(28px, 8vw, 34px);
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  color: ${({ theme }) => theme.colors.text};

  &.active {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.label};
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &.active span {
    color: ${({ theme }) => theme.colors.accent};
  }

  li:last-child & {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const MenuFooter = styled.div`
  margin-top: auto;
  padding: 34px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textMuted};

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
