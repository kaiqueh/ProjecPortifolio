import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 45rem;
  border-radius: 0.1rem;
  overflow: hidden;
`;

export const Slide = styled.div<{ $offset: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  gap: 2rem;
  height: inherit;
  transition: ${({ theme }) => theme.transitions.default};
  transform: translateX(calc(${({ $offset }) => $offset * -100}% - ${({ $offset }) => $offset * 2}rem));
`;

export const ImageItem = styled.div`
  height: inherit;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export const Navigation = styled.div`
  text-align: right;
  margin-top: 2rem;
`;

export const NavButton = styled.button<{ $disabled: boolean }>`
  display: inline-flex;
  padding: 0.4rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 0.2rem solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 4rem;
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.disabled : theme.colors.primary};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

  & + & {
    margin-left: 1.5rem;
  }
`;
