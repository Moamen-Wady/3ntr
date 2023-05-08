import React, { useEffect } from 'react'
import Footer from './components/footer'
import './Hospitals.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Hospitals() {

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

    return (
        <div className='hostcont'>
            <div className='hostc1'>
                <div className='hostlt'>
                    <h1><i>-Hospitals:</i></h1>
                    <div className='hostprt'><h2>-Ain Shams Specialized Hospital<br />
                        Address:El Khalifa El Maamoun St., Abbasseya, Cairo Beside Faculty Of Commerce - Ain Shams University <br />
                        Tel: <b>(02) 2402-4111 - (02) 2402-7166</b>
                    </h2>
                        <div className='im2'><img src='/hospitals/1.png' alt='' /></div>
                    </div>

                    <div className='hostprt'><h2>-Cairo Medical Hospital <br />
                        Address:4 Abou Ebaid El Bakry St. Off Ghernata St., Roxy, Heliopolis, Cairo<br />
                        Tel: <b>(02) 2450-4901</b>
                    </h2>
                        <div className='im2'><img src='/hospitals/2.jpg' alt='' /></div>
                    </div>

                    <div className='hostprt'><h2>-Alex-Sydeny-Kiel (ASK) Hospital<br />
                        Address:12 Roushdy St., Stanley, Alexandria<br />
                        Tel:<b>(03) 546-0126 - Mobile: 0122-398 7439</b>
                    </h2>
                        <div className='im2'><img src='/hospitals/3.jpg' alt='' /></div>
                    </div>

                    <div className='hostprt'><h2>-Mabaret Alasafra Hospital<br />
                        Address:432 Malak Hefni St., Alasafra Station, Alexandria<br />
                        Tel: <b>(03) 555-1612</b>
                    </h2>
                        <div className='im2'><img src='/hospitals/4.jpg' alt='' /></div>
                    </div>

                    <div className='hostprt'><h2>-Luxor International Hospital<br />
                        Address:Television St., LUXOR, Luxor Beside Shoaib Supermarket<br />
                        Tel: <b>(095) 238-7192 - (095) 237-9629</b>
                    </h2>
                        <div className='im2'><img src='/hospitals/5.jfif' alt='' /></div>
                    </div>

                </div>
                <div className='hostrt'>
                    <img src='/logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
