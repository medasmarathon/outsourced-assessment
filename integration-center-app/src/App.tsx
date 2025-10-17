import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import IntegrationCenter from './pages/IntegrationCenter';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<IntegrationCenter />} />
              <Route path="/integrations" element={<IntegrationCenter />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
