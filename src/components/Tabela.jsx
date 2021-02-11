import React from 'react'
import { Link } from 'react-router-dom'
import podaci from '../podaci.json'
export default function Tabela() {
    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-12'>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Dan</th>
                                <th>Minimalna temperatura</th>
                                <th>Maksimalna temperatura</th>
                                <th>Prosecna temperatura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {podaci.map(element => {
                                return <tr key={element.dan}>
                                    <td>{element.dan}</td>
                                    <td>{element.min}</td>
                                    <td>{element.max}</td>
                                    <td>{element.prosecno}</td>
                                    <td>
                                        <Link to={'/vreme/' + element.dan}>Detaljno</Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
