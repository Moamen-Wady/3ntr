import React, { useEffect } from 'react'
import './contact.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import Banner from './components/banner'
import Ul from './components/ul'
export default function Contactus() {

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
        <>
            <Navbar />
            <Ul />
            <Banner />

            <div id='container'>
                    <div className='form'>
                        <img src='/logo.png' alt='' />
                        <p>
                            Required Informations
                        </p>
                        <form action="submit.php" method="post" id="form">
                            <input type="text" id="name" name="name" placeholder='Name / الاسم' />

                            <input type="email" id="email" name="email" placeholder='E-mail / الايميل' />

                            <input type="tel" id="phone" name="phone" placeholder='Your Phone Number / رقم التليفون' />

                            <input type="text" id="activity" name="activity" placeholder='Activity / نوع النشاط' />

                            <input type="number" id="residence" name="residence" placeholder='Number of Residences or Investors / عدد الاقامات او المستثمرين' />

                            <textarea id="notes" name="notes" placeholder='Notes / ملاحظات'></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
            </div>
            <Prefooter />
            <Footer />

        </>
    )
}
