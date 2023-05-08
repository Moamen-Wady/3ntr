import React, { useEffect } from 'react'
import Footer from './components/footer'
import './Clinics.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Clinics() {

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
        <div className='clicont'>
            <div className='clic1'>
                <div className='clilt'>
                    <h1><i>-Clinics:</i></h1>
                    <div className='cliprt'><h2>-The Dentist Center Dr.Omar Eldidi<br />
                        Address:10 Abd El-Aziz Eissa, Al Asherah, Nasr City, Cairo Governorate, Nasr City, Cairo, 11762<br />
                        Tel: <b>20 128 888 1142</b>
                    </h2>
                        <div className='im2'><img src='/cli/1.jpg' alt='' /></div>
                    </div>

                    <div className='cliprt'><h2>-Asnan Dental Center "Dr.K.Bakeer"<br />
                        Address:101 El-Farik Abd El-Moneim Riad, Al Agouza, Mohandessin, Giza<br />
                        Tel: <b>20 122 736 4648</b>
                    </h2>
                        <div className='im2'><img src='/cli/2.jpg' alt='' /></div>
                    </div>

                    <div className='cliprt'><h2>-Dr. Mona El Fangary<br />
                        Address:October Branch - La Cite Mall - Service Axis - Above Zone Auto<br />
                        Tel:<b>201003939153</b>
                    </h2>
                        <div className='im2'><img src='/cli/3.jpg' alt='' /></div>
                    </div>

                    <div className='cliprt'><h2>-Dr. Mohamed El-Nazer – El-Nazer Clinic<br />
                        Address:27 Anas Ibn Malek Street, Mohandeseen<br />
                        Tel: <b>0111 194 1333</b>
                    </h2>
                        <div className='im2'><img src='/cli/4.jpg' alt='' /></div>
                    </div>

                    <div className='cliprt'><h2>-Dr. Eman Tantawy<br />
                        Address:Gazirat Mit Oqbah, Agouza, Giza, Egypt<br />
                        Tel: <b>01062078492</b>
                    </h2>
                        <div className='im2'><img src='/cli/5.jpg' alt='' /></div>
                    </div>

                </div>
                <div className='clirt'>
                    <img src='/logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
