import React, { useEffect } from 'react'
import Footer from './components/footer'
import './Orthotics.css'
import DDownBar from './components/ddownb';

export default function Orthotics() {

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
        <div className='orthcont'>
            <DDownBar />
            <div className='orthc1'>
                <div className='orthlt'>
                    <h1><i>-Orthotics:</i></h1>
                    <div className='orthprt'><h2>-OrthoPro<br />
                        Address:13 Malek Hanafi, Al Mandarah Qebli, Montaza 2, Alexandria Governorate 5517222 <br />
                        Tel: <b>0127 608 8087</b>
                    </h2>

                    </div>

                    <div className='orthprt'><h2>-The Foot Scan<br />
                        Address:Elraml station, 11 Dr mohamed raafat, Alexandria Governorate<br />
                        Tel: <b>0114 500 8143</b>
                    </h2>

                    </div>

                    <div className='orthprt'><h2>-Medifoxx Egypt<br />
                        Address:14 Ahmed Housny Street Behind Rabaa Al-Adawiya Mosque, Nasr City, Cairo Governorate 11765<br />
                        Tel:<b>0102 299 9405</b>
                    </h2>

                    </div>

                    <div className='orthprt'><h2>-Orthomedics<br />
                        Address:97 El Tahrir, Ad Doqi, Dokki, Giza Governorate 3750275<br />
                        Tel: <b> 02 37623945</b>
                    </h2>

                    </div>

                    <div className='orthprt'><h2>-Ortho House<br />
                        Address:The Corner mall, Al Sadat Axis, New Cairo 1, Cairo Governorate 11841<br />
                        Tel: <b>02 28133823</b>
                    </h2>

                    </div>

                </div>
                <div className='orthrt'>
                    <img src='/logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
