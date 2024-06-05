import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CPDSA from './components/Chapters/CPDSA';
import WebDevelopment from './components/Chapters/WebDevelopment';
import AppDevelopment from './components/Chapters/AppDevelopment';
import MachineLearning from './components/Chapters/MachineLearning';
import ContestsPage from './components/Features/ContestsPage';
import QuestionsPage from './components/Features/QuestionsPage';
import BugSquashing from './components/Features/BugSquashing';
import HelpCenterContent from './components/Support/HelpCenterContent';
import GuidepathsMaterials from './components/Support/GuidepathsMaterials';
import './App.css';

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
    </Router>
  );
};

export default App;
