import type { Experience } from '../../../types';
import * as S from './styles';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <S.Card>
      <S.Year>{experience.period}</S.Year>
      <S.Title>{experience.title}</S.Title>
      <S.Company>{experience.company}</S.Company>
      <S.Description>{experience.description}</S.Description>
    </S.Card>
  );
}
