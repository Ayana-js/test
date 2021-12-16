import './App.css';
import React from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import PortfolioContainer from './components/Portfolio/PortfolioContainer';
import NewsContainer from './components/News/NewsContainer';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'> 
          <Routes>
            <Route path='/about' 
                  element={<About />} />
            <Route path='/portfolio' 
                  element={<PortfolioContainer />}/>
            <Route path='/news' 
                  element={<NewsContainer />}/>
            <Route path='/contact'
                  element={<Contact />} />
            <Route path=''
                  element={<Main />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
