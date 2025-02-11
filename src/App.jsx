import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LoadingSpinner from './components/LoadingSpinner'; // Componente de carga personalizado
import './App.css'; // Agrega esta línea al principio

// Carga diferida para las calculadoras
const ResistanceCalculator = lazy(() => import('./components/ResistanceCalculator'));
const FilterCalculator = lazy(() => import('./components/FilterCalculator'));
const PIDCalculator = lazy(() => import('./components/PIDCalculator'));
const PowerCalculator = lazy(() => import('./components/PowerCalculator'));
const VoltageDivider = lazy(() => import('./components/VoltageDivider'));
const CapacitorCalculator = lazy(() => import('./components/CapacitorCalculator'));

const App = () => {
  return (
    <Router>
      <Header />
      <Inicio/>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Rutas principales cargadas inicialmente */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Rutas de calculadoras con carga diferida */}
          <Route
            path="/resistance-calculator"
            element={<ResistanceCalculator />}
          />
          <Route
            path="/filter-calculator"
            element={<FilterCalculator />}
          />
          <Route
            path="/pid-calculator"
            element={<PIDCalculator />}
          />
          <Route
            path="/power-calculator"
            element={<PowerCalculator />}
          />
          <Route
            path="/voltage-divider"
            element={<VoltageDivider />}
          />
          <Route
            path="/capacitor-calculator"
            element={<CapacitorCalculator />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
