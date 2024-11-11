// App.js
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import JobSearch from './JobSearch';
import JobDetails from './JobDetails';
import JobPosting from './JobPosting';
import CandidateReview from './CandidateReview';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode based on the state
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
<Routes>
  <Route path='/' element={ <LandingPage />}> </Route>
  <Route path='/login' element={ <Login />}> </Route>
  <Route path='/signup' element={ <Signup />}></Route>
  <Route path='/jobsearch' element={ <JobSearch/>}></Route>
  <Route path='/jobdetails' element={ <JobDetails/>}></Route>
  <Route path='/jobposting' element={ <JobPosting/>}></Route>
  <Route path='/candidatereview' element={ <CandidateReview/>}></Route>
</Routes>
     
     
      
      <Footer/>
    </div>
  );
}

export default App;
