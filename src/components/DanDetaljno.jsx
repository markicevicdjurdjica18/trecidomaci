import React, { useState, useEffect } from 'react'
import podaci from '../podaci.json'
import { withRouter } from 'react-router'
import Podatak from './Podatak';
export default withRouter(function DanDetaljno(props) {
    const [dan, setDan] = useState(undefined);
    useEffect(() => {
        const value = podaci.find(element => element.dan === props.match.params.dan)
        setDan(value);
    }, [props])
    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-12'>
                    <h1 className='text-center'>Vremenska prognoza za {dan && dan.dan}</h1>
                </div>

            </div>
            <Podatak naziv='Prosecna temperatura' vrednost={dan?.prosecno} />
            <Podatak naziv='Minimalna temperatura' vrednost={dan?.min} />
            <Podatak naziv='Maksimalna temperatura' vrednost={dan?.max} />
            <br />
            <br />
            <span >Ostali podaci</span>
            <br />
            <br />
            <p className='border'>
                {dan?.opis}
            </p>

        </div>
    )
})
