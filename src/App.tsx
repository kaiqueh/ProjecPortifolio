import { Route, Routes } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects } from './pages/Projects';
import { ROUTES } from './routes/paths';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.projects} element={<Projects />} />
      <Route path={ROUTES.projectDetail} element={<ProjectDetail />} />
      <Route path={ROUTES.contact} element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
