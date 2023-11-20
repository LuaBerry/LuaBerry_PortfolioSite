import logo from './logo.svg';
import './App.css';
import './css/style.css'
import Home from './routes/Home'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Resume from './routes/Resume';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path="/resume" element = {<Resume/>}/>
        <Route path="/projects" element = {<></>}/>
        <Route path="/chat" element = {<></>}/>
      </Routes>
    </HashRouter>

  )
}

export default App;
