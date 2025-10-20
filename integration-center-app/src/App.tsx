import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import SettingsLayout from "./pages/settings/SettingsLayout";
import Manage from "./pages/settings/Manage";
import Users from "./pages/settings/Users";
import Tags from "./pages/settings/Tags";
import Integrations from "./pages/settings/Integrations";
import { TenantProvider } from "./contexts";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary
      fallback={<p>Something went wrong. Please try again later.</p>}
    >
      <TenantProvider>
        <Router>
          <div className="flex h-screen min-h-screen overflow-hidden bg-neutral-50">
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
              <Header />
              <main className="max-h-full flex-1 overflow-hidden">
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/settings/manage" replace />}
                  />
                  <Route path="/settings" element={<SettingsLayout />}>
                    <Route
                      index
                      element={<Navigate to="/settings/manage" replace />}
                    />
                    <Route path="manage" element={<Manage />} />
                    <Route path="users" element={<Users />} />
                    <Route path="tags" element={<Tags />} />
                    <Route path="integrations" element={<Integrations />} />
                  </Route>
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </TenantProvider>
    </ErrorBoundary>
  );
}
export default App;
