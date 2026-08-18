import type { Skill } from '../../../types';
import * as S from './styles';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <S.Card>
      <S.Icon className={`bx ${skill.icon}`} />
      <S.Name>{skill.name}</S.Name>
    </S.Card>
  );
}
