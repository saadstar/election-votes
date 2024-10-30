import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Dashboard,
  Candidates,
  ElectionCenters,
  States,
  AreaP,
  Center,
  AddCandidate,
  Results,
  AddResult,
  AddCenter,
  AddPlace,
  AddCity,
  AddSchool,
} from "./pages";
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="الاعدادات" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:mr-72 w-full"
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                {/* tables  */}
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/elc-center" element={<ElectionCenters />} />

                {/* election data  */}
                <Route path="/state" element={<States />} />
                <Route path="/area" element={<AreaP />} />
                <Route path="/center" element={<Center />} />

                {/* Adds */}
                <Route path="/add-candidate" element={<AddCandidate />} />
                <Route path="/results" element={<Results />} />
                <Route path="/add-result" element={<AddResult />} />
                <Route path="/add-center" element={<AddCenter />} />
                <Route path="/add-place" element={<AddPlace />} />
                <Route path="/add-city" element={<AddCity />} />
                <Route path="/add-school" element={<AddSchool />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
