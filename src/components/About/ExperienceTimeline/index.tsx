import { useLocale } from '../../../hooks/useLocale';
import type { Experience } from '../../../types';
import { Company, Description, Period, Role, TimelineItem } from './styles';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

/** Trajetória profissional em ordem cronológica, da mais recente à mais antiga. */
export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const { localize } = useLocale();

  return (
    <ol>
      {experiences.map((experience, index) => (
        <TimelineItem key={`${experience.company}-${experience.period}`}>
          <Period $current={index === 0}>{experience.period}</Period>
          <div>
            <Role>{localize(experience.role)}</Role>
            <Company>{experience.company}</Company>
            <Description>{localize(experience.description)}</Description>
          </div>
        </TimelineItem>
      ))}
    </ol>
  );
}
