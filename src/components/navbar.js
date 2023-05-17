import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import api from './api'
import Logo from './logo'
export default function Navbar( { userObject, setUserObject } ) {

    //signed in or not
    var [ userSide, setUserSide ] = useState()
    const userSideDecider = () => {
        switch ( userObject.type ) {

            case "admin":
                setUserSide( <>
                    <li className='icon' ><a>Welcome, { userObject.name } </a></li>
                    <li className='icon' onClick={ () => LogOut() }><a>Log Out <img src='sout.png' alt='' /></a></li>
                    <li className='icon ' onClick={ () => { console.log( userObject ) } }><Link to='/manage'>Manage Website<img src='sout.png' alt='' /></Link></li>
                </> )
                break;


            case "Doc":
                setUserSide( <>
                    <li className='icon' ><a>Welcome, { userObject.name } </a></li>
                    <li className='icon' onClick={ () => LogOut() }><a>Log Out <img src='sout.png' alt='' /></a></li>
                </> )
                break;


            case "Pat":
                setUserSide( <>
                    <li className='icon' ><a>Welcome, { userObject.name } </a></li>
                    <li className='icon' onClick={ () => LogOut() }><a>Log Out <img src='sout.png' alt='' /></a></li>
                </> )
                break;

            case "none":
                setUserSide( <>
                    <li className='icon' onClick={ () => slidein4() }><a>Sign In <img src='sin.png' alt='' /></a></li>
                    <li className='icon' onClick={ () => showSignupPanel() }><a>Sign Up <img src='sup.png' alt='' /></a></li>
                </> )
                break;
            default:

        }

        console.log( userObject )
    }

    useEffect(
        () => userSideDecider()
        , [ userObject ] )

    function LogOut() {
        setUserObject( { type: "none" } );
    }
    //navbar
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

    //form signup doctor ++ post request
    var [ userNameD, setUserNameD ] = useState()
    var [ fullNameD, setFullNameD ] = useState()
    var [ pwD, setPwD ] = useState()

    const handleChangeUserD = ( event ) => {
        var nameDvalue = event.target.value;
        setUserNameD( nameDvalue );
    };
    const handleChangeFullD = ( event ) => {
        var fullDvalue = event.target.value;
        setFullNameD( fullDvalue );
    };
    const handleChangePwD = ( event ) => {
        var pwd = event.target.value;
        setPwD( pwd );
    }
    var [ d, setD ] = useState()
    const openFile = function ( event ) {
        var input = event.target;
        var reader = new FileReader();
        reader.readAsDataURL( input.files[ 0 ] );
        reader.onload = function () {
            setD( reader.result );
            console.log( reader.result )
        };
    };

    const signd = async () => {
        var res = ( await api.post( '/signupd/', {
            userName: userNameD,
            fullName: fullNameD,
            pw: pwD,
            cv: d,
            type: "Doc"
        } ) ).data;
        if ( res.x == true ) { alert( 'done' ); cancel(); }
        if ( res.x == false ) { alert( 'user name is already taken, please try another one' ) }
    }

    //// end signup doctor

    //form signup patient ++ post request
    var [ fullNameP, setFullNameP ] = useState()
    var [ userNameP, setUserNameP ] = useState()
    var [ pwP, setPwP ] = useState()
    var [ nidP, setNidP ] = useState()
    var [ genderP, setGenderP ] = useState()
    var [ ageP, setAgeP ] = useState()
    var [ maritalStatusP, setMaritalStatusP ] = useState()
    var [ addressP, setAddressP ] = useState()
    var [ phoneP, setPhoneP ] = useState()
    var [ jobP, setJobP ] = useState()
    var [ nationalityP, setNationalityP ] = useState()
    var [ EHRP, setEHRP ] = useState()
    var [ weight, setWeight ] = useState()
    var [ height, setHeight ] = useState()
    var [ allergies, setAllergies ] = useState()
    var [ chronicDisease, setChronicDisease ] = useState()
    var [ surgicalHistory, setSurgicalHistory ] = useState()
    var [ bloodType, setBloodType ] = useState()

    const handleChangeUserP = ( event ) => {
        var namePvalue = event.target.value;
        setUserNameP( namePvalue );
    };
    const handleChangeFullP = ( event ) => {
        var fullPvalue = event.target.value;
        setFullNameP( fullPvalue );
    };
    const handleChangePwP = ( event ) => {
        var pwp = event.target.value;
        setPwP( pwp );
    }

    const handleChangeNidP = ( event ) => {
        var pwp = event.target.value;
        setNidP( pwp );
    }

    const handleChangeGenderP = ( event ) => {
        var pwp = event.target.value;
        setGenderP( pwp );
    }

    const handleChangeAgeP = ( event ) => {
        var pwp = event.target.value;
        setAgeP( pwp );
    }

    const handleChangeMaritalStatusP = ( event ) => {
        var pwp = event.target.value;
        setMaritalStatusP( pwp );
    }

    const handleChangeAdressP = ( event ) => {
        var pwp = event.target.value;
        setAddressP( pwp );
    }

    const handleChangePhoneP = ( event ) => {
        var pwp = event.target.value;
        setPhoneP( pwp );
    }

    const handleChangeJobP = ( event ) => {
        var pwp = event.target.value;
        setJobP( pwp );
    }

    const handleChangeNationalityP = ( event ) => {
        var pwp = event.target.value;
        setNationalityP( pwp );
    }

    const handleChangeEHRP = () => {
        setEHRP( { weight: weight, height: height, Chronic_Disease: chronicDisease, Surgical_History: surgicalHistory, Blood_Type: bloodType, allergies: allergies } )
    }

    const handleChangeWeight = ( event ) => {
        var pwp = event.target.value;
        setWeight( pwp );
        handleChangeEHRP();
    }

    const handleChangeHeight = ( event ) => {
        var pwp = event.target.value;
        setHeight( pwp );
        handleChangeEHRP();
    }

    const handleChangeChronicDisease = ( event ) => {
        var pwp = event.target.value;
        setChronicDisease( pwp );
        handleChangeEHRP();
    }

    const handleChangeSurgicalHistory = ( event ) => {
        var pwp = event.target.value;
        setSurgicalHistory( pwp );
        handleChangeEHRP();
    }

    const handleChangeBloodType = ( event ) => {
        var pwp = event.target.value;
        setBloodType( pwp );
        handleChangeEHRP();
    }

    const handleChangeAllergies = ( event ) => {
        var pwp = event.target.value;
        setAllergies( pwp );
        handleChangeEHRP();
    }

    const signp = async () => {
        var res = ( await api.post( '/signupp/', {
            userName: userNameP,
            fullName: fullNameP,
            pw: pwP,
            nid: nidP,
            gender: genderP,
            age: ageP,
            maritalStatus: maritalStatusP,
            address: addressP,
            phone: phoneP,
            job: jobP,
            nationality: nationalityP,
            EHR: EHRP,
            type: "Pat"

        } ) ).data;
        if ( res.x == true ) { alert( 'done' ); setUserObject( { name: res.user.fname, type: res.user.type } ); cancel(); }
        if ( res.x == false ) { alert( 'user name is already taken, please try another one' ) }
    }
    //// end signup doctor

    //signin 
    var [ userNameS, setUserNameS ] = useState()
    var [ pwS, setpwS ] = useState()

    const handleChangeUserNameS = ( event ) => {
        var pwp = event.target.value;
        setUserNameS( pwp );
    }
    const handleChangePwS = ( event ) => {
        var pwp = event.target.value;
        setpwS( pwp );
    }


    const signin = async () => {
        var res = ( await api.post( '/signin/', {
            userName: userNameS,
            pw: pwS,
        } ) ).data;
        if ( res.x == true ) { alert( 'done' ); setUserObject( { name: res.user.fname, type: res.user.type } ); slideout4(); }
        if ( res.x == false ) { alert( 'incorrect user name or Password, please try again' ) }
    }



    // signup button
    const showSignupPanel = () => {
        document.getElementById( 'su' ).style.display = 'block'
    }
    // choose signup
    const showPatientSignup = () => {
        document.getElementById( 'p' ).style.display = 'block'
        document.getElementById( 'su' ).style.display = 'none'
    }
    const showDoctorSignup = () => {
        document.getElementById( 'd' ).style.display = 'block'
        document.getElementById( 'su' ).style.display = 'none'
    }
    // cancel button 
    const cancel = () => {
        document.getElementById( 'p' ).style.display = 'none'
        document.getElementById( 'd' ).style.display = 'none'
        document.getElementById( 'su' ).style.display = 'none'
    }
    //show signin
    const slidein4 = () => {
        document.getElementById( 'n' ).classList.remove( 'slideout' );
        document.getElementById( 'n' ).classList.add( 'slidein' );
    }
    const slideout4 = () => {
        document.getElementById( 'n' ).classList.remove( 'slidein' );
        document.getElementById( 'n' ).classList.add( 'slideout' );
    }

    return (
        <div style={ { display: "block", marginRight: 'auto', width: "100%" } }>
            <div className='nvbr'>
                <div className='signf' id="n">
                    <p>User Name<input type="text" onChange={ handleChangeUserNameS } /></p>
                    <p>Password<input type="password" onChange={ handleChangePwS } /></p>
                    <a onClick={ () => signin() }>Login</a>
                    <a onClick={ () => slideout4() }>Cancel</a>
                </div>

                <div className='signup' id='su'>
                    <h1>Sign Up</h1>
                    <a onClick={ () => showPatientSignup() }>Sign Up As a Patient </a>
                    <a onClick={ () => showDoctorSignup() }>Sign Up As a Medical Provider </a>
                    <br />
                    <a onClick={ () => cancel() } className='cancel'>Cancel</a>
                </div>
                <form className='signf' id='d'>
                    <p>Full Name:<input type="text" id="fullName" name="fullName" onChange={ handleChangeFullD } /></p>
                    <p>User Name:<input type="text" id="userName" name="userName" onChange={ handleChangeUserD } /></p>
                    <p>Password:<input type="password" id="pw" name="pw" onChange={ handleChangePwD } /></p>
                    <p>CV:<input type="file" id="cv" name="cv" onChange={ openFile } /></p>
                    <a onClick={ () => signd() }>submit</a>
                    <a onClick={ () => cancel() }>Cancel</a>
                </form>

                <form className='signf' id='p' >
                    <p>Full Name:<input type="text" onChange={ handleChangeFullP } /></p>
                    <p>User Name:<input type="text" onChange={ handleChangeUserP } /></p>
                    <p>Password:<input type="password" onChange={ handleChangePwP } /></p>
                    <p>National ID:<input type="text" onChange={ handleChangeNidP } /></p>
                    <p>Gender:<input type="text" onChange={ handleChangeGenderP } /></p>
                    <p>Age:<input type="number" onChange={ handleChangeAgeP } /></p>
                    <p>Marital Status:<input type="text" onChange={ handleChangeMaritalStatusP } /></p>
                    <p>Address:<input type="text" onChange={ handleChangeAdressP } /></p>
                    <p>Phone:<input type="text" onChange={ handleChangePhoneP } /></p>
                    <p>Job:<input type="text" onChange={ handleChangeJobP } /></p>
                    <p>Nationality:<input type="text" onChange={ handleChangeNationalityP } /></p>
                    <p>Weight:<input type="text" onChange={ handleChangeWeight } /></p>
                    <p>Height:<input type="text" onChange={ handleChangeHeight } /></p>
                    <p>Chronic Disease:<input type="text" onChange={ handleChangeChronicDisease } /></p>
                    <p>surgical History:<input type="text" onChange={ handleChangeSurgicalHistory } /></p>
                    <p>Blood Type:<input type="text" onChange={ handleChangeBloodType } /></p>
                    <p>Allergies:<input type="text" onChange={ handleChangeAllergies } /></p>
                    <a onClick={ () => signp() }>submit</a>
                    <a onClick={ () => cancel() }>Cancel</a>
                </form>

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
                    { userSide }
                </ul>
            </div>
            <Logo />
        </div >
    )
}
