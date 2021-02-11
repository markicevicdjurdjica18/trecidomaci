import React from 'react'
import { withRouter } from 'react-router'

export default withRouter(function Kartica(props) {
    return (
        <div onClick={() => {
            props.history.push('/vreme/' + props.vreme.dan);
        }} className={`border mr-4 bg-dark text-light p-3 mt-1 hover-shadow rounded col-${props.sirina}`}>
            <h4 className='text-center over-shadow'>{props.vreme.dan}</h4>
            <br />
            <span><b>Prosecno</b>: {props.vreme.prosecno}</span>
            <br />
            <br />
            <span><b>Min</b>: {props.vreme.min}</span>
            <br />
            <br />
            <span><b>Max</b>: {props.vreme.max}</span>
            <br />
        </div>
    )
})
