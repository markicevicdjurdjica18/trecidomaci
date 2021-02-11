import React from 'react'

export default function Podatak(props) {
    return (
        <div className='row mt-2'>
            <div className='col-4'>
                {props.naziv}
            </div>
            <div className='col-4'>
                {props.vrednost}
            </div>
        </div>
    )
}
