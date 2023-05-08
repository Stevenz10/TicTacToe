import React from 'react';

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar">
                <div className='logo'>
                    <img className='logo' src="https://st2.depositphotos.com/42546960/45401/v/600/depositphotos_454015056-stock-illustration-x-ox-xo-letter-logo.jpg" alt='logo'/>
                </div>
                {
                    props.gameOver==true?<div className='resultado'>
                    {props.gameOver && props.winner !== null && "El ganador es: " + props.winner}
                    {props.gameOver && props.winner === null && "Empate"}
                </div>:null
                }
                <div className='reiniciar' onClick ={props.onClick}>
                    Reiniciar
                </div>
            </nav>
        </div>
    );
    }