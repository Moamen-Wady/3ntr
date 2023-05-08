import React, { useEffect } from 'react'
import Footer from './components/footer'
import './Radiology.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Radiology() {

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
        <div className='radcont'>
            <div className='radc1'>
                <div className='radlt'>
                    <h1><i>-Radiology:</i></h1>
                    <div className='radprt'><h2>-Dar Al Fouad Hospital<br />
                        Address:26 July Street, The Touristic Zone, , 6th of October City , Giza, JZ, Egypt, 12568 <br />
                        Tel: <b>01119983339</b>
                    </h2>
                        <div className='im2'><img src='/radiology/1.png' alt='' /></div>
                    </div>

                    <div className='radprt'><h2>-Andalusia Hospital Al Maadi<br />
                        Address:4G/6 Takseem Al Maadi - New، Maadi, Cairo Governorate , Cairo, QH, Egypt<br />
                        Tel: <b>01273664849</b>
                    </h2>
                        <div className='im2'><img src='/radiology/2.jpg' alt='' /></div>
                    </div>

                    <div className='radprt'><h2>-Aseel Medical Care Hospital<br />
                        Address:9 El Kamar District, El Hadaba, Hurghada, 84511 , Hurghada, BA, Egypt<br />
                        Tel:<b>01111107006</b>
                    </h2>
                        <div className='im2'><img src='/radiology/3.jpg' alt='' /></div>
                    </div>

                    <div className='radprt'><h2>-South Sinai Hospital, Sharm El-Sheikh<br />
                        Address:10 Ras Kennedy El-Salam, Qesm Sharm Ash Sheikh, South Sinai Governorate 46619 , Sharm el-Sheikh, JS, Egypt<br />
                        Tel: <b>01000436661</b>
                    </h2>
                        <div className='im2'><img src='/radiology/4.png' alt='' /></div>
                    </div>

                    <div className='radprt'><h2>-Andalusia Al Shalalat Hospital<br />
                        Address:19 Mohammed Mohammed Motawae St, Al Azaritah WA Ash Shatebi, Qism Bab Sharqi , Alexandria, SJ, Egypt<br />
                        Tel: <b>0127 601 1425</b>
                    </h2>
                        <div className='im2'><img src='/radiology/5.png' alt='' /></div>
                    </div>

                </div>
                <div className='radrt'>
                    <img src='/logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
