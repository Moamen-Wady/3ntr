import React, { useEffect } from 'react'
import Footer from './components/footer'
import './OnlinePsychtherapyApplications.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function OnlinePsychotherapyApplications() {

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
        <div className='ostcont'>
            <div className='ostc1'>
                <div className='ostlt'>
                    <h1><i>-Online Psychotherapy Applications:</i></h1>
                    <div className='ostprt'><h2>-BetterHelp: This app offers access to licensed therapists who can provide online counseling sessions via messaging, phone, or video chat.</h2>
                        <a href='https://play.google.com/store/apps/details?id=com.betterhelp' target='_blank'>https://play.google.com/store/apps/details?id=com.betterhelp</a></div>
                    <div className='ostprt'><h2>-Talkspace: This app also offers access to licensed therapists who can provide online counseling sessions via messaging, phone, or video chat. </h2>
                        <a href='https://play.google.com/store/apps/details?id=com.talkspace.talkspaceapp' target='_blank'>https://play.google.com/store/apps/details?id=com.talkspace.talkspaceapp/</a></div>
                    <div className='ostprt'><h2>-Calm: This app provides guided meditations, sleep stories, and other tools to help users manage stress and anxiety.</h2>
                        <a href='https://play.google.com/store/apps/details?id=com.calm.android' target='_blank'>https://play.google.com/store/apps/details?id=com.calm.android</a></div>
                    <div className='ostprt'><h2>-Headspace: This app provides guided meditations and mindfulness exercises to help users manage stress, anxiety, and other mental health issues.</h2>
                        <a href='https://play.google.com/store/apps/details?id=com.getsomeheadspace.android' target='_blank'>https://play.google.com/store/apps/details?id=com.getsomeheadspace.android/</a></div>
                    <div className='ostprt'><h2>-Moodfit: This app offers daily mood tracking, as well as guided exercises and other tools to help users manage their mental health.</h2>
                        <a href='https://play.google.com/store/apps/details?id=com.robleridge.Moodfit' target='_blank'>https://play.google.com/store/apps/details?id=com.robleridge.Moodfit/</a></div>
                </div>
                <div className='ostrt'>
                    <img src='logon.png' alt='' />
                </div>
            </div>
            <Footer />
        </div >
    )
}
