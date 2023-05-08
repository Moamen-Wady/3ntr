import React, { useEffect } from 'react'
import './contact.css'
import Navbara from './components/navbara'
import Footera from './components/footera'
import Prefootera from './components/prefootera'
import Bannera from './components/bannera'
import Ula from './components/ula'
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
            <Navbara />
            <Ula />
            <Bannera />

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
            <Prefootera />
            <Footera />

        </>
    )
}
