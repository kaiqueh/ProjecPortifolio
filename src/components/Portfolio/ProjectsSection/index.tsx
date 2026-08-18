import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../data/portfolio-data';
import { ProjectCard } from '../ProjectCard';
import { ProjectCarousel } from '../ProjectCarousel';
import * as S from './styles';

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const { projects } = portfolioData;

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <>
      <S.Heading>
        {t('portfolio.heading')}
        <span> {t('portfolio.headingHighlight')}</span>
      </S.Heading>
      <S.Container>
        <S.DetailsColumn>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} isActive={i === activeIndex} />
          ))}
        </S.DetailsColumn>
        <S.CarouselColumn>
          <ProjectCarousel
            projects={projects}
            activeIndex={activeIndex}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </S.CarouselColumn>
      </S.Container>
    </>
  );
}
