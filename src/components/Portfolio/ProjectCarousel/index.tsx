import type { Project } from '../../../types';
import * as S from './styles';

interface ProjectCarouselProps {
  projects: Project[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectCarousel({ projects, activeIndex, onPrev, onNext }: ProjectCarouselProps) {
  return (
    <>
      <S.Container>
        <S.Slide $offset={activeIndex}>
          {projects.map((project, i) => (
            <S.ImageItem key={i}>
              <img src={project.image} alt={project.title} />
            </S.ImageItem>
          ))}
        </S.Slide>
      </S.Container>
      <S.Navigation>
        <S.NavButton $disabled={activeIndex === 0} onClick={onPrev}>
          <i className="bx bx-chevron-left" />
        </S.NavButton>
        <S.NavButton $disabled={activeIndex === projects.length - 1} onClick={onNext}>
          <i className="bx bx-chevron-right" />
        </S.NavButton>
      </S.Navigation>
    </>
  );
}
