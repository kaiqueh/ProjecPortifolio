import styled from 'styled-components';
import { rotateBorder } from '../../../styles/animations';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Detail = styled.div`
  h1 {
    font-size: clamp(3.5rem, 10vw, 5.5rem);
  }

  h2 {
    font-size: 3.2rem;
    margin-top: -1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 1rem 0 2.5rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxxs}) {
    flex-direction: column-reverse;

    > div {
      margin: 0.5rem 0;
      margin-bottom: 2rem;
    }
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 32vw;
  height: 32vw;
  border-radius: ${({ theme }) => theme.radii.circle};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50rem;
    height: 50rem;
    background: conic-gradient(
      transparent,
      transparent,
      transparent,
      ${({ theme }) => theme.colors.primary}
    );
    animation: ${rotateBorder} 10s linear infinite;
  }

  &::after {
    animation-delay: -5s;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 35rem;
    height: 35rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 30rem;
    height: 30rem;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.radii.circle};
  display: flex;
  justify-content: center;
  z-index: 1;
  overflow: hidden;

  img {
    position: absolute;
    top: 3rem;
    display: block;
    width: 85%;
    object-fit: cover;
    mix-blend-mode: lighten;
  }
`;
