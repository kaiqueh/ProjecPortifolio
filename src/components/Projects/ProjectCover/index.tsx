import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import type { ProjectImage } from '../../../types';
import { CoverImage, CoverPlaceholder, CoverWrapper } from './styles';

interface ProjectCoverProps {
  image: ProjectImage;
  height?: string;
  /** Capa lateral, usada nos cards horizontais. */
  horizontal?: boolean;
}

/**
 * Capa do projeto. Sem imagem cadastrada, exibe um espaço reservado com a
 * mesma proporção, evitando que o grid mude quando a arte chegar.
 */
export function ProjectCover({ image, height = '180px', horizontal = false }: ProjectCoverProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  return (
    <CoverWrapper $height={height} $horizontal={horizontal}>
      {image.src ? (
        <CoverImage src={image.src} alt={localize(image.alt)} loading="lazy" />
      ) : (
        <CoverPlaceholder>{t('projects.imagePlaceholder')}</CoverPlaceholder>
      )}
    </CoverWrapper>
  );
}
