import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
import api from './api'
export default function Navbar( { } ) {


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
    }

    //form signup doctor ++ post request
    var [ userNameD, setUserNameD ] = useState()
    var [ fullNameD, setFullNameD ] = useState()
    var [ pwD, setPwD ] = useState()
    var [ CVD, setCVD ] = useState()

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
    const handleChangeCVD = ( x ) => {
        setCVD( x );
    }

    const signd = async () => {
        var res = ( await api.post( '/signupd/', {
            userName: userNameD,
            fullName: fullNameD,
            pw: pwD,
            cv: CVD
        } ) ).data;
        console.log( CVD );
        if ( res.x == true ) { alert( 'done' ) }
        if ( res.x == false ) { alert( 'error' ) }
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
    var [ chroniceDisease, setChroniceDisease ] = useState()
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
        setEHRP( { weight: weight, height: height, chroniceDisease: chroniceDisease, surgicalHistory: surgicalHistory, bloodType: bloodType, allergies: allergies } )
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
        setChroniceDisease( pwp );
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
            EHR: EHRP
        } ) ).data;
        if ( res.x == true ) { alert( 'done' ) }
        if ( res.x == false ) { alert( 'error' ) }
        if ( res.x == "non-unique username" ) { alert( 'error' ) }
    }
    //// end signup doctor

    //signin 
    var [ userNameS, setUserNameS ] = useState()
    var [ pwS, setpwS ] = useState()

    const handleChangeUserS = ( event ) => {
        var namePvalue = event.target.value;
        setUserNameP( namePvalue );
    };
    const handleChangePwS = ( event ) => {
        var pwp = event.target.value;
        setPwP( pwp );
    }

    const signin = async () => {
        var res = ( await api.get( '/signin/', {
            userName: userNameP,
            pw: pwP,
        } ) ).data;
        if ( res.x == true ) { alert( 'done' ) }
        if ( res.x == false ) { alert( 'error' ) }
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
    //show signin
    const showSignin = () => {
        document.getElementById( 'n' ).style.display = 'block'
        document.getElementById( 'su' ).style.display = 'none'
        document.getElementById( 'p' ).style.display = 'none'
        document.getElementById( 'd' ).style.display = 'none'

    }
    // cancel button 
    const cancel = () => {
        document.getElementById( 'p' ).style.display = 'none'
        document.getElementById( 'd' ).style.display = 'none'
        document.getElementById( 'su' ).style.display = 'none'
        document.getElementById( 'n' ).style.display = 'none'
    }

    const slidein4 = () => {
        document.getElementById( 'n' ).classList.remove( 'slideout' );
        document.getElementById( 'n' ).classList.add( 'slidein' );
    }
    const slideout4 = () => {
        document.getElementById( 'n' ).classList.remove( 'slidein' );
        document.getElementById( 'n' ).classList.add( 'slideout' );
    }

    return (
        <div className='nvbr'>
            <div className='logo'>
                <img src='logon.png' alt='' />
            </div>
            <div className='signf' id="n">
                <p>User Name<input type="text" onChange={ () => handleChangeUserS() }/></p>
                <p>Password<input type="password" onChange={ () => handleChangePwS() } /></p>
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
                <p>CV:<input type="file" id="cv" name="cv" /></p>
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
                        <Link to="/index.html">Home</Link>
                    </li>
                    <li className="n" id="i2">
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li className="n" id="i3">
                        <Link to="/travelagencies">Travel Agncies</Link>
                    </li>
                    <li className="n" id="i4">
                        <Link to="/medicaltourismplaces">Medical Tourism Places</Link>
                    </li>
                    <li className="n" id="i5">
                        <Link to="/onlinepsychotherapyapplications">Online Psychotherapy Apps</Link>
                    </li>
                </ul>
                <li className='icon' onClick={ () => slidein4() }><a>Sign In <img src='up.png' alt='' /></a></li>
                <li className='icon' onClick={ () => showSignupPanel() }><a>Sign Up <img src='up.png' alt='' /></a></li>
                <li className='iconl'><a>Language <img src='up.png' alt='' /></a></li>
            </ul>

        </div >
    )
}
