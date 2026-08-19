import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Cada troca de página começa do topo, como uma navegação tradicional. */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
}
