import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Home />
        </main>
        <Footer />
        <LanguageSelector />
      </div>
    </LanguageProvider>
  );
}

export default App;
