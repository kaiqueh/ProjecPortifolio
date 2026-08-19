import { useLocale } from '../../../hooks/useLocale';
import type { SkillCategory } from '../../../types';
import { Tag } from '../../ui/Tag';
import { CardWrapper, CategoryLabel, SkillList } from './styles';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

/**
 * Competências agrupadas por categoria. Sem barras de progresso ou
 * porcentagens: a organização é a informação.
 */
export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const { localize } = useLocale();

  return (
    <CardWrapper>
      <CategoryLabel>{localize(category.label)}</CategoryLabel>
      <SkillList>
        {category.skills.map((skill, index) => (
          <Tag key={`${skill.name}-${index}`} label={skill.name} icon={skill.icon} showIconSlot />
        ))}
      </SkillList>
    </CardWrapper>
  );
}
