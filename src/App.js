import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from './Components/Header';
import { theme } from "./theme";
import { VerticalSidebar } from './pages/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/dashboardOverview';
import { Brand } from "./Components/Logo";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <div style={{ height: "100vh" }}>
          <div className='brand sticky' style={{ marginBottom: "-7px" }}>
            <Brand />
          </div>
          <div className='sidebar'>
            <VerticalSidebar />
          </div>
        </div>

        <main className='content' style={{ maxHeight: "calc(100vh)", overflow: "hidden", flex: 1 }}>
          <div className='navbar sticky'>
            <Header />
          </div>
          <div >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/lead" element={<Lead />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </div>
        </main>
      </div>

    </ThemeProvider>
  );
}

export default App;
