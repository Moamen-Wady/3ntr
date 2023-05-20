import './navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function DDownBar( { } ) {

    function menuh() {
        var hb = document.getElementById( "hide" );
        var vb = document.getElementById( "view" );
        hb.style.display = "block"
        vb.style.display = "none"
        document.getElementById( 'i1' ).style.display = 'none'
        document.getElementById( 'i2' ).style.display = 'none'
        document.getElementById( 'i3' ).style.display = 'none'
        document.getElementById( 'i4' ).style.display = 'none'
        document.getElementById( 'i5' ).style.display = 'none'
        document.getElementById( 'i6' ).style.display = 'none'
    }

    function menu() {
        var hb = document.getElementById( "hide" );
        var vb = document.getElementById( "view" );
        hb.style.display = "none"
        vb.style.display = "block"
        document.getElementById( 'i1' ).style.display = 'block'
        document.getElementById( 'i2' ).style.display = 'block'
        document.getElementById( 'i3' ).style.display = 'block'
        document.getElementById( 'i4' ).style.display = 'block'
        document.getElementById( 'i5' ).style.display = 'block'
        document.getElementById( 'i6' ).style.display = 'block'
    }

    return (
        <ul className='ul'>
            <li className='icon1'>
                <li className="n" id="haha">
                    <a id="hide" onClick={ () => menu() }>
                        <img src="up.png" alt=""
                        /></a>
                    <a id="view" onClick={ () => menuh() }>
                        <img src="up.png" alt="" />
                    </a>
                </li>
            </li>
            <ul className="main" style={ { listStyleType: 'none' } }>
                <li className="n" id="i1">
                    <Link to="/">Home</Link>
                </li>
                <li className="n" id="i2">
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li className="n our" id="i3">
                    <a href="#"> Our Services &#10095; </a>
                    <ul className="ourServices">
                        <li>
                            <Link to="/hospitals">Hospitals</Link>
                        </li>
                        <li>
                            <Link to="/clinics">Clinics</Link>
                        </li>
                        <li>
                            <Link to="/pharmacies">Pharmacies</Link>
                        </li>
                        <li>
                            <Link to="/laboratories">Laboratories</Link>
                        </li>
                        <li>
                            <Link to="/orthotics">Orthotics</Link>
                        </li>
                        <li>
                            <Link to="/radiology">Radiology</Link>
                        </li>
                        <li>
                            <Link to="/organtransplantcenters">Organ Transplant Centers</Link>
                        </li>
                    </ul>
                </li>

                <li className="n" id="i4">
                    <Link to="/travelagencies">Travel Agncies</Link>
                </li>
                <li className="n" id="i5">
                    <Link to="/medicaltourismplaces">Medical Tourism Places</Link>
                </li>
                <li className="n" id="i6">
                    <Link to="/onlinepsychotherapyapplications">Online Psychotherapy Apps</Link>
                </li>
            </ul>
        </ul>
    )
}