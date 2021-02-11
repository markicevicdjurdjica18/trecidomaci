import React, { useState } from 'react'
import podaci from '../podaci.json'
import Kartica from './Kartica';

export default function Home() {
    const [brojPrikazani, setBrojPrikazani] = useState(4);
    const [pocetniIndex, setPocetniIndex] = useState(0);
    const prikazi = () => {
        const niz = [];
        for (let i = 0; i < brojPrikazani; i++) {
            niz.push(
                <Kartica vreme={podaci[i + pocetniIndex]} sirina={(12 / brojPrikazani) - 1} />
            )
        }
        return niz;
    }
    const promeni = (vrednost = 1) => {
        setPocetniIndex(prev => {
            const novi = prev + vrednost;
            if (novi < 0 || novi + brojPrikazani > podaci.length) {
                return prev;
            }
            return novi;
        })
    }
    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-3'>
                    <label >Prikazi</label>
                    <select value={brojPrikazani} onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setBrojPrikazani(value);
                    }} className='form-control'>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>

                    </select>
                </div>
                <div className='col-4'>
                    <button onClick={(e) => {
                        promeni(-1)
                    }} className='btn btn-light mt-4 ml-3'>{'<'} </button>
                    <button onClick={(e) => {
                        promeni(1)
                    }} className='btn btn-light mt-4 ml-3'>{'>'} </button>
                </div>
            </div>
            <div className='row mt-2 d-flex justify-content-center'>
                {
                    prikazi()
                }
            </div>
        </div>
    )
}
