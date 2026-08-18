import styled from 'styled-components';

export const Card = styled.div<{ $isActive: boolean }>`
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
`;

export const Number = styled.p`
  font-size: 8rem;
  -webkit-text-stroke: 0.07rem ${({ theme }) => theme.colors.white};
  color: transparent;
  line-height: 1;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin: 0.8rem 0 2rem;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Tech = styled.div`
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};
  padding-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const LinkIcon = styled.a`
  position: relative;
  display: inline-flex;
  padding: 1.3rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.bgSecondary};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateY(-50%) scale(1);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  pointer-events: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.bg};
  opacity: 0;
  transition: ${({ theme }) => theme.transitions.fast};

  ${LinkIcon}:hover & {
    top: -70%;
    opacity: 1;
  }
`;
