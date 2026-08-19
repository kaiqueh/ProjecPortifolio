import styled from 'styled-components';

import { media } from '../../../styles/theme';

export const MediaWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.page};
`;

const surface = `repeating-linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.035) 0 16px,
  transparent 16px 32px
)`;

export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(200px, 36vw, 420px);
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${surface};
  overflow: hidden;
`;

export const GalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const GalleryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(110px, 14vw, 150px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${surface};
  overflow: hidden;
`;

export const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MediaPlaceholder = styled.span`
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  letter-spacing: 0.16em;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSubtle};
`;
