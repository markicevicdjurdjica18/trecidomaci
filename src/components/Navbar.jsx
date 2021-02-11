import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" >Vremenska prognoza</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/'>Kartice</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/tabela'>Tabela</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
