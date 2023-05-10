import React, { useEffect } from 'react'
import Footer from './components/footer'
import './home.css'
import Navbar from './components/navbar';


export default function Home() {

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
                <Navbar />
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
            <Footer />
        </div >
    )
}
