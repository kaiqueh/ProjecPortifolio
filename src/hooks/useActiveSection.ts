import { useState, useCallback } from 'react';

type SectionName = 'home' | 'resume' | 'portfolio' | 'contact';

export function useActiveSection(initialSection: SectionName = 'home') {
  const [activeSection, setActiveSection] = useState<SectionName>(initialSection);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = useCallback((section: SectionName) => {
    if (section === activeSection || isTransitioning) return;

    setIsTransitioning(true);

    // Trigger bars animation, then switch section
    setTimeout(() => {
      setActiveSection(section);
    }, 1100);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 2600);
  }, [activeSection, isTransitioning]);

  return { activeSection, navigateTo, isTransitioning };
}
