import { ExploreNav } from '../../components/Home/ExploreNav';
import { Hero } from '../../components/Home/Hero';
import { PageShell } from '../../components/Layout/PageShell';

export function Home() {
  return (
    <PageShell>
      <Hero />
      <ExploreNav />
    </PageShell>
  );
}
