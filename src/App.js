import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './scss/style.scss';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import ('./routes/HomePage'));
const ProjectsPage = lazy(() => import ('./routes/ProjectsPage'));
const ResumePage = lazy(() => import ('./routes/ResumePage'));
const ResumeKRPage = lazy(() => import ('./routes/ResumeKRPage'));
const InsightsPage = lazy(() => import ('./routes/InsightsPage'));

function App() {
  return (
    <BrowserRouter>

        <Navigation />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route exact path = "/" element = {<HomePage/>}/>
            <Route path="/resume" element = {<ResumePage/>}/>
            <Route path="/resumekr" element = {<ResumeKRPage/>}/>
            <Route path="/projects" element = {<ProjectsPage/>}/>
            <Route path="/insights" element = {<InsightsPage/>}/>
          </Routes>
        </Suspense>
        <Footer />
    </BrowserRouter>
  )
}

const LoadingScreen = () => {
  return (
    <div className='loading'>
      <div className='spinner'></div>
    </div>
  )
}


export default App;
