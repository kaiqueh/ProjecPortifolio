import { useTranslation } from 'react-i18next';

import { useLocale } from '../../../hooks/useLocale';
import type { ProjectChallenge } from '../../../types';
import { ChallengeList, ChallengePair, Panel, PanelLabel, PanelText } from './styles';

interface ProjectChallengesProps {
  challenges: ProjectChallenge[];
}

/** Cada dificuldade encontrada ao lado da solução que foi implementada. */
export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  const { t } = useTranslation();
  const { localize } = useLocale();

  return (
    <ChallengeList>
      {challenges.map((item, index) => (
        <ChallengePair key={index}>
          <Panel $tone="challenge">
            <PanelLabel $tone="challenge">{t('projectDetail.challenge')}</PanelLabel>
            <PanelText $tone="challenge">{localize(item.challenge)}</PanelText>
          </Panel>
          <Panel $tone="solution">
            <PanelLabel $tone="solution">{t('projectDetail.solution')}</PanelLabel>
            <PanelText $tone="solution">{localize(item.solution)}</PanelText>
          </Panel>
        </ChallengePair>
      ))}
    </ChallengeList>
  );
}
