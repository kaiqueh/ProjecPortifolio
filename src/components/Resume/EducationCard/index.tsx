import type { Education } from '../../../types';
import * as S from './styles';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <S.Card>
      <S.Year>{education.period}</S.Year>
      <S.Title>{education.title}</S.Title>
      <S.Institution>{education.institution}</S.Institution>
      <S.Description>{education.description}</S.Description>
    </S.Card>
  );
}
