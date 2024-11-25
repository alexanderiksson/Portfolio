import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export function Layout() {
    return (
        <React.Fragment>

            <Header/>
            <main>
                <Outlet/>
            </main>

        </React.Fragment>
    );
}
