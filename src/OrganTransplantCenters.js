import React, { useEffect } from 'react'
import Footer from './components/footer'
import './OrganTransplantCenters.css'
import DDownBar from './components/ddownb';

export default function OrganTransplantCenters() {

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
        <div className='otccont'>
            <DDownBar />
            <div className='otcc1'>
                <div className='otclt'>
                    <h1><i>-Organ Transplant Centers:</i></h1>
                    <div className='otcprt'><h2>-Elite Hospital, Alexandria<br />
                        Address:Qetaa an Nahdah, Al Amaria First, Alexandria Governorate , Alexandria, SJ, Egypt<br />
                        Tel: <b>15461</b>
                    </h2>
                        <div className='im2'><img src='/otc/1.jpg' alt='' /></div>
                    </div>

                    <div className='otcprt'><h2>-Saudi German Hospital, Cairo<br />
                        Address:Josef Teto street - Nozha, Heliopolis , Cairo, QH, Egypt<br />
                        Tel: <b>16259</b>
                    </h2>
                        <div className='im2'><img src='/otc/2.jpg' alt='' /></div>
                    </div>

                    <div className='otcprt'><h2>-Nile Hospital, Hurghada<br />
                        Address:El-Nasr, Hurghada, Red Sea Governorate , Hurghada, BA, Egypt<br />
                        Tel: <b>20653550975</b>
                    </h2>
                        <div className='im2'><img src='/otc/3.jpg' alt='' /></div>
                    </div>

                    <div className='otcprt'><h2>-Dar Al Fouad Hospital<br />
                        Address:26 July Street, The Touristic Zone, , 6th of October City , Giza, JZ, Egypt, 12568 <br />
                        Tel: <b>01119983339</b>
                    </h2>
                        <div className='im2'><img src='/otc/4.png' alt='' /></div>
                    </div>

                    <div className='otcprt'><h2>-Aseel Medical Care Hospital<br />
                        Address:9 El Kamar District, El Hadaba, Hurghada, 84511 , Hurghada, BA, Egypt<br />
                        Tel:<b>01111107006</b>
                    </h2>
                        <div className='im2'><img src='/otc/5.jpg' alt='' /></div>
                    </div>

                </div>
                <div className='otcrt'>
                    <img src='/logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
