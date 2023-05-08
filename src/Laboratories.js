import React, { useEffect } from 'react'
import Footer from './components/footer'
import './Laboratories.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Laboratories() {

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
        <div className='labcont'>
            <div className='labc1'>
                <div className='lablt'>
                    <h1><i>-Laboratories:</i></h1>
                    <div className='labprt'>
                        <div >
                            <h2>-Al Borg Laboratories: You can find the locations of their branches on their website:</h2> <br />
                            <a href=' https://alborglaboratories.com/branches/' target='_blank'>  https://alborglaboratories.com/branches/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/seif.jpeg' alt='' /></div>
                    </div>
                    <div className='labprt'>
                        <div >
                            <h2>-Al Mokhtabar Laboratories: You can find the locations of their branches on their website:</h2> <br />
                            <a href=' https://www.almokhtabar.com/en/branch-locator' target='_blank'> https://www.almokhtabar.com/en/branch-locator/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/az.jpeg' alt='' /></div>
                    </div>
                    <div className='labprt'>
                        <div >
                            <h2>-Integrated Diagnostics Holdings (IDH): You can find the locations of their branches on their website:</h2> <br />
                            <a href=' https://www.idhcorp.com/en/find-a-lab' target='_blank'> https://www.idhcorp.com/en/find-a-lab</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/fth.jpeg' alt='' /></div>
                    </div>
                    <div className='labprt'>
                        <div >
                            <h2>-Egyptian American Medical Center (EAMC): You can find the locations of their branches on their website:</h2> <br />
                            <a href=' http://www.eamc-eg.com/branches' target='_blank'> http://www.eamc-eg.com/branches/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/alpha.jpeg' alt='' /></div>
                    </div>
                    <div className='labprt'>
                        <div >
                            <h2>-Alfa Scan: You can find the locations of their branches on their website:</h2> <br />
                            <a href=' http://alfascan-labs.com/contact.php' target='_blank'> http://alfascan-labs.com/contact.php/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/shb.jpeg' alt='' /></div>
                    </div>
                    <div className='labprt'>
                        <div >
                            <h2>-El Nour for Medical Services: You can find the locations of their branches on their website:</h2> <br />
                            <a href=' https://elnour-labs.com/branches' target='_blank'> https://elnour-labs.com/branches/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/nhd.jpg' alt='' /></div>
                    </div>
                </div>
                <div className='labrt'>
                    <img src='logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
