import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import HomePage from './components/Home/HomePage';
import CPDSA from './components/Chapters/CPDSA/CPDSA';
import WebDevelopment from './components/Chapters/WEBDEV/WebDevelopment';
import AppDevelopment from './components/Chapters/AppDev/AppDevelopment';
import MachineLearning from './components/Chapters/ML/MachineLearning';
import ContestsPage from './components/Features/Contest/ContestsPage';
import QuestionsPage from './components/Features/Questions/QuestionsPage';
import BugSquashing from './components/Features/BugSquash/BugSquashing';
import HelpCenterContent from './components/Support/HelpCenterContent';
import GuidepathsMaterials from './components/Support/GuidepathsMaterials';
import './index.css';
import './App.css';

import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapters/cpdsa" element={<CPDSA />} />
        <Route path="/chapters/web-development" element={<WebDevelopment />} />
        <Route path="/chapters/app-development" element={<AppDevelopment />} />
        <Route path="/chapters/machine-learning" element={<MachineLearning />} />
        <Route path="/features/contests" element={<ContestsPage />} />
        <Route path="/features/questions" element={<QuestionsPage />} />
        <Route path="/features/bug-squashing" element={<BugSquashing />} />
        <Route path="/support/help-center" element={<HelpCenterContent />} />
        <Route path="/support/guidepaths-materials" element={<GuidepathsMaterials />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
