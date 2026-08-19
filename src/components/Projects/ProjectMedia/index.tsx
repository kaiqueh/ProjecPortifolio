import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import type { ProjectImage } from '../../../types';
import {
  Cover,
  GalleryGrid,
  GalleryItem,
  MediaImage,
  MediaPlaceholder,
  MediaWrapper,
} from './styles';

interface ProjectMediaProps {
  cover: ProjectImage;
  gallery: ProjectImage[];
}

/** Demonstração visual do projeto: captura principal e galeria de apoio. */
export function ProjectMedia({ cover, gallery }: ProjectMediaProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  return (
    <MediaWrapper aria-label={t('projectDetail.gallery')}>
      <Cover>
        {cover.src ? (
          <MediaImage src={cover.src} alt={localize(cover.alt)} />
        ) : (
          <MediaPlaceholder>{t('projects.imagePlaceholder')}</MediaPlaceholder>
        )}
      </Cover>

      {gallery.length > 0 && (
        <GalleryGrid>
          {gallery.map((image, index) => (
            <GalleryItem key={image.src || index}>
              <MediaImage src={image.src} alt={localize(image.alt)} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      )}
    </MediaWrapper>
  );
}
