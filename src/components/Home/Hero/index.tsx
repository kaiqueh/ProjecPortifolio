import { useTranslation } from 'react-i18next';
import type { PersonalInfo } from '../../../types';
import { TypeWriter } from '../TypeWriter';
import { SocialLinks } from '../SocialLinks';
import { Button } from '../../ui/Button';
import * as S from './styles';

interface HeroProps {
  data: PersonalInfo;
}

export function Hero({ data }: HeroProps) {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Detail>
        <h1>{data.name}</h1>
        <h2>
          {t('home.greeting')}&nbsp;
          <TypeWriter words={data.roles} />
        </h2>
        <p>{data.bio}</p>

        <S.Actions>
          <Button href={data.cvUrl} download>
            {t('home.downloadCv')}
          </Button>
          <SocialLinks links={data.socialLinks} />
        </S.Actions>
      </S.Detail>

      <S.ImageBox>
        <S.ImageItem>
          <img src={data.photo} alt={data.name} />
        </S.ImageItem>
      </S.ImageBox>
    </S.Container>
  );
}
