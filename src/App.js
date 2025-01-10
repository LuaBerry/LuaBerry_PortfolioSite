import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './scss/style.scss';

const HomePage = lazy(() => import ('./routes/HomePage'));
const ProjectsPage = lazy(() => import ('./routes/ProjectsPage'));
const AboutPage = lazy(() => import ('./routes/AboutPage'));
const FAQPage = lazy(() => import ('./routes/FAQPage'));
const VaultPage = lazy(() => import ('./routes/VaultPage'));
const VaultDetailPage = lazy(() => import ('./routes/VaultDetailPage'));

function App() {
  const [lang, setLang] = useState(0);
  const changeLang = () => {
    setLang(lang ^ 1);
    console.log(lang);
  }
  return (
    <BrowserRouter>
        <Navigation changeLang={changeLang}/>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route exact path = "/" element = {<HomePage lang={lang}/>}/>
            <Route path="/about" element = {<AboutPage lang={lang}/>}/>
            {/* <Route path="/faq" element = {<FAQPage lang={lang}/>}/> */}
            <Route path="/projects" element = {<ProjectsPage lang={lang}/>}/>
            <Route path="/vault" element = {<VaultPage lang={lang}/>}/>
            <Route path="/vault/detail" element = {<VaultDetailPage lang={lang}/>}/>
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
