import React, { useEffect } from 'react'
import Footer from './components/footer'
import './Pharmacies.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Pharmacies() {

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
        <div className='phcont'>
            <div className='phc1'>
                <div className='phlt'>
                    <h1><i>-Pharmacies:</i></h1>
                    <div className='phprt'>
                        <div >
                            <h2>-Seif Pharmacy: With over 200 branches across Egypt, you can find their locations on their website:  </h2> <br />
                            <a href='https://www.seifpharmacies.com/en/our-branches' target='_blank'> https://www.seifpharmacies.com/en/our-branches</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/seif.jpeg' alt='' /></div>
                    </div>
                    <div className='phprt'>
                        <div >
                            <h2>-El Ezaby Pharmacy: With over 150 branches across Egypt, you can find their locations on their website: </h2> <br />
                            <a href='https://elezabypharmacy.com/branches' target='_blank'>https://elezabypharmacy.com/branches/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/az.jpeg' alt='' /></div>
                    </div>
                    <div className='phprt'>
                        <div >
                            <h2>-Fathalla Pharmacy: With over 50 branches across Egypt, you can find their locations on their website: </h2> <br />
                            <a href='http://www.fathallapharmacy.com/stores' target='_blank'>http://www.fathallapharmacy.com/stores</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/fth.jpeg' alt='' /></div>
                    </div>
                    <div className='phprt'>
                        <div >
                            <h2>-Alfa Pharmacy: With over 30 branches across Egypt, you can find their locations on their website:</h2> <br />
                            <a href='http://alfapharmacy.com/stores' target='_blank'>http://alfapharmacy.com/stores</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/alpha.jpeg' alt='' /></div>
                    </div>
                    <div className='phprt'>
                        <div >
                            <h2>-Al Shabrawy Pharmacy: With over 20 branches in Cairo and Giza, you can find their locations on their website:</h2> <br />
                            <a href='https://www.alshabrawy.com/en/branches' target='_blank'>https://www.alshabrawy.com/en/branches/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/shb.jpeg' alt='' /></div>
                    </div>
                    <div className='phprt'>
                        <div >
                            <h2>-Nahdi Pharmacy: With over 10 branches in Egypt, you can find their locations on their website:</h2> <br />
                            <a href='https://www.nahdi.com/eg/en/stores' target='_blank'>https://www.nahdi.com/eg/en/stores/</a>
                        </div>
                        <div className='im2'> <img src='/pharmacies/nhd.jpg' alt='' /></div>
                    </div>
                </div>
                <div className='phrt'>
                    <img src='logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
