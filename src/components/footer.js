import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className='ff '>

      <div className='xcon '>

        <div className='portion '>
          <img src='/logon.png' alt='' className='flg' />
        </div>

        <div className='portion '>
          <Link to='/' className='ll '><p>-Home</p></Link>
          <Link to='/aboutus' className='ll '><p>-About Us</p></Link>
          <Link to='/travelagencies' className='ll '><p>-Travel Agencies</p></Link>
          <Link to='/medicaltourismplaces' className='ll '><p>-Medical Tourism Places</p></Link>
          <Link to='/onlinepsychotherapyapplications' className='ll '><p>-Online Psychotherapy Apps</p></Link>
        </div>

        <div className='portion '>
          <Link to='/hospitals' className='ll '><p>-Hospitals</p></Link>
          <Link to='/clinics' className='ll '><p>-Cinics</p></Link>
          <Link to='/pharmacies' className='ll '><p>-Pharmacies</p></Link>
          <Link to='/laboratories' className='ll '><p>-Laboratories</p></Link>
          <Link to='/orthotics' className='ll '><p>-Orthotics</p></Link>
          <Link to='/radiology' className='ll '><p>-Radiology</p></Link>
          <Link to='/organtransplantcenters' className='ll '><p>-Organ Transplant Centers</p></Link>
        </div>

        <div className='portion '>
          <div className='contact '>
            <p>
              <img src='/mail.png' alt='mail' /> <a href="mailto:PharaohsMedicare@gmail.com">PharaohsMedicare@gmail.com</a>
            </p>
            <p>
              <img src='/phone.png' alt='phone' /> <a href="tel+201128442419:">+201128442419</a>
            </p>
          </div>
        </div>

      </div>

    </footer>
  )
}
