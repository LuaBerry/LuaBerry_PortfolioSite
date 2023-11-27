import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './css/style.css';
import ChatPage from './routes/ChatPage';
import HomePage from './routes/HomePage';
import ProjectsPage from './routes/ProjectsPage';
import ResumePage from './routes/ResumePage';
import ResumeKRPage from './routes/ResumeKRPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path = "/" element = {<HomePage/>}/>
        <Route path="/resume" element = {<ResumePage/>}/>
        <Route path="/resumekr" element = {<ResumeKRPage/>}/>
        <Route path="/projects" element = {<ProjectsPage/>}/>
        <Route path="/chat" element = {<ChatPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
