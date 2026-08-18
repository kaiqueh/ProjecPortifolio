import { useTranslation } from 'react-i18next';
import type { AboutMe } from '../../../types';
import * as S from './styles';

interface AboutInfoProps {
  data: AboutMe;
}

export function AboutInfo({ data }: AboutInfoProps) {
  const { t } = useTranslation();

  const fields = [
    { label: t('resume.about.labels.name'), value: data.name },
    { label: t('resume.about.labels.gender'), value: data.gender },
    { label: t('resume.about.labels.age'), value: data.age },
    { label: t('resume.about.labels.maritalStatus'), value: data.maritalStatus },
    { label: t('resume.about.labels.city'), value: data.city },
    { label: t('resume.about.labels.nationality'), value: data.nationality },
    { label: t('resume.about.labels.phone'), value: data.phone },
  ];

  return (
    <S.List>
      {fields.map((field) => (
        <S.Item key={field.label}>
          <p>
            {field.label}
            <S.Value>{field.value}</S.Value>
          </p>
        </S.Item>
      ))}
    </S.List>
  );
}
