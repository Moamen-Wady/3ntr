import React, { useEffect } from 'react'
import Footer from './components/footer'
import './home.css'
import Navbar from './components/navbar';
import './components/footer.css'
import { Link } from 'react-router-dom'
import api from './components/api'


export default function Home( { userObject, setUserObject } ) {

    function scrollToHash() {

        const id = window.location.hash.substr( 1 );

        if ( id ) {
            const anchor = document.getElementById( id );

            if ( anchor ) {
                anchor.scrollIntoView();
            }
        }
    }

    useEffect( () => scrollToHash(), [] )

    //animation 
    const slidein1 = () => {
        document.getElementById( 'rt1' ).classList.remove( 'slideout' );
        document.getElementById( 'rt1' ).classList.add( 'slidein' );
    }
    const slideout1 = () => {
        document.getElementById( 'rt1' ).classList.remove( 'slidein' );
        document.getElementById( 'rt1' ).classList.add( 'slideout' );
    }
    const slidein2 = () => {
        document.getElementById( 'rt2' ).classList.remove( 'slideout' );
        document.getElementById( 'rt2' ).classList.add( 'slidein' );
    }
    const slideout2 = () => {
        document.getElementById( 'rt2' ).classList.remove( 'slidein' );
        document.getElementById( 'rt2' ).classList.add( 'slideout' );
    }
    const slidein3 = () => {
        document.getElementById( 'rt3' ).classList.remove( 'slideout' );
        document.getElementById( 'rt3' ).classList.add( 'slidein' );
    }
    const slideout3 = () => {
        document.getElementById( 'rt3' ).classList.remove( 'slidein' );
        document.getElementById( 'rt3' ).classList.add( 'slideout' );
    }

    return (
        <div className='cont'>
            <div className='c1'>
                <div className='lt'>
                    <Navbar userObject={ userObject } setUserObject={ setUserObject } />
                    <div className='inff'>
                        <p>
                            Welcome to Pharaohs Medicare, your gateway to medical tourism in Egypt. Discover world-class healthcare services, modern facilities, and highly skilled professionals dedicated to your well-being. From cosmetic surgery to cardiac procedures, we offer personalized treatments using cutting-edge technology. Combine your medical journey with the wonders of Egypt's rich history and warm hospitality. Trust Pharaohs Medicare for a seamless experience, from travel arrangements to post-treatment care. Explore our website and embark on a remarkable medical journey in Egypt. Welcome to Pharaohs Medicare.
                        </p>
                        <img src='6.jpg' alt='' />
                    </div>
                    <h1>Emergency Numbers in Egypt:</h1>
                    <div className='infff'>
                        <p>
                            For your safety and peace of mind during your medical tourism journey in Egypt with Pharaohs Medicare, here are important emergency numbers:<br /><br />
                            Police Emergency:<a href="tel:122"> 122</a><br /><br />
                            Ambulance Service:<a href="tel:123"> 123</a><br /><br />
                            Fire Department:<a href="tel:180"> 180</a><br /><br />
                            Tourist Police:<a href="tel:126"> 126</a><br /><br />
                            Electricity Emergency:<a href="tel:121"> 121</a><br /><br />
                            Natural Gas Emergency:<a href="tel:129"> 129</a><br /><br />
                            Traffic Police Hotline:<a href="tel:128"> 128</a><br /><br />
                            Maritime Emergency:<a href="tel:125"> 125</a><br /><br />
                            Tourism Complaints Hotline:<a href="tel:126"> 126</a><br /><br />
                            We hope that you won't encounter any emergencies, but it's always good to be prepared. These numbers will connect you with the appropriate authorities for immediate assistance whenever needed. Your safety and well-being are our utmost priority at Pharaohs Medicare.<br /><br />
                        </p>
                        <div className="sli-cont slideanim">
                            <div>
                                <div className="slidez covered">
                                    <span style={ {
                                        backgroundColor: 'transparent'
                                    } }>
                                        <div
                                            style={ {
                                                backgroundImage: 'url(/a1.jpeg)'
                                            } }
                                        ></div>
                                        <div
                                            style={ {
                                                backgroundImage: 'url(/a2.jpeg)'
                                            } }
                                        ></div>
                                        <div
                                            style={ {
                                                backgroundImage: 'url(/a3.jpg)'
                                            } }
                                        ></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rt'>
                    <img onMouseEnter={ () => slidein1() } onMouseOut={ () => slideout1() } src='1.jpg' alt='' />
                    <img onMouseEnter={ () => slidein2() } onMouseOut={ () => slideout2() } src='2.jpg' alt='' />
                    <img onMouseEnter={ () => slidein3() } onMouseOut={ () => slideout3() } src='3.jpg' alt='' />
                </div>
                <div className='rt1' id='rt1'>
                    <img src='1.jpg' alt='' />
                </div>
                <div className='rt2' id='rt2'>
                    <img src='2.jpg' alt='' />
                </div>
                <div className='rt3' id='rt3'>
                    <img src='3.jpg' alt='' />
                </div>
            </div>
            <footer className='ff ' style={ { width: '87.5%' } }>
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
                                <img src='/mail.png' alt='mail' /> <a href="mailto:">PharaohsMedicare@gmail.com</a>
                            </p>
                            <p>
                                <img src='/phone.png' alt='phone' /> <a href="tel:">+201128442419</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}
