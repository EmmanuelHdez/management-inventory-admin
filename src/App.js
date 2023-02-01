import { CssBaseline } from '@mui/material';
import Topbar from './views/global/Topbar';
import SideMenu from './views/global/Menu';
// import Dashboard from './views/dashboard';
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Dashboard } from './views/dashboard';
import InventoryView from './views/inventory';
import { ManageProfiles } from './views/profiles';


<ProSidebarProvider>
  <App />
</ProSidebarProvider>;

function App() {
  return (
    <>
      <CssBaseline/>
      <div className="body">

          <ProSidebarProvider>
            <SideMenu/>
          </ProSidebarProvider>

          <main className='content'>
              <Topbar/>

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<InventoryView />} />
                <Route path="/users" element={<ManageProfiles />} />
              </Routes>

          </main>
      </div>
    </>
  );
}

export default App;
