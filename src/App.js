import { CssBaseline } from '@mui/material';
import Topbar from './views/global/Topbar';
import Sidebar from './views/global/Sidebar';
// import Dashboard from './views/dashboard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline/>
      <div className="body">

          <Sidebar/>

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
