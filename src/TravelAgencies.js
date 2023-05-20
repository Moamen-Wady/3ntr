import React, { useEffect } from 'react'
import Footer from './components/footer'
import './travelAgencies.css'
import DDownBar from './components/ddownb';

export default function TravelAgencies() {

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
        <div className='travelcont'>
            <DDownBar />
            <div className='travelc1'>
                <div className='travellt'>
                    <h1><i>-Travel Agencies:</i></h1>
                    <div className='travelprt'>
                        <div >
                            <h2>-Almosafer Travel Agency </h2> <br />
                            <a href='https://www.almosafer.com/en' target='_blank'> https://www.almosafer.com/en</a>
                        </div>
                        <div className='im2'> <img src='almosafer.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-Seera Group</h2> <br />
                            <a href='https://www.seera.sa/en' target='_blank'>https://www.seera.sa/en/</a>
                        </div>
                        <div className='im2'> <img src='seera.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-Memphis Tours Egypt</h2> <br />
                            <a href='https://www.memphistours.com/Egypt' target='_blank'>https://www.memphistours.com/Egypt</a>
                        </div>
                        <div className='im2'> <img src='memphis.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-Excel Travel Services</h2> <br />
                            <a href='https://www.exceltravelservices.com' target='_blank'>https://www.exceltravelservices.com/</a>
                        </div>
                        <div className='im2'> <img src='excel.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-Travco Travel Company Of Egypt</h2> <br />
                            <a href='https://travcotravel.com' target='_blank'>https://travcotravel.com/</a>
                        </div>
                        <div className='im2'> <img src='travco.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-Blue Sky Group</h2> <br />
                            <a href='https://www.blueskygroup.net' target='_blank'>https://www.blueskygroup.net/</a>
                        </div>
                        <div className='im2'> <img src='blue.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-Travel Choice Egypt</h2> <br />
                            <a href='https://www.facebook.com/Travelchoiceegypt' target='_blank'>https://www.facebook.com/Travelchoiceegypt/</a>
                        </div>
                        <div className='im2'> <img src='travel choice.jpeg' alt='' /></div>
                    </div>
                    <div className='travelprt'>
                        <div >
                            <h2>-M.T.S-Master Travel Service</h2> <br />
                            <a href='https://eg.linkedin.com/company/masters-travel-service' target='_blank'>https://eg.linkedin.com/company/masters-travel-service</a>
                        </div>
                        <div className='im2'> <img src='masters.jpeg' alt='' /></div>
                    </div>
                </div>
                <div className='travelrt'>
                    <img src='logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
