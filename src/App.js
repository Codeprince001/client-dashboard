import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from './Components/Header';
import { theme } from "./theme";
import { VerticalSidebar } from './pages/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/index';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <VerticalSidebar />
        <main className='content'>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/team" element={<Team />} /> */}
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
        </main>
      </div>

    </ThemeProvider>
  );
}

export default App;
