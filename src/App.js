import React, { useState, useEffect } from 'react'
import './styles.css'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TravelAgencies from './TravelAgencies';
import OnlinePsychotherapyApplications from './OnlinePsycotherapyApplications';
import Radiology from './Radiology';
import Hospitals from './Hospitals';
import Orthotics from './Orthotics';
import Clinics from './Clinics';
import MedicalTourismPlaces from './MedicalTourismPlaces';
import OrganTransplantCenters from './OrganTransplantCenters';
import Pharmacies from './Pharmacies';
import AboutUs from './aboutUs';
import Laboratories from './Laboratories';
import Manage from './components/manage';





function App() {
  var [ userObject, setUserObject ] = useState( { type: "none" } );

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home userObject={ userObject } setUserObject={ setUserObject } /> } />
        <Route path='/index' element={ <Home userObject={ userObject } setUserObject={ setUserObject } /> } />
        <Route path='/manage' element={ <Manage userObject={ userObject } setUserObject={ setUserObject } /> } />
        <Route path='/aboutus' element={ <AboutUs /> } />
        <Route path='/travelagencies' element={ <TravelAgencies /> } />
        <Route path='/onlinepsychotherapyapplications' element={ <OnlinePsychotherapyApplications /> } />
        <Route path='/hospitals' element={ <Hospitals /> } />
        <Route path='/clinics' element={ <Clinics /> } />
        <Route path='/pharmacies' element={ <Pharmacies /> } />
        <Route path='/laboratories' element={ <Laboratories /> } />
        <Route path='/orthotics' element={ <Orthotics /> } />
        <Route path='/radiology' element={ <Radiology /> } />
        <Route path='/medicaltourismplaces' element={ <MedicalTourismPlaces /> } />
        <Route path='/organtransplantcenters' element={ <OrganTransplantCenters /> } />
      </Routes>
    </Router >
  );
}

export default App;
