import React, { useState, useEffect } from 'react'
import Navbar from './navbar';
import Footer from './footer';
import api from './api';
import './manage.css'
export default function Manage( { userObject, setUserObject } ) {

    var [ table, setTable ] = useState( <></> );
    var [ tab, setTab ] = useState( 1 );
    var [ users, setUsers ] = useState( [] )
    var [ rs, setRs ] = useState( [] )
    var [ rcv, setRcv ] = useState( [] )
    const getUsers = async () => {
        var res = ( await api.get( '/user' ) ).data
        setUsers( res )
    }
    const getDocRs = async () => {
        var res = ( await api.get( '/signupd' ) ).data
        setRs( res )
    }
    const delDocRs = async ( x ) => {
        var res = await ( await api.delete( `/signupd/${ x }` ) ).data
        await getDocRs();
        console.log( res )
        refresh();
        document.getElementById( tab ).click();
    }
    const accDocRs = async ( x ) => {
        var resx = await ( await api.post( `/addd/${ x }` ) ).data
        var res = await ( await api.delete( `/signupd/${ x }` ) ).data
        await getDocRs();
        await getUsers();
        refresh();
        document.getElementById( tab ).click();
        console.log( res )
        console.log( resx )
    }
    const delUsers = async ( x ) => {
        var res = await ( await api.delete( `/user/${ x }` ) ).data
        await getUsers();
        refresh();
        document.getElementById( tab ).click();
        console.log( res )
    }

    function openWindow( url ) {
        var win = window.open();
        win.document.write( '<iframe src="' + url + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>' );

    }

    const tableDecider = async () => {
        switch ( tab ) {
            case 1: {
                setTable( <table >
                    <th>User Name</th><th>Full Name</th><th>Type</th><th>Options</th>
                    <tbody>
                        {
                            users.map( ( user ) => {
                                return <tr key={ user.userName }><td>{ user.userName }</td><td>{ user.fullName }</td><td>{ user.type }</td><td><a onClick={ () => delUsers( user.userName ) }>Delete User</a></td></tr>
                            } ) }
                    </tbody>
                </table> )
            }
                break;
            case 2: {
                setTable( <table >
                    <th>User Name</th><th>Full Name</th><th>Type</th><th>C.V</th><th>Options</th>
                    <tbody>
                        {
                            rs.map( ( r ) => {
                                return <tr key={ r.userName }><td>{ r.userName }</td><td>{ r.fullName }</td><td>{ r.type }</td><td><a onClick={ () => openWindow( r.cv ) }></a></td><td><a onClick={ () => delDocRs( r.userName ) }>Delete User </a><a onClick={ () => accDocRs( r.userName ) }> Accept Doctor</a></td></tr>
                            } ) }
                    </tbody>
                </table >
                )
            }
                break;
            default: {
                setTable( <table >
                    <th>User Name</th><th>Full Name</th><th>Type</th><th>Options</th>
                    <tbody>
                        {
                            users.map( ( user ) => {
                                return <tr key={ user.userName }><td>{ user.userName }</td><td>{ user.fullName }</td><td>{ user.type }</td><td><a onClick={ () => delUsers( user.userName ) }>Delete User</a></td></tr>
                            } ) }
                    </tbody>
                </table> )
            }
                break;
        }
    }

    const refresh = async () => {
        getUsers();
        getDocRs();
        tableDecider();
        console.log( 'x' )
    }
    useEffect(
        () => { refresh(); }

        , [ tab ] )

    const tab1 = () => { setTab( 1 ); refresh(); console.log( tab ) }
    const tab2 = () => { setTab( 2 ); refresh(); console.log( tab ) }

    return (
        userObject.type == 'admin' ?
            <>
                <Navbar userObject={ userObject } setUserObject={ setUserObject } />
                <div className='tables'>
                    <span onClick={ () => tab1() } id="1">Manage Users</span>
                    <span onClick={ () => tab2() } id="2">Manage Requests</span>
                    { table }
                </div>
                <Footer />
            </>
            :
            <>UNAUTHORIZED</>
    )
}
