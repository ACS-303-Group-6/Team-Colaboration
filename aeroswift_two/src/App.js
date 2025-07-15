// src/App.jsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Fix: Removed duplicate import
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage'; // Changed to SearchPage
import ConfirmationPage from './pages/ConfirmationPage'; // Changed to ConfirmationPage

// Create theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/search-results" element={<SearchPage />} /> {/* Fixed */}
              <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Fixed */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;