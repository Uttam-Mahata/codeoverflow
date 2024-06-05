import os

# Define the directory structure
directories = [
    'public',
    'src/assets',
    'src/components/Chapters',
    'src/components/Features',
    'src/components/Support',
    'src/components'
]

# Define the files and their content
files = {
    'src/components/Chapters/CPDSA.jsx': ''' 

const CPDSA = () => {
  return (
    <div>
      <h3>CP/DSA</h3>
      <p>Content for Competitive Programming and Data Structures & Algorithms.</p>
    </div>
  );
};

export default CPDSA;
''',

    'src/components/Chapters/WebDevelopment.jsx': ''' 

const WebDevelopment = () => {
  return (
    <div>
      <h3>Web Development</h3>
      <p>Content for Web Development.</p>
    </div>
  );
};

export default WebDevelopment;
''',

    'src/components/Chapters/AppDevelopment.jsx': ''' 

const AppDevelopment = () => {
  return (
    <div>
      <h3>App Development</h3>
      <p>Content for App Development.</p>
    </div>
  );
};

export default AppDevelopment;
''',

    'src/components/Chapters/MachineLearning.jsx': ''' 

const MachineLearning = () => {
  return (
    <div>
      <h3>Machine Learning</h3>
      <p>Content for Machine Learning.</p>
    </div>
  );
};

export default MachineLearning;
''',

    'src/components/Features/ContestsPage.jsx': ''' 

const ContestsPage = () => {
  return (
    <div>
      <h3>Contests Page</h3>
      <p>Content for Contests Page.</p>
    </div>
  );
};

export default ContestsPage;
''',

    'src/components/Features/QuestionsPage.jsx': ''' 

const QuestionsPage = () => {
  return (
    <div>
      <h3>Questions Page</h3>
      <p>Content for Questions Page.</p>
    </div>
  );
};

export default QuestionsPage;
''',

    'src/components/Features/BugSquashing.jsx': ''' 

const BugSquashing = () => {
  return (
    <div>
      <h3>Bug Squashing</h3>
      <p>Content for Bug Squashing.</p>
    </div>
  );
};

export default BugSquashing;
''',

    'src/components/Support/HelpCenterContent.jsx': ''' 

const HelpCenterContent = () => {
  return (
    <div>
      <h3>Help Center Content</h3>
      <p>Content for Help Center.</p>
    </div>
  );
};

export default HelpCenterContent;
''',

    'src/components/Support/GuidepathsMaterials.jsx': ''' 

const GuidepathsMaterials = () => {
  return (
    <div>
      <h3>Guidepaths and Materials</h3>
      <p>Content for Guidepaths and Materials.</p>
    </div>
  );
};

export default GuidepathsMaterials;
''',

    'src/components/HomePage.jsx': ''' 

const HomePage = () => {
  return (
    <div>
      <h1>CodeOverflow</h1>
      <p>Welcome to CodeOverflow</p>
    </div>
  );
};

export default HomePage;
''',

    'src/components/Navbar.jsx': ''' 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Chapters</li>
        <li>Features</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;
''',

    'src/App.jsx': ''' 
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
    <div className="app">
      <Navbar />
      <HomePage />
      <div className="sections">
        <div className="chapter-section">
          <CPDSA />
          <WebDevelopment />
          <AppDevelopment />
          <MachineLearning />
        </div>
        <div className="feature-section">
          <ContestsPage />
          <QuestionsPage />
          <BugSquashing />
        </div>
        <div className="support-section">
          <HelpCenterContent />
          <GuidepathsMaterials />
        </div>
      </div>
    </div>
  );
};

export default App;
''',

    'src/main.jsx': ''' 
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
''',

    'index.html': '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeOverflow</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
''',

    'src/App.css': '''.app {
  text-align: center;
}

.sections {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.chapter-section, .feature-section, .support-section {
  border: 1px solid #ccc;
  padding: 20px;
  width: 30%;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  background-color: #333;
}

nav ul li {
  color: white;
  padding: 14px 20px;
}
''',

    'src/index.css': '''/* Add your global styles here */'''
}

# Create directories
for directory in directories:
    os.makedirs(directory, exist_ok=True)

# Create files with content
for file_path, content in files.items():
    with open(file_path, 'w') as file:
        file.write(content)

print("Project structure created successfully.")
