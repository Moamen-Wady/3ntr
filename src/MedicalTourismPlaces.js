import React, { useEffect } from 'react'
import Footer from './components/footer'
import './MedicalTourismPlaces.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function MedicalTourismPlaces() {

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
        <div className='mtcont'>
            <div className='mtc1'>
                <div className='mtlt'>
                    <h1><i>-Medical Tourism Places:</i></h1>
                    <div className='mtprt'><h2>Bahariya Oasis:
                        It is a group of Egyptian oases located
                        in the Western Desert. This valley has
                        an area of approximately 2000 square
                        kilometers and is surrounded by
                        mountains and many water springs.
                        "Gabel Dakrour" is the popular spot
                        there for healing because it contains
                        about 400 sulfur & mineral water. It is
                        the best place for patients to heal who
                        suffer from rheumatic issues, skin diseases, and gastritis.
                    </h2>
                        <div className='im2'><img src='/mt/1.png' alt='' /></div>
                    </div>

                    <div className='mtprt'><h2>Kharga Oasis:
                        It is located in South Assiut and contains deep
                        wells such as Bulaq Wells and Nasser wells with
                        lots of therapeutic benefits. According to laboratory analysis,
                        it is proven that these wells contain mineralized water,
                        which is beneficial to treat kidney stones, skin diseases,
                        rheumatic diseases, digestive system disorders, etc.
                    </h2>
                        <div className='im2'><img src='/mt/2.png' alt='' /></div>
                    </div>

                    <div className='mtprt'><h2>-Aswan City:
                        It is a famous tourist city that is located in Upper Egypt.
                        The city's atmosphere is suitable for patients with kidney,
                        respiratory systems, and rheumatic diseases. It has two sand
                        and water treatment centers that are used for treating rheumatoid
                        due to salt in seawater and UV rays beside the usage of natural black sand.
                    </h2>
                        <div className='im2'><img src='/mt/3.png' alt='' /></div>
                    </div>

                    <div className='mtprt'><h2>-Siwa Oasis:
                        It is the most visited natural treatment spot in Egypt because
                        it contains natural 230 freshwater springs and natural flowing 1000 wells.
                        Mount Dakrur is a famous mountain there which is used in the treatment of rheumatic diseases.
                    </h2>
                        <div className='im2'><img src='/mt/4.png' alt='' /></div>
                    </div>

                </div>
                <div className='mtrt'>
                    <img src='/logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
