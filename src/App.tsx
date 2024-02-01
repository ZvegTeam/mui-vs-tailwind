import { Navigate, Route, Routes } from 'react-router-dom';
import { MaterialUI } from './MaterialUI';
import { TailwindCSS } from './Tailwind';
import { Header } from './components';

function App() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/material-ui" replace />} />
          <Route path="/tailwind-css" element={<TailwindCSS />} />
          <Route path="/material-ui" element={<MaterialUI />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
