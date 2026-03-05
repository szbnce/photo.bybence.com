import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { TOS } from './pages/TOS';
import { GDPR } from './pages/GDPR';
import { NotFound } from './pages/NotFound';
import { VideoUnderConstruction } from './pages/VideoUnderConstruction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="tos" element={<TOS />} />
          <Route path="gdpr" element={<GDPR />} />
          <Route path="video" element={<VideoUnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
