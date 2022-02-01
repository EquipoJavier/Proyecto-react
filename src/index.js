import React from 'react';
import ReactDOM from 'react-dom';
import Cultura from './components/Cultura/Cultura';
import '../src/components/sass/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} />
        <Route path="transportes" element={<Transportes />} />
        <Route path="ocio" element={<Ocio />} />
        <Route path="gastronomia" element={<Gastronomia />} />
        <Route path="cultura" />
        {/* <Route path="cultura" element={<Cultura />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
