import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './css/style.css';
import Chat from './routes/Chat';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import ResumeKR from './routes/ResumeKR';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path="/resume" element = {<Resume/>}/>
        <Route path="/resumekr" element = {<ResumeKR/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/chat" element = {<Chat/>}/>
      </Routes>
      <Footer />
    </HashRouter>

  )
}

export default App;
