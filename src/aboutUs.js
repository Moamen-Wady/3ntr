import React, { useEffect } from 'react'
import Footer from './components/footer'
import './aboutUs.css'
import DDownBar from './components/ddownb';

export default function AboutUs() {

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
      <DDownBar />
      <div className='ostc1'>
        <div className='ostlt'>
          <h1><i>-About Us:</i></h1>
          <div className='ostprt'><h2>Mission statement: "Our mission is to provide high-quality healthcare services to patients from around the world, while showcasing the beauty and culture of Egypt."</h2></div>
          <div className='ostprt'><h2>Background information: "Founded in 2023, our healthcare tourism company was created to meet the growing demand for affordable, high-quality medical services in Egypt. Our team is made up of experienced medical professionals and tourism experts who are dedicated to providing our patients with a comfortable and stress-free experience." </h2></div>
          <div className='ostprt'><h2>Services: "We offer a range of medical services, including cosmetic surgery, dental treatments, fertility treatments, and orthopedic surgeries. Our healthcare facilities are equipped with state-of-the-art technology and staffed by experienced doctors and nurses. We also provide cultural tours and sightseeing packages for patients who want to explore Egypt during their recovery."</h2></div>
          <div className='ostprt'><h2>Team members: "Our team is comprised of experienced medical professionals, including surgeons, dentists, and fertility specialists. We also have a team of tourism experts who can help patients plan their trip and make the most of their stay in Egypt."</h2></div>
          <div className='ostprt'><h2>Contact information: "To contact us, please email us at info@healthcareegypt.com or call us at +20 10 1234 5678. You can also fill out our online contact form on our website."</h2></div>
          <div className='ostprt'><h2>Testimonials or awards: "We are proud to have received several awards for our commitment to providing high-quality healthcare services to our patients.</h2></div>
          <div className='ostprt'><h2>Overall, the "About Us" section on the healthcare tourism website in Egypt should emphasize the quality of care provided, the expertise of the medical professionals, and the beauty and culture of Egypt. It should also provide clear and concise information about the services offered, the team members, and how to get in touch. Incorporating images and videos to showcase the facilities and the sights of Egypt can also help make the content more engaging</h2></div>
        </div>
        <div className='ostrt'>
          <img src='logon.png' alt='' />
        </div>
      </div>
      <Footer />
    </div >
  )
}
