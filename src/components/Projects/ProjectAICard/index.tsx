import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import type { ProjectAIUsage } from '../../../types';
import {
  AICard,
  AIGrid,
  AILabel,
  AIText,
  EstimateNote,
  EstimateRow,
  EstimateValue,
} from './styles';

interface ProjectAICardProps {
  ai: ProjectAIUsage;
}

/**
 * Uso de inteligência artificial no projeto. A estimativa de participação
 * só aparece quando existe um número informado, sempre acompanhada da
 * explicação de como foi calculada.
 */
export function ProjectAICard({ ai }: ProjectAICardProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  return (
    <AICard>
      <AIGrid>
        <div>
          <AILabel>{t('projectDetail.aiTools')}</AILabel>
          <AIText>{localize(ai.tools)}</AIText>
        </div>
        <div>
          <AILabel>{t('projectDetail.aiReview')}</AILabel>
          <AIText>{localize(ai.review)}</AIText>
        </div>
      </AIGrid>

      {ai.percentage !== null && (
        <EstimateRow>
          <EstimateValue>{ai.percentage}%</EstimateValue>
          <EstimateNote>{localize(ai.percentageNote)}</EstimateNote>
        </EstimateRow>
      )}
    </AICard>
  );
}
