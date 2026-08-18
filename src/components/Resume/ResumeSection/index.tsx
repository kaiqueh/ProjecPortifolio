import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../data/portfolio-data';
import { ExperienceCard } from '../ExperienceCard';
import { EducationCard } from '../EducationCard';
import { SkillCard } from '../SkillCard';
import { AboutInfo } from '../AboutInfo';
import * as S from './styles';

type Tab = 'experience' | 'education' | 'skills' | 'about';

const tabs: Tab[] = ['experience', 'education', 'skills', 'about'];

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<Tab>('experience');
  const { t } = useTranslation();
  const { experiences, education, skills, aboutMe } = portfolioData;

  return (
    <S.Container>
      <S.Sidebar>
        <h2>{t('resume.title')}</h2>
        <S.SidebarDesc>{t('resume.subtitle')}</S.SidebarDesc>
        {tabs.map((tab) => (
          <S.TabButton
            key={tab}
            $isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {t(`resume.tabs.${tab}`)}
          </S.TabButton>
        ))}
      </S.Sidebar>

      <S.Content>
        {activeTab === 'experience' && (
          <>
            <S.Heading>
              {t('resume.experience.heading')}
              <span> {t('resume.experience.headingHighlight')}</span>
            </S.Heading>
            <S.Grid>
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} experience={exp} />
              ))}
            </S.Grid>
          </>
        )}

        {activeTab === 'education' && (
          <>
            <S.Heading>
              {t('resume.education.heading')}
              <span> {t('resume.education.headingHighlight')}</span>
            </S.Heading>
            <S.Grid>
              {education.map((edu, i) => (
                <EducationCard key={i} education={edu} />
              ))}
            </S.Grid>
          </>
        )}

        {activeTab === 'skills' && (
          <>
            <S.Heading>
              {t('resume.skills.heading')}
              <span> {t('resume.skills.headingHighlight')}</span>
            </S.Heading>
            <S.SkillsGrid>
              {skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </S.SkillsGrid>
          </>
        )}

        {activeTab === 'about' && (
          <>
            <S.Heading>
              {t('resume.about.heading')}
              <span> {t('resume.about.headingHighlight')}</span>
            </S.Heading>
            <AboutInfo data={aboutMe} />
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
