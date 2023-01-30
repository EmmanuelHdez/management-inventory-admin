import { CssBaseline } from '@mui/material';
import Topbar from './views/global/Topbar';
import SideMenu from './views/global/Menu';
// import Dashboard from './views/dashboard';
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

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
                  {/*<Route path="/" element={<Dashboard />}/>*/}
              </Routes>

          </main>
      </div>
    </>
  );
}

export default App;
