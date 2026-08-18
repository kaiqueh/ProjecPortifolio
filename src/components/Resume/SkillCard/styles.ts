import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const Icon = styled.i`
  font-size: 8.5rem;
  transition: ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Name = styled.span`
  position: absolute;
  top: -3%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.bg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  pointer-events: none;
  opacity: 0;
  transform: scale(0.9);
  transition: ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    top: -3%;
    opacity: 1;
    transform: scale(1);
  }
`;
